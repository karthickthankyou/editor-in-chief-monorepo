import { Home } from './Home'
import { fetchGraphQL } from '@eic/common/src/fetch'
import { ArticlesDocument } from '@eic/network/src/generated'

export const HomeAsync = async () => {
  const articles = await fetchGraphQL({ document: ArticlesDocument })
  if (!articles.data) {
    return null
  }

  return <Home articles={articles.data.articles} />
}
