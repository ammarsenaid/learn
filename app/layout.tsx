import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FachkundePilot | Mehrsprachig zur deutschen Prüfung",
  description: "Multilingual learning platform for German certification exams.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
