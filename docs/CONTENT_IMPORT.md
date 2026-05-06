# Content Import Workflow

1. Prepare JSON chapter-by-chapter to avoid large error batches.
2. JSON structure should include: certificate, chapters, lessons, flashcards, questions, question_options, glossary_terms.
3. Use stable `slug` values and verify uniqueness before import (per collection).
4. Run importer script (`npm run import:content` or your existing project command).
5. In Directus verify row counts, relations, and sample records from each collection.
6. Refresh frontend by reloading pages (data uses `cache: "no-store"`).
7. If duplicates occurred, remove duplicates in Directus and re-import corrected slugs.
