import type { ReactNode } from 'react';
import LearningSidebar from './LearningSidebar';
import LearningTopbar from './LearningTopbar';

export default function LearningShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-[#03111f] text-slate-100"><div className="mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row"><LearningSidebar /><main className="w-full min-w-0 p-4 sm:p-6 lg:p-8"><LearningTopbar />{children}</main></div></div>;
}
