import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Lessons live in: src/content/lessons/<course>/<unit-N>/<chapter-slug>/<lesson>.md
const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    course: z.enum(['igcse']),
    unit: z.number(),
    chapter: z.number(),
    chapterTitle: z.string(),
    order: z.number().default(1),
    spec: z.string().default(''),
    specRange: z.string().default(''),
    minutes: z.number().default(5),
    youtube: z.string().optional(), // paste a YouTube video ID to embed it
  }),
});

// Practice questions live in: src/content/practice/<chapter-slug>.md
const practice = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/practice' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    chapter: z.string(),
    unit: z.number(),
    topic: z.number(),
    chapterTitle: z.string(),
    sections: z.number().default(0),
    questions: z.number().default(0),
  }),
});

export const collections = { lessons, practice };
