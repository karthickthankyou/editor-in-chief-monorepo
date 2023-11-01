import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { print } from 'graphql'

interface FetchResult<T> {
  data?: T
  error?: string
}

interface GraphqlRequestOptions<TData, V> {
  document: TypedDocumentNode<TData, V>
  variables?: V
  config?: RequestInit
  apiSecret?: string
  jwtToken?: string
}

export async function fetchGraphQLStatic<TData, V>({
  document,
  variables,
  apiSecret,
  jwtToken,
  config,
}: GraphqlRequestOptions<TData, V>): Promise<FetchResult<TData>> {
  const query = print(document)

  return await fetch(process.env.NEXT_PUBLIC_API_URL + '/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(jwtToken ? { Authorization: `Bearer ${jwtToken}` } : null),
      ...(apiSecret ? { 'X-API-Secret': apiSecret } : null),
    },
    body: JSON.stringify({ query, variables }),
    ...config,
  }).then(async (res) => {
    const { data, errors } = await res.json()
    if (errors) {
      console.log('Error', JSON.stringify(errors))
      return { error: JSON.stringify(errors[0].message) }
    }
    return { data }
  })
  // .catch((err) => console.log('fetch failed ', err))
}
