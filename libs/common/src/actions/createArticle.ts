'use server'
import { FormTypeCreateArticle } from '@eic/forms/createArticle'
import {
  CreateArticleDocument,
  namedOperations,
} from '@eic/network/src/generated'
import { getAuth } from '../authOptions'
import { fetchGraphQL } from '../fetch'
import { revalidateTag } from 'next/cache'
import { FormState } from '@eic/util/types'

export const createArticle = async (
  formData: FormTypeCreateArticle,
): Promise<FormState> => {
  const user = await getAuth()
  const uid = user?.user?.uid
  if (!uid) {
    return { error: 'You are not logged in.' }
  }

  try {
    const data = await fetchGraphQL({
      document: CreateArticleDocument,
      variables: {
        createArticleInput: { ...formData, reporterUid: uid },
      },
    })

    if (data.data) {
      revalidateTag(namedOperations.Query.articles)
      return { data: 'Article created successfully.' }
    }
    if (data.error) {
      return { error: data.error.toString() }
    }
  } catch (error) {}
  return {}
}
