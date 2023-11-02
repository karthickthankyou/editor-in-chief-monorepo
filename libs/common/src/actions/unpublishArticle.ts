'use server'

import {
  UpdateArticleAdminDocument,
  namedOperations,
} from '@pnpm-krowd/network/src/generated'
import { revalidateTag } from 'next/cache'

import { fetchGraphQL } from '../fetch'

type UpdateArticleAdminType = {
  articleId: number
  published: boolean
}

export async function updateArticleAdmin({
  articleId,
  published,
}: UpdateArticleAdminType) {
  console.log('article', articleId)
  const { data, error } = await fetchGraphQL({
    document: UpdateArticleAdminDocument,
    variables: {
      updateArticleInput: {
        id: articleId,
        published,
      },
    },
  })
  console.log('data ', data)
  if (data?.updateArticleAdmin) {
    revalidateTag(namedOperations.Query.articlesForAdmin)
    return data
  }
}
