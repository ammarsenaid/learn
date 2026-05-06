# Directus Model Guide

## certificates
- Purpose: root entities for exam tracks.
- Required: `slug`, `title`, `description`, `status`.
- Display field: `title`.
- Relations: one-to-many to chapters, lessons, flashcards, questions, glossary_terms.
- Example: `taxi-mietwagen`.

## chapters
- Purpose: module structure per certificate.
- Required: `certificate_id`, `slug`, `title`.
- Display field: `title`.
- Relations: many-to-one certificate, one-to-many lessons.
- Example: `kostenrechnung-grundlagen`.

## lessons
- Purpose: readable learning content.
- Required: `certificate_id`, `chapter_id`, `slug`, `title`.
- Display field: `title`.
- Relations: many-to-one chapter/certificate.

## flashcards
- Purpose: quick repetition cards.
- Required: `certificate_id`, `front_de`, `back_de`.
- Display field: `front_de`.
- Relations: optional `chapter_id`, `lesson_id`.

## questions
- Purpose: exam practice questions.
- Required: `certificate_id`, `question_de`.
- Display field: `question_de`.
- Relations: one-to-many `question_options`.

## question_options
- Purpose: options for multiple choice questions.
- Required: `question_id`, `option_de`, `is_correct`.
- Display field: `option_de`.

## glossary_terms
- Purpose: core terminology.
- Required: `certificate_id`, `term`.
- Display field: `term`.

## pricing_plans
- Purpose: pricing display cards.
- Required: `name`.
- Display field: `name`.

## languages
- Purpose: managed language labels/codes.
- Required: `code`, `label`.
- Display field: `label`.
