import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';


const ImportantDatesSchema = z.object({
	title: z.string(),
	description: z.string(),
	dueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // YYYY-MM-DD format
	weight: z.number().min(0).max(100),
})

const ReadingsSchema = z.object({
	title: z.string(),
	authors: z.array(z.string()).optional(),
	publicationDate: z.string().optional(),
	url: z.string().url().optional(),
	source: z.string().optional(), // e.g., "Smarthistory", "Perusall"
	type: z.enum(['core', 'analytical']),
	note: z.string().optional()
})

const MediaSchema = z.object({
	title: z.string(),
	url: z.string().url().optional(),
	type: z.enum(['video', 'audio', 'documentary', 'podcast']),
	duration: z.string().optional(), // e.g., "15 mins", "1 hour 30 mins"
	source: z.string().optional(), // e.g., "YouTube", "Vimeo"
	note: z.string().optional()
})


const WeekSchema = z.object({
	date: z.coerce.date(),
	title: z.string(),
	category: z.string().optional(), // "Foundations", "Ancient World", etc.
	description: z.string().optional(),
	learningObjectives: z.array(z.string()).optional(),
	keywords: z.array(z.string()).optional(), // Changed from keywords to match your original request
	readings: ReadingsSchema.array().optional(),
	media: MediaSchema.array().optional(),
});

export type Week = z.infer<typeof WeekSchema>;

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema({
		extend: z.object({
			leadingText: z.string().optional(),
		}),
	}) }),

	schedule: defineCollection({ 
		type: 'data',
		schema: z.object({
			importantDates: z.array(ImportantDatesSchema),
			weeks: WeekSchema.array(),
		}) 
	}),
};
