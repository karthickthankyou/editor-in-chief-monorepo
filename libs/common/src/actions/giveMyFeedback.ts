'use server'

import {
  FeedbackType,
  GiveMyFeedbackDocument,
  namedOperations,
} from '@pnpm-krowd/network/src/generated'
import { revalidateTag } from 'next/cache'

import { fetchGraphQL } from '../fetch'
import { z } from 'zod'
const formCreateFeedback = z.object({
  feedbackId: z.number().optional(),
  articleId: z.number(),
  type: z.nativeEnum(FeedbackType),
})

type CreateFeedbackType = z.infer<typeof formCreateFeedback>

export async function giveMyFeedback(input: CreateFeedbackType) {
  const result = formCreateFeedback.safeParse(input)
  if (result.success) {
    const { articleId, type, feedbackId } = result.data
    const { data } = await fetchGraphQL({
      document: GiveMyFeedbackDocument,
      variables: {
        articleId,
        type,
        feedbackId,
      },
    })

    if (data?.giveMyFeedback) {
      revalidateTag(namedOperations.Query.MyFeedback)
      revalidateTag(namedOperations.Query.feedback)
      return data
    }
  } else {
    return result.error
  }
}
