'use client'
import { zodResolver } from '@hookform/resolvers/zod'

import { ReactNode } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaCreateArticle } from './schemas'

export type FormTypeCreateArticle = z.infer<typeof formSchemaCreateArticle>

export const useFormCreateArticle = () =>
  useForm<FormTypeCreateArticle>({
    resolver: zodResolver(formSchemaCreateArticle),
    defaultValues: { published: true, tags: [] },
  })

export const FormProviderCreateArticle = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateArticle()
  return <FormProvider {...methods}>{children}</FormProvider>
}

export const useFormContextCreateArticle = () =>
  useFormContext<FormTypeCreateArticle>()
