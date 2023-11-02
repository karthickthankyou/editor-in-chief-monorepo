'use client'

import { cn } from '../../../utils'
import { updateArticleAdmin } from '@eic/common/src/actions/updateArticle'
import { BaseComponent } from '@eic/util/types'

type InpublishButtonType = {
  articleId: number
  published: boolean
}

export const UpdateArticleStateButton = ({
  articleId,
  className,
  published,
}: BaseComponent & InpublishButtonType) => {
  return (
    <button
      className={cn(
        ' text-xs underline underline-offset-4',
        published ? 'text-red-500' : '',
        className,
      )}
      onClick={async () => {
        await updateArticleAdmin({ articleId, published: !published })
      }}
    >
      {published ? 'Unpublish' : 'Publish'}
    </button>
  )
}
