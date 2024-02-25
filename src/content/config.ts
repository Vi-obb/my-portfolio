// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Collection definitions
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()),
    draft: z.boolean(),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    color: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    details: z.object({
      cost: z.string(),
      time: z.string(),
      from: z.string(),
      team: z.array(z.string()),
    }),
    images: z.object({
      url: z.array(z.string()),
      alt: z.array(z.string()),
    }),
    draft: z.boolean(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'projects': projectCollection,
};
