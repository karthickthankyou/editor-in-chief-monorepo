'use server'
import { FormState } from '@eic/util/types'

import {
  CreateAdminDocument,
  UserDocument,
  namedOperations,
} from '@pnpm-krowd/network/src/generated'
import { revalidateTag } from 'next/cache'

import { fetchGraphQL } from '../fetch'

export async function createAdmin(
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  const adminUid = formData.get('adminUid')?.toString()
  if (!adminUid) {
    return { error: `adminUid ${adminUid} is not valid` }
  }

  try {
    const { data: userData } = await fetchGraphQL({
      document: UserDocument,
      variables: {
        where: { uid: adminUid },
      },
    })

    if (!userData?.user) {
      return { error: `No user with UID ${adminUid} found.` }
    }

    const { data, error } = await fetchGraphQL({
      document: CreateAdminDocument,
      variables: {
        createAdminInput: { uid: adminUid },
      },
    })

    if (data?.createAdmin) {
      revalidateTag(namedOperations.Query.admins)
      return { data: 'Admin created successfully.' }
    }

    if (error) {
      return { error: 'CreateAdmin failed.' }
    }
  } catch (error) {
    return { error: 'Action failed.' }
  }
  return {}
}
