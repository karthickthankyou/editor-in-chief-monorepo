import { z } from 'zod'

export const formSchemaCreateArticle = z.object({
  title: z.string(),
  body: z.string(),
  published: z.boolean(),
  tags: z.array(z.string()),
})

export const formSchemaQuestionAI = z.object({
  query: z.string(),
})

export const formSchemaRegister = z.object({
  name: z.string(),
  image: z.string().optional(),

  email: z.string().email(),
  password: z.string().min(6),
})

export const formSchemaSignin = formSchemaRegister.pick({
  email: true,
  password: true,
})
