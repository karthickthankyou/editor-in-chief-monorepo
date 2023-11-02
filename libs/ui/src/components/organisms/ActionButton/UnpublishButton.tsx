'use client'

import { Button } from '../../atoms/button'
import { cn } from '../../../utils'
import { updateArticleAdmin } from '@eic/common/src/actions/unpublishArticle'
import { BaseComponent } from '@eic/util/types'

type InpublishButtonType = {
  articleId: number
  published: boolean
}

export const UnpublishButton = ({
  articleId,
  className,
  published,
}: BaseComponent & InpublishButtonType) => {
  return (
    <Button
      className={cn('text-red-500 border border-red-500', className)}
      variant={'outline'}
      size={'sm'}
      onClick={async () => {
        await updateArticleAdmin({ articleId, published: !published })
      }}
    >
      {published ? 'Unpublish' : 'Publish'}
    </Button>
  )
}
