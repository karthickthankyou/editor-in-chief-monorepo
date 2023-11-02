import { Home } from './Home'
import { fetchGraphQL } from '@eic/common/src/fetch'
import { RelatedArticlesDocument } from '@eic/network/src/generated'

export const HomeAsync = async () => {
  const articles = await fetchGraphQL({ document: RelatedArticlesDocument })
  if (!articles.data) {
    return null
  }

  return <Home articles={articles.data.relatedArticles} />
}
