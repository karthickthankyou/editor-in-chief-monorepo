import { fetchGraphQL } from '@eic/common/src/fetch'
import { MyArticlesDocument } from '@eic/network/src/generated'
import { UpdateArticleStateButton } from '@eic/ui/src/components/organisms/ActionButton/UnpublishButton'
import { ArticleCardSimple } from '@eic/ui/src/components/organisms/ArticleCardSimple'

export default async function MyArticles() {
  const { data } = await fetchGraphQL({
    document: MyArticlesDocument,
  })

  return (
    <div>
      <div className="flex flex-col gap-6">
        {data?.myArticles.map((article) => (
          <div key={article.id}>
            <ArticleCardSimple article={article} />
            <UpdateArticleStateButton
              published={article.published}
              articleId={article.id}
              className="mt-2"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
