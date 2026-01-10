import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Authors collection schema
const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/authors" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .object({
        facebook: z.string().url().optional(),
        twitter: z.string().url().optional(),
        x: z.string().url().optional(),
        instagram: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        github: z.string().url().optional(),
        website: z.string().url().optional(),
        youtube: z.string().url().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Posts collection schema
const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    authors: z.array(z.string()).default(["Admin"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// About collection schema
const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    what_i_do: z
      .object({
        title: z.string(),
        items: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          }),
        ),
      })
      .optional(),
  }),
});

// Export collections
export const collections = {
  posts: postsCollection,
  authors: authorsCollection,
  pages: pagesCollection,
  about: aboutCollection,
};
