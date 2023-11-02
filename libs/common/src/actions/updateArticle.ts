'use server'

import {
  UpdateArticleDocument,
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
  const { data } = await fetchGraphQL({
    document: UpdateArticleDocument,
    variables: {
      updateArticleInput: {
        id: articleId,
        published,
      },
    },
  })
  console.log('data ', data)
  if (data?.updateArticle) {
    revalidateTag(namedOperations.Query.articlesForAdmin)
    revalidateTag(namedOperations.Query.myArticles)
    return data
  }
}
