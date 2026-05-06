import { certificates as fallbackCertificates, type Certificate } from '@/lib/fachkunde-data';
import { directusFetch } from '@/lib/directus';

export type CmsCertificate = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  status: string;
  level: string;
  languages_text: string;
  progress?: string | number | null;
};

export type CmsChapter = {
  id: string;
  certificate_id: string;
  slug: string;
  title: string;
  description: string;
  estimated_minutes?: number | null;
  position?: number | null;
  status?: string | null;
};

export type CmsLesson = {
  id: string;
  certificate_id: string;
  chapter_id?: string | null;
  slug: string;
  title: string;
  summary?: string | null;
  description?: string | null;
  content_de?: string | null;
  content_ar?: string | null;
  position?: number | null;
  status?: string | null;
  estimated_minutes?: number | null;
};

export type CmsFlashcard = {
  id: string;
  certificate_id: string;
  chapter_id?: string | null;
  lesson_id?: string | null;
  front_de: string;
  back_de: string;
  explanation_ar?: string | null;
  difficulty?: string | null;
  tags?: string[] | string | null;
  position?: number | null;
};

export type CmsQuestion = {
  id: string;
  certificate_id: string;
  chapter_id?: string | null;
  question_de: string;
  explanation_de?: string | null;
  explanation_ar?: string | null;
  difficulty?: string | null;
  tags?: string[] | string | null;
  position?: number | null;
};

export type CmsQuestionOption = {
  id: string;
  question_id: string;
  option_text_de: string;
  option_de?: string;
  is_correct: boolean;
  position?: number | null;
};

export type CmsGlossaryTerm = {
  id: string;
  certificate_id: string;
  term: string;
  simple_de?: string | null;
  explanation_ar?: string | null;
  category?: string | null;
  position?: number | null;
};

export type CmsPricingPlan = {
  id: string;
  slug: string;
  name: string;
  price: string;
  period?: string | null;
  description?: string | null;
  benefits?: string[] | null;
  is_featured?: boolean | null;
  is_active?: boolean | null;
  position?: number | null;
};

export function normalizeProgress(value: string | number | null | undefined): string {
  if (value === null || value === undefined || value === '') return '0%';
  if (typeof value === 'number' && Number.isFinite(value)) return `${Math.max(0, Math.min(100, Math.round(value)))}%`;

  const normalized = String(value).trim().replace(/%+$/, '');
  const parsed = Number(normalized);
  if (!Number.isFinite(parsed)) return '0%';
  return `${Math.max(0, Math.min(100, Math.round(parsed)))}%`;
}

function mapDirectusCertificate(item: CmsCertificate): Certificate {
  return {
    slug: item.slug,
    title: item.title,
    subtitle: item.subtitle,
    description: item.description,
    badge: item.badge,
    status: item.status,
    level: item.level,
    languages: item.languages_text.split(/\s*[,/]\s*/).filter(Boolean),
    progress: Number.parseInt(normalizeProgress(item.progress), 10),
    modules: [],
    href: `/zertifikate/${item.slug}`,
  };
}

export async function getCertificates(): Promise<Certificate[]> {
  try {
    const items = await directusFetch<CmsCertificate[]>('/items/certificates?sort=position');
    if (!items || items.length === 0) {
      return fallbackCertificates;
    }

    return items.map(mapDirectusCertificate);
  } catch (error) {
    console.error('Failed to fetch certificates from Directus:', error);
    return fallbackCertificates;
  }
}

export async function getCertificateBySlug(slug: string): Promise<CmsCertificate | null> {
  try {
    const items = await directusFetch<CmsCertificate[]>(`/items/certificates?filter[slug][_eq]=${encodeURIComponent(slug)}&limit=1`);
    return items?.[0] ?? null;
  } catch (error) {
    console.error(`Failed to fetch certificate for slug "${slug}":`, error);
    return null;
  }
}

async function safeFetchCollection<T>(path: string): Promise<T[]> {
  try {
    const items = await directusFetch<T[]>(path);
    return items ?? [];
  } catch (error) {
    console.error(`Failed to fetch Directus collection at ${path}:`, error);
    return [];
  }
}


export async function getChapterBySlug(certificateId: string, chapterSlug: string): Promise<CmsChapter | null> {
  try {
    const items = await directusFetch<CmsChapter[]>(`/items/chapters?filter[certificate_id][_eq]=${encodeURIComponent(certificateId)}&filter[slug][_eq]=${encodeURIComponent(chapterSlug)}&limit=1`);
    return items?.[0] ?? null;
  } catch (error) {
    console.error(`Failed to fetch chapter for slug "${chapterSlug}":`, error);
    return null;
  }
}

export async function getChaptersByCertificateId(certificateId: string): Promise<CmsChapter[]> {
  return safeFetchCollection<CmsChapter>(`/items/chapters?filter[certificate_id][_eq]=${encodeURIComponent(certificateId)}&sort=position`);
}

export async function getLessonsByCertificateId(certificateId: string): Promise<CmsLesson[]> {
  return safeFetchCollection<CmsLesson>(`/items/lessons?filter[certificate_id][_eq]=${encodeURIComponent(certificateId)}&sort=position`);
}

export async function getFlashcardsByCertificateId(certificateId: string): Promise<CmsFlashcard[]> {
  return safeFetchCollection<CmsFlashcard>(`/items/flashcards?filter[certificate_id][_eq]=${encodeURIComponent(certificateId)}&sort=position`);
}

export async function getQuestionsByCertificateId(certificateId: string): Promise<CmsQuestion[]> {
  return safeFetchCollection<CmsQuestion>(`/items/questions?filter[certificate_id][_eq]=${encodeURIComponent(certificateId)}&sort=position`);
}

export async function getQuestionOptionsByQuestionId(questionId: string): Promise<CmsQuestionOption[]> {
  return safeFetchCollection<CmsQuestionOption>(`/items/question_options?filter[question_id][_eq]=${encodeURIComponent(questionId)}&sort=position`);
}

export async function getGlossaryByCertificateId(certificateId: string): Promise<CmsGlossaryTerm[]> {
  return safeFetchCollection<CmsGlossaryTerm>(`/items/glossary_terms?filter[certificate_id][_eq]=${encodeURIComponent(certificateId)}&sort=position`);
}

export async function getLessonBySlug(slug: string): Promise<CmsLesson | null> {
  try {
    const items = await directusFetch<CmsLesson[]>(`/items/lessons?filter[slug][_eq]=${encodeURIComponent(slug)}&limit=1`);
    return items?.[0] ?? null;
  } catch (error) {
    console.error(`Failed to fetch lesson for slug "${slug}":`, error);
    return null;
  }
}

export async function getLessonsByChapterId(chapterId: string): Promise<CmsLesson[]> {
  return safeFetchCollection<CmsLesson>(`/items/lessons?filter[chapter_id][_eq]=${encodeURIComponent(chapterId)}&sort=position`);
}

export async function getFlashcardsByLessonId(lessonId: string): Promise<CmsFlashcard[]> {
  return safeFetchCollection<CmsFlashcard>(`/items/flashcards?filter[lesson_id][_eq]=${encodeURIComponent(lessonId)}&sort=position`);
}

export async function getFlashcardsByChapterId(chapterId: string): Promise<CmsFlashcard[]> {
  return safeFetchCollection<CmsFlashcard>(`/items/flashcards?filter[chapter_id][_eq]=${encodeURIComponent(chapterId)}&sort=position`);
}

export async function getQuestionsByChapterId(chapterId: string): Promise<CmsQuestion[]> {
  return safeFetchCollection<CmsQuestion>(`/items/questions?filter[chapter_id][_eq]=${encodeURIComponent(chapterId)}&sort=position`);
}

export async function getChapterById(chapterId: string): Promise<CmsChapter | null> {
  try {
    const items = await directusFetch<CmsChapter[]>(`/items/chapters?filter[id][_eq]=${encodeURIComponent(chapterId)}&limit=1`);
    return items?.[0] ?? null;
  } catch (error) {
    console.error(`Failed to fetch chapter for id "${chapterId}":`, error);
    return null;
  }
}

export async function getFlashcardById(cardId: string): Promise<CmsFlashcard | null> {
  try {
    const items = await directusFetch<CmsFlashcard[]>(`/items/flashcards?filter[id][_eq]=${encodeURIComponent(cardId)}&limit=1`);
    return items?.[0] ?? null;
  } catch (error) {
    console.error(`Failed to fetch flashcard for id "${cardId}":`, error);
    return null;
  }
}

export async function getQuestionById(questionId: string): Promise<CmsQuestion | null> {
  try {
    const items = await directusFetch<CmsQuestion[]>(`/items/questions?filter[id][_eq]=${encodeURIComponent(questionId)}&limit=1`);
    return items?.[0] ?? null;
  } catch (error) {
    console.error(`Failed to fetch question for id "${questionId}":`, error);
    return null;
  }
}

export async function getPricingPlans(): Promise<CmsPricingPlan[]> {
  return safeFetchCollection<CmsPricingPlan>(`/items/pricing_plans?sort=position`);
}
