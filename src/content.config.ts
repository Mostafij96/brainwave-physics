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

export const collections = { lessons };
