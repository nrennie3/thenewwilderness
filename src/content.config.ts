import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const framework = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/framework' }),
	schema: z.object({
		title: z.string(),
		order: z.number(),
		description: z.string().optional(),
	}),
});

export const collections = { framework };
