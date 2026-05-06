'use client';
import { resetProgress } from './progress-store';

export default function ResetProgressButton() {
  return <button onClick={() => { resetProgress(); window.location.reload(); }} className="rounded-lg border border-rose-400 px-4 py-2 text-rose-200">Lokalen Fortschritt zurücksetzen</button>;
}
