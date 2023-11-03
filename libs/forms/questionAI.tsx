'use client'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaQuestionAI } from './schemas'

export type FormTypeQuestionAI = z.infer<typeof formSchemaQuestionAI>

export const useFormQuestionAI = () =>
  useForm<FormTypeQuestionAI>({
    resolver: zodResolver(formSchemaQuestionAI),
    defaultValues: { query: '' },
  })
