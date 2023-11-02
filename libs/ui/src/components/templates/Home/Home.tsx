import { RelatedArticlesQuery } from '@eic/network/src/generated'
import { ArticleCard } from '../../organisms/articleCard'

export interface IHomeProps {
  articles: RelatedArticlesQuery['relatedArticles']
}

export const Home = ({ articles }: IHomeProps) => {
  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <ArticleCard key={article.score} relatedArticle={article} />
      ))}
    </div>
  )
}
