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
    <div className={fontMerriweatherSans300}>
      <h1 className={cn(fontMerriweather, 'text-xl')}>{article.title}</h1>
      <DisplayDate dateString={article.createdAt} />

      <div className="max-w-lg mt-4 whitespace-pre">{article.body}</div>
      <ReactionPanelAsync articleId={article.id} />
    </div>
  )
}
