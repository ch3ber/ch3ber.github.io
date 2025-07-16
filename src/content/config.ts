import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      slug: z.string(),
      image: z.string(), // ruta relativa a /public
      repo: z.string().url(),
      demo: z.string().url().optional(),
      stack: z.array(z.string()),
      summary: z.string(),
    }),
  }),
};
