import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    level: z.enum(['O Level', 'A Level']),
    topic: z.string(),
    order: z.number().default(1),
    minutes: z.number().default(10),
    youtube: z.string().optional(), // paste a YouTube video ID to embed it
  }),
});

export const collections = { lessons };
