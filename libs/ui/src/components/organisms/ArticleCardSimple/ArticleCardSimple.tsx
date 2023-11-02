import { ArticlesForAdminQuery } from '@eic/network/src/generated'
import Link from 'next/link'
import { cn } from '../../../utils'
import { DisplayDate } from '../../molecules/DisplayDate'
import { Badge } from '../../molecules/Badge'

export interface IArticleCardSimpleProps {
  article: ArticlesForAdminQuery['articlesForAdmin'][0]
}

export const ArticleCardSimple = ({ article }: IArticleCardSimpleProps) => {
  return (
    <Link
      href={`/article/${article.id}`}
      className={!article.published ? 'text-gray-400' : ' bg-gray-100'}
    >
      <div
        className={cn(
          'text-lg font-medium group-hover:underline underline-offset-4 ',
        )}
      >
        {article.title}
      </div>

      <DisplayDate dateString={article.createdAt} className="mt-2" />
      <Badge variant={'secondary'}>
        {article.published ? 'published' : 'unpublished'}
      </Badge>
      <div className="flex flex-wrap gap-2 mt-2">
        {article.tags.map((tag) => (
          <Badge key={tag} variant={'outline'}>
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  )
}
