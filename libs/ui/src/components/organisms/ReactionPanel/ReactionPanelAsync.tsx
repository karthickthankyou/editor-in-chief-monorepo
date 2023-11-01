import { MyFeedbackDocument } from '@eic/network/src/generated'
import { ReactionPanel } from '.'
import { fetchGraphQL } from '@eic/common/src/fetch'

export interface IReactionPanelProps {
  className?: string
  articleId: number
}

export const ReactionPanelAsync = async ({
  className,
  articleId,
}: IReactionPanelProps) => {
  const feedback = await fetchGraphQL({
    document: MyFeedbackDocument,
    variables: {
      articleId,
    },
  })

  console.log('feedback ', feedback)

  return (
    <ReactionPanel
      articleId={articleId}
      className={className}
      feedback={feedback.data?.myFeedback}
    />
  )
}
