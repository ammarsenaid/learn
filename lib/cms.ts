import { certificates as fallbackCertificates, type Certificate } from '@/lib/fachkunde-data';
import { directusFetch } from '@/lib/directus';

type DirectusCertificate = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  status: string;
  level: string;
  languages_text: string;
  progress: number;
};

type DirectusChapter = {
  id: string;
  certificate_id: string;
  slug: string;
  title: string;
  description: string;
  estimated_minutes?: number | null;
  position?: number | null;
  status?: string | null;
};

type DirectusLesson = {
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

type DirectusFlashcard = {
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

type DirectusQuestion = {
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

type DirectusQuestionOption = {
  id: string;
  question_id: string;
  option_de: string;
  is_correct: boolean;
  position?: number | null;
};

type DirectusGlossaryTerm = {
  id: string;
  certificate_id: string;
  term: string;
  simple_de?: string | null;
  explanation_ar?: string | null;
  category?: string | null;
  position?: number | null;
};

export type { DirectusCertificate, DirectusChapter, DirectusLesson, DirectusFlashcard, DirectusQuestion, DirectusQuestionOption, DirectusGlossaryTerm };

function mapDirectusCertificate(item: DirectusCertificate): Certificate {
  return {
    slug: item.slug,
    title: item.title,
    subtitle: item.subtitle,
    description: item.description,
    badge: item.badge,
    status: item.status,
    level: item.level,
    languages: item.languages_text.split(/\s*[,/]\s*/).filter(Boolean),
    progress: item.progress,
    modules: [],
    href: `/zertifikate/${item.slug}`,
  };
}

export async function getCertificates(): Promise<Certificate[]> {
  try {
    const items = await directusFetch<DirectusCertificate[]>('/items/certificates?sort=position');
    if (!items || items.length === 0) {
      return fallbackCertificates;
    }

    return items.map(mapDirectusCertificate);
  } catch (error) {
    console.error('Failed to fetch certificates from Directus:', error);
    return fallbackCertificates;
  }
}

export async function getCertificateBySlug(slug: string): Promise<DirectusCertificate | null> {
  try {
    const items = await directusFetch<DirectusCertificate[]>(`/items/certificates?filter[slug][_eq]=${encodeURIComponent(slug)}&limit=1`);
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


export async function getChapterBySlug(certificateId: string, chapterSlug: string): Promise<DirectusChapter | null> {
  try {
    const items = await directusFetch<DirectusChapter[]>(`/items/chapters?filter[certificate_id][_eq]=${encodeURIComponent(certificateId)}&filter[slug][_eq]=${encodeURIComponent(chapterSlug)}&limit=1`);
    return items?.[0] ?? null;
  } catch (error) {
    console.error(`Failed to fetch chapter for slug "${chapterSlug}":`, error);
    return null;
  }
}

export async function getChaptersByCertificateId(certificateId: string): Promise<DirectusChapter[]> {
  return safeFetchCollection<DirectusChapter>(`/items/chapters?filter[certificate_id][_eq]=${encodeURIComponent(certificateId)}&sort=position`);
}

export async function getLessonsByCertificateId(certificateId: string): Promise<DirectusLesson[]> {
  return safeFetchCollection<DirectusLesson>(`/items/lessons?filter[certificate_id][_eq]=${encodeURIComponent(certificateId)}&sort=position`);
}

export async function getFlashcardsByCertificateId(certificateId: string): Promise<DirectusFlashcard[]> {
  return safeFetchCollection<DirectusFlashcard>(`/items/flashcards?filter[certificate_id][_eq]=${encodeURIComponent(certificateId)}&sort=position`);
}

export async function getQuestionsByCertificateId(certificateId: string): Promise<DirectusQuestion[]> {
  return safeFetchCollection<DirectusQuestion>(`/items/questions?filter[certificate_id][_eq]=${encodeURIComponent(certificateId)}&sort=position`);
}

export async function getQuestionOptionsByQuestionId(questionId: string): Promise<DirectusQuestionOption[]> {
  return safeFetchCollection<DirectusQuestionOption>(`/items/question_options?filter[question_id][_eq]=${encodeURIComponent(questionId)}&sort=position`);
}

export async function getGlossaryByCertificateId(certificateId: string): Promise<DirectusGlossaryTerm[]> {
  return safeFetchCollection<DirectusGlossaryTerm>(`/items/glossary_terms?filter[certificate_id][_eq]=${encodeURIComponent(certificateId)}&sort=position`);
}

export async function getLessonBySlug(slug: string): Promise<DirectusLesson | null> {
  try {
    const items = await directusFetch<DirectusLesson[]>(`/items/lessons?filter[slug][_eq]=${encodeURIComponent(slug)}&limit=1`);
    return items?.[0] ?? null;
  } catch (error) {
    console.error(`Failed to fetch lesson for slug "${slug}":`, error);
    return null;
  }
}

export async function getLessonsByChapterId(chapterId: string): Promise<DirectusLesson[]> {
  return safeFetchCollection<DirectusLesson>(`/items/lessons?filter[chapter_id][_eq]=${encodeURIComponent(chapterId)}&sort=position`);
}

export async function getFlashcardsByLessonId(lessonId: string): Promise<DirectusFlashcard[]> {
  return safeFetchCollection<DirectusFlashcard>(`/items/flashcards?filter[lesson_id][_eq]=${encodeURIComponent(lessonId)}&sort=position`);
}

export async function getFlashcardsByChapterId(chapterId: string): Promise<DirectusFlashcard[]> {
  return safeFetchCollection<DirectusFlashcard>(`/items/flashcards?filter[chapter_id][_eq]=${encodeURIComponent(chapterId)}&sort=position`);
}

export async function getQuestionsByChapterId(chapterId: string): Promise<DirectusQuestion[]> {
  return safeFetchCollection<DirectusQuestion>(`/items/questions?filter[chapter_id][_eq]=${encodeURIComponent(chapterId)}&sort=position`);
}

export async function getChapterById(chapterId: string): Promise<DirectusChapter | null> {
  try {
    const items = await directusFetch<DirectusChapter[]>(`/items/chapters?filter[id][_eq]=${encodeURIComponent(chapterId)}&limit=1`);
    return items?.[0] ?? null;
  } catch (error) {
    console.error(`Failed to fetch chapter for id "${chapterId}":`, error);
    return null;
  }
}

export async function getFlashcardById(cardId: string): Promise<DirectusFlashcard | null> {
  try {
    const items = await directusFetch<DirectusFlashcard[]>(`/items/flashcards?filter[id][_eq]=${encodeURIComponent(cardId)}&limit=1`);
    return items?.[0] ?? null;
  } catch (error) {
    console.error(`Failed to fetch flashcard for id "${cardId}":`, error);
    return null;
  }
}

export async function getQuestionById(questionId: string): Promise<DirectusQuestion | null> {
  try {
    const items = await directusFetch<DirectusQuestion[]>(`/items/questions?filter[id][_eq]=${encodeURIComponent(questionId)}&limit=1`);
    return items?.[0] ?? null;
  } catch (error) {
    console.error(`Failed to fetch question for id "${questionId}":`, error);
    return null;
  }
}
