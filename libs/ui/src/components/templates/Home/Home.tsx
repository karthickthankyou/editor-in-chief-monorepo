import { ArticlesQuery } from '@eic/network/src/generated'
import { ArticleCard } from '../../organisms/articleCard'

export interface IHomeProps {
  articles: ArticlesQuery['articles']
}

export const Home = ({ articles }: IHomeProps) => {
  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}
