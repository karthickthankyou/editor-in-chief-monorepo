'use server'
import { FormState } from '@eic/util/types'

import {
  CreateReporterDocument,
  UserDocument,
  namedOperations,
} from '@pnpm-krowd/network/src/generated'
import { revalidateTag } from 'next/cache'

import { fetchGraphQL } from '../fetch'

export async function createReporter(
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  const reporterUid = formData.get('reporterUid')?.toString()
  if (!reporterUid) {
    return { error: `reporterUid ${reporterUid} is not valid` }
  }

  try {
    const { data: userData } = await fetchGraphQL({
      document: UserDocument,
      variables: {
        where: { uid: reporterUid },
      },
    })

    if (!userData?.user) {
      return { error: `No user with UID ${reporterUid} found.` }
    }

    const { data, error } = await fetchGraphQL({
      document: CreateReporterDocument,
      variables: {
        createReporterInput: { uid: reporterUid.toString() },
      },
    })

    if (data?.createReporter) {
      revalidateTag(namedOperations.Query.reporters)
      return { data: 'Reporter created successfully.' }
    }

    if (error) {
      return { error: 'CreateReporter failed.' }
    }
  } catch (error) {
    return { error: 'Action failed.' }
  }
  return {}
}
