import { ArticleQuery } from '@eic/network/src/generated'
import { DisplayDate } from '../../molecules/DisplayDate'
import { fontMerriweatherSans300, fontMerriweather } from '@eic/util/fonts'
import { cn } from '../../../utils'
import { ReactionPanelAsync } from '../../organisms/ReactionPanel/ReactionPanelAsync'

export interface IArticlePageProps {
  article: ArticleQuery['article']
}

export const ArticlePage = ({ article }: IArticlePageProps) => {
  return (
    <div className={cn(fontMerriweatherSans300, 'max-w-lg mx-auto')}>
      <h1 className={cn(fontMerriweather, 'text-xl')}>{article.title}</h1>
      <DisplayDate dateString={article.createdAt} />

      <div className="mt-4 whitespace-pre-wrap ">{article.body}</div>
      <ReactionPanelAsync articleId={article.id} />
    </div>
  )
}
