# Content Import für FachkundePilot

## Ziel
Mit dem Import-Skript können strukturierte Lerninhalte aus JSON-Dateien schnell in Directus angelegt oder aktualisiert werden.

## Voraussetzungen
- Lokale oder VPS-Umgebung mit Zugriff auf Directus.
- `.env.local` mit:

```bash
DIRECTUS_URL=https://dein-directus.example
DIRECTUS_TOKEN=dein_admin_oder_service_token
```

> Sicherheit: Token niemals im Frontend verwenden, nicht ins Repo committen, und `.env.local` nur lokal/VPS speichern.

## JSON vorbereiten
1. Nutze `scripts/taxi-content.example.json` als Vorlage.
2. Pflichtfelder:
   - `certificateSlug`
   - `chapters[].slug`, `chapters[].title`
   - `lessons[].slug`, `lessons[].title`
   - Für Fragen: `questions[].options[]`
3. Eindeutigkeit:
   - `slug` ist eindeutiger Schlüssel für `certificates`, `chapters`, `lessons`.
   - `term` ist eindeutiger Schlüssel für `glossary_terms`.
   - Bei `flashcards` und `questions` kann optional `slug` gesetzt werden; sonst wird einer erzeugt.

## Import ausführen
```bash
npm run import:taxi-content -- scripts/taxi-content.example.json
```

Der Import läuft als Server/Admin-Workflow und schreibt direkt über die Directus-API (nicht aus dem Browser).

## Was importiert/aktualisiert wird
- `certificates` (Lookup über `certificateSlug`)
- `chapters`
- `lessons`
- `flashcards`
- `questions`
- `question_options`
- `glossary_terms`

Relationen werden automatisch gesetzt:
- Kapitel → Zertifikat
- Lesson → Kapitel + Zertifikat
- Flashcard → Zertifikat + Kapitel + optionale Lesson
- Question → Zertifikat + Kapitel
- Question Option → Question

## Verifizierung in Directus
1. Öffne in Directus die Collections:
   - `chapters`, `lessons`, `flashcards`, `questions`, `question_options`, `glossary_terms`
2. Filtere auf `certificate_id` des gewünschten Zertifikats.
3. Prüfe Positionen (`position`) sowie Zuordnungen (`chapter_id`, `lesson_id`, `question_id`).

## Frontend aktualisieren
- Falls Next.js lokal läuft: Seite neu laden.
- Bei gecachtem Deployment: App neu deployen oder Cache invalidieren, damit die neuesten Directus-Inhalte gezogen werden.
