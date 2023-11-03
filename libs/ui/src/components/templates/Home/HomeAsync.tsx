import { Home } from './Home'
import { fetchGraphQL } from '@eic/common/src/fetch'
import { RelatedArticlesDocument } from '@eic/network/src/generated'
import { toast } from '../../molecules/Toaster/use-toast'

export const HomeAsync = async () => {
  const articles = await fetchGraphQL({ document: RelatedArticlesDocument })
  if (!articles.data) {
    return null
  }
  if (articles.error) {
    toast({ title: articles.error })
  }

  console.log('articles')
  console.log('articles ', articles)
  return <Home articles={articles.data.relatedArticles} />
}
