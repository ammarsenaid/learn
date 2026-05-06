export type SimulationAttempt = { dateIso: string; scorePercent: number; correct: number; total: number };
export type ActivityItem = { dateIso: string; type: string; title: string; href: string };
export type LearningProgress = {
  completedLessons: string[];
  knownFlashcards: string[];
  reviewFlashcards: string[];
  answeredQuestions: string[];
  simulationAttempts: SimulationAttempt[];
  lastActivity: ActivityItem[];
};

export const PROGRESS_KEY = 'fachkundepilot-progress-v1';
const defaultProgress: LearningProgress = { completedLessons: [], knownFlashcards: [], reviewFlashcards: [], answeredQuestions: [], simulationAttempts: [], lastActivity: [] };
const addUnique = (list: string[], id: string) => (list.includes(id) ? list : [...list, id]);

function pushActivity(progress: LearningProgress, item: Omit<ActivityItem, 'dateIso'>): LearningProgress {
  return { ...progress, lastActivity: [{ ...item, dateIso: new Date().toISOString() }, ...progress.lastActivity].slice(0, 20) };
}

export function getProgress(): LearningProgress {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw) as Partial<LearningProgress>;
    return {
      completedLessons: parsed.completedLessons ?? [],
      knownFlashcards: parsed.knownFlashcards ?? [],
      reviewFlashcards: parsed.reviewFlashcards ?? [],
      answeredQuestions: parsed.answeredQuestions ?? [],
      simulationAttempts: parsed.simulationAttempts ?? [],
      lastActivity: parsed.lastActivity ?? [],
    };
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: LearningProgress): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function markLessonComplete(lessonId: string, title: string, href: string): LearningProgress {
  const progress = getProgress();
  const next = pushActivity({ ...progress, completedLessons: addUnique(progress.completedLessons, lessonId) }, { type: 'lesson', title, href });
  saveProgress(next);
  return next;
}

export function markFlashcardKnown(cardId: string, title: string, href: string): LearningProgress {
  const progress = getProgress();
  const next = pushActivity({ ...progress, knownFlashcards: addUnique(progress.knownFlashcards, cardId), reviewFlashcards: progress.reviewFlashcards.filter((id) => id !== cardId) }, { type: 'flashcard-known', title, href });
  saveProgress(next);
  return next;
}

export function markFlashcardReview(cardId: string, title: string, href: string): LearningProgress {
  const progress = getProgress();
  const next = pushActivity({ ...progress, reviewFlashcards: addUnique(progress.reviewFlashcards, cardId), knownFlashcards: progress.knownFlashcards.filter((id) => id !== cardId) }, { type: 'flashcard-review', title, href });
  saveProgress(next);
  return next;
}

export function markQuestionAnswered(questionId: string, title: string, href: string): LearningProgress {
  const progress = getProgress();
  const next = pushActivity({ ...progress, answeredQuestions: addUnique(progress.answeredQuestions, questionId) }, { type: 'question', title, href });
  saveProgress(next);
  return next;
}

export function saveSimulationAttempt(scorePercent: number, correct: number, total: number): LearningProgress {
  const progress = getProgress();
  const attempt: SimulationAttempt = { dateIso: new Date().toISOString(), scorePercent, correct, total };
  const next = pushActivity({ ...progress, simulationAttempts: [attempt, ...progress.simulationAttempts].slice(0, 20) }, { type: 'simulation', title: `Simulation ${scorePercent}%`, href: '/lernen/taxi-mietwagen/simulation' });
  saveProgress(next);
  return next;
}

export function resetProgress(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(PROGRESS_KEY);
}
