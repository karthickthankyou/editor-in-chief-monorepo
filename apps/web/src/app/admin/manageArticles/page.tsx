import { fetchGraphQL } from '@eic/common/src/fetch'
import { ArticlesForAdminDocument } from '@eic/network/src/generated'
import { ActionButton } from '@eic/ui/src/components/organisms/ActionButton'
import { UnpublishButton } from '@eic/ui/src/components/organisms/ActionButton/UnpublishButton'
import { ArticleCardSimple } from '@eic/ui/src/components/organisms/ArticleCardSimple'

export default async function ManageArticles() {
  const { data } = await fetchGraphQL({ document: ArticlesForAdminDocument })

  return (
    <div>
      <div>Manage Articles</div>
      <div className="flex flex-col gap-4">
        {data?.articlesForAdmin.map((article) => (
          <div key={article.id}>
            <ArticleCardSimple article={article} />
            <UnpublishButton
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
