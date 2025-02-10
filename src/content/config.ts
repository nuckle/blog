import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		// using zod to define type-safe frontmatter of our mdx files
		// astro will generate types definitions for our project so we can use them in templates
		// also it will check every newly created frontmatter in the content/blog directory
		z.object({
			title: z.string(),
			description: z.string(),
			tags: z.array(z.string()),
			keywords: z.array(z.string()).optional(),
			cover: image(),
			date: z.coerce.date(),
			lastModifiedDate: z.coerce.date().optional(),
			draft: z.boolean().optional(),
		}),
});

// This key should match your collection directory name in "src/content"
export const collections = {
	blog: blogCollection,
};
