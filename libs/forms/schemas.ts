import { z } from 'zod'

export const formSchemaCreateArticle = z.object({
  title: z.string(),
  body: z.string(),
  published: z.boolean(),
  tags: z.array(z.string()),
})
