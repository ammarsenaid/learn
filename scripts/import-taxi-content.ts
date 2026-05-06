import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

function loadEnvLocal(): void {
  const envPath = resolve(process.cwd(), '.env.local');
  if (!existsSync(envPath)) return;

  const content = readFileSync(envPath, 'utf8');
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const separatorIndex = line.indexOf('=');
    if (separatorIndex <= 0) continue;

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

type ImportPayload = {
  certificateSlug: string;
  chapters: Array<{
    slug: string;
    title: string;
    description?: string;
    estimated_minutes?: number;
    position?: number;
    lessons?: Array<{
      slug: string;
      title: string;
      summary?: string;
      content_de?: string;
      content_ar?: string;
      estimated_minutes?: number;
      position?: number;
      flashcards?: Array<{
        slug?: string;
        front_de: string;
        back_de: string;
        explanation_ar?: string;
        difficulty?: string;
        tags?: string[];
        position?: number;
      }>;
      questions?: Array<{
        slug?: string;
        question_de: string;
        explanation_de?: string;
        explanation_ar?: string;
        difficulty?: string;
        tags?: string[];
        position?: number;
        options?: Array<{
          option_text_de: string;
          is_correct: boolean;
          position?: number;
        }>;
      }>;
    }>;
    flashcards?: Array<any>;
    questions?: Array<any>;
  }>;
  glossary?: Array<{
    term: string;
    simple_de?: string;
    explanation_ar?: string;
    category?: string;
    tags?: string[];
    position?: number;
  }>;
};

const directusUrl = () => {
  const value = process.env.DIRECTUS_URL;
  if (!value) throw new Error('DIRECTUS_URL is missing in .env.local');
  return value.replace(/\/$/, '');
};

const directusToken = () => {
  const value = process.env.DIRECTUS_TOKEN;
  if (!value) throw new Error('DIRECTUS_TOKEN is missing in .env.local');
  return value;
};

async function directusRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${directusUrl()}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${directusToken()}`,
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Directus request failed ${response.status} ${response.statusText}: ${errorText}`);
  }

  const json = (await response.json()) as { data: T };
  return json.data;
}

async function findOneByField(collection: string, field: string, value: string, extraFilter: Record<string, string> = {}) {
  const query = new URLSearchParams({ limit: '1', [`filter[${field}][_eq]`]: value });
  for (const [k, v] of Object.entries(extraFilter)) query.set(`filter[${k}][_eq]`, v);
  const data = await directusRequest<any[]>(`/items/${collection}?${query.toString()}`);
  return data[0] ?? null;
}

async function createItem(collection: string, payload: Record<string, unknown>) {
  return directusRequest<any>(`/items/${collection}`, { method: 'POST', body: JSON.stringify(payload) });
}

async function updateItem(collection: string, id: string, payload: Record<string, unknown>) {
  return directusRequest<any>(`/items/${collection}/${id}`, { method: 'PATCH', body: JSON.stringify(payload) });
}

async function upsertByField(collection: string, field: string, value: string, payload: Record<string, unknown>, extraFilter: Record<string, string> = {}) {
  const existing = await findOneByField(collection, field, value, extraFilter);
  if (existing) {
    const updated = await updateItem(collection, existing.id, payload);
    console.log(`Updated ${collection}: ${value}`);
    return updated;
  }

  const created = await createItem(collection, { [field]: value, ...payload });
  console.log(`Created ${collection}: ${value}`);
  return created;
}

function ensureArrayTags(value?: string[]): string[] {
  return Array.isArray(value) ? value : [];
}

async function run(): Promise<void> {
  loadEnvLocal();

  const inputFile = process.argv[2];
  if (!inputFile) {
    throw new Error('Usage: npm run import:taxi-content -- <path-to-json>');
  }

  const payload = JSON.parse(readFileSync(resolve(process.cwd(), inputFile), 'utf8')) as ImportPayload;

  const certificate = await findOneByField('certificates', 'slug', payload.certificateSlug);
  if (!certificate) {
    throw new Error(`Certificate not found for slug: ${payload.certificateSlug}`);
  }

  for (const [chapterIndex, chapter] of payload.chapters.entries()) {
    const chapterRecord = await upsertByField(
      'chapters',
      'slug',
      chapter.slug,
      {
        certificate_id: certificate.id,
        title: chapter.title,
        description: chapter.description ?? '',
        estimated_minutes: chapter.estimated_minutes ?? null,
        position: chapter.position ?? chapterIndex + 1,
        status: 'published',
      },
      { certificate_id: certificate.id },
    );

    const lessons = chapter.lessons ?? [];
    for (const [lessonIndex, lesson] of lessons.entries()) {
      const lessonRecord = await upsertByField(
        'lessons',
        'slug',
        lesson.slug,
        {
          certificate_id: certificate.id,
          chapter_id: chapterRecord.id,
          title: lesson.title,
          summary: lesson.summary ?? '',
          content_de: lesson.content_de ?? '',
          content_ar: lesson.content_ar ?? '',
          estimated_minutes: lesson.estimated_minutes ?? null,
          position: lesson.position ?? lessonIndex + 1,
          status: 'published',
        },
        { certificate_id: certificate.id },
      );

      for (const [cardIndex, card] of (lesson.flashcards ?? []).entries()) {
        const cardKey = card.slug ?? `${lesson.slug}-card-${cardIndex + 1}`;
        await upsertByField(
          'flashcards',
          'slug',
          cardKey,
          {
            certificate_id: certificate.id,
            chapter_id: chapterRecord.id,
            lesson_id: lessonRecord.id,
            front_de: card.front_de,
            back_de: card.back_de,
            explanation_ar: card.explanation_ar ?? '',
            difficulty: card.difficulty ?? 'normal',
            tags: ensureArrayTags(card.tags),
            position: card.position ?? cardIndex + 1,
          },
          { certificate_id: certificate.id },
        );
      }

      for (const [questionIndex, question] of (lesson.questions ?? []).entries()) {
        const questionKey = question.slug ?? `${lesson.slug}-question-${questionIndex + 1}`;
        const questionRecord = await upsertByField(
          'questions',
          'slug',
          questionKey,
          {
            certificate_id: certificate.id,
            chapter_id: chapterRecord.id,
            question_de: question.question_de,
            explanation_de: question.explanation_de ?? '',
            explanation_ar: question.explanation_ar ?? '',
            difficulty: question.difficulty ?? 'normal',
            tags: ensureArrayTags(question.tags),
            position: question.position ?? questionIndex + 1,
          },
          { certificate_id: certificate.id },
        );

        for (const [optionIndex, option] of (question.options ?? []).entries()) {
          const position = option.position ?? optionIndex + 1;
          const existingOption = await findOneByField('question_options', 'position', String(position), {
            question_id: questionRecord.id,
          });

          if (existingOption) {
            await updateItem('question_options', existingOption.id, {
              question_id: questionRecord.id,
              option_de: option.option_text_de,
              is_correct: option.is_correct,
              position,
            });
            console.log(`Updated question_options: ${questionRecord.id}#${position}`);
          } else {
            await createItem('question_options', {
              question_id: questionRecord.id,
              option_de: option.option_text_de,
              is_correct: option.is_correct,
              position,
            });
            console.log(`Created question_options: ${questionRecord.id}#${position}`);
          }
        }
      }
    }
  }

  for (const [glossaryIndex, item] of (payload.glossary ?? []).entries()) {
    await upsertByField(
      'glossary_terms',
      'term',
      item.term,
      {
        certificate_id: certificate.id,
        simple_de: item.simple_de ?? '',
        explanation_ar: item.explanation_ar ?? '',
        category: item.category ?? '',
        tags: ensureArrayTags(item.tags),
        position: item.position ?? glossaryIndex + 1,
      },
      { certificate_id: certificate.id },
    );
  }

  console.log('Taxi content import complete.');
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
