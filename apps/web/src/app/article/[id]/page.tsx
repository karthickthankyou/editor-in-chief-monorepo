import { fetchGraphQL } from '@eic/common/src/fetch'
import { ArticlePage } from '@eic/ui/src/components/templates/ArticlePage'
import { ArticleDocument } from '@eic/network/src/generated'

export default async function JobPagePage({
  params,
}: {
  params: { id: string }
}) {
  const articleId = params.id

  const article = await fetchGraphQL({
    document: ArticleDocument,
    variables: { where: { id: +articleId } },
  })

  if (!article.data?.article) {
    return <div>Article not found.</div>
  }

  return <ArticlePage article={article.data.article} />
}
