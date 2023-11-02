import { RelatedArticlesQuery } from '@eic/network/src/generated'
import { Badge } from '../../molecules/Badge/Badge'
import Link from 'next/link'
import { DisplayDate } from '../../molecules/DisplayDate'
import { fontMerriweatherSans300, fontMerriweather700 } from '@eic/util/fonts'
import { cn } from '../../../utils'
import { ReactionPanelAsync } from '../ReactionPanel/ReactionPanelAsync'

export const ArticleCard = ({
  relatedArticle,
}: {
  relatedArticle: RelatedArticlesQuery['relatedArticles'][0]
}) => {
  const { article, score } = relatedArticle
  return (
    <div className={cn(fontMerriweatherSans300, 'group')}>
      <Link href={`/article/${article.id}`}>
        <div
          className={cn(
            'text-lg font-medium group-hover:underline underline-offset-4 ',
            fontMerriweather700,
          )}
        >
          {article.title}
        </div>
        <div className="max-w-md mt-1 text-sm gray-500 line-clamp-2">
          {article.body}
        </div>
        <DisplayDate dateString={article.createdAt} className="mt-2" />
        <div className="flex flex-wrap gap-2 mt-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant={'outline'}>
              {tag}
            </Badge>
          ))}
        </div>
      </Link>
      <Badge variant={'default'}>{score}</Badge>
      <ReactionPanelAsync articleId={article.id} className="mt-2" />
    </div>
  )
}
