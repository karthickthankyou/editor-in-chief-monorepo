'use client'

import { giveMyFeedback } from '@eic/common/src/actions/giveMyFeedback'
import { cn } from '../../../utils'
import { ReactionButton } from '../../molecules/ReactionButton'
import { SmilePlus, Smile, Angry, Frown, LucideIcon } from 'lucide-react'

import { FeedbackQuery, FeedbackType } from '@eic/network/src/generated'

export interface IReactionPanelProps {
  className?: string
  feedback?: FeedbackQuery['feedback']
  articleId: number
}

type FeedbackOption = {
  type: FeedbackType
  Icon: LucideIcon
}

const feedbackOptions: FeedbackOption[] = [
  { type: FeedbackType.Love, Icon: SmilePlus },
  { type: FeedbackType.Like, Icon: Smile },
  { type: FeedbackType.Dislike, Icon: Frown },
  { type: FeedbackType.Hate, Icon: Angry },
]

export const ReactionPanel = ({
  className,
  feedback,
  articleId,
}: IReactionPanelProps) => {
  if (!articleId) {
    return null
  }

  return (
    <div className={cn(`flex gap-2 mt-2`, className)}>
      {feedbackOptions.map((reaction) => (
        <ReactionButton
          Icon={reaction.Icon}
          key={reaction.type}
          onClick={async () => {
            await giveMyFeedback({
              articleId,
              type: reaction.type,
            })
          }}
          selected={feedback?.type === reaction.type}
        />
      ))}
      {/*
      <ReactionButton
        Icon={Smile}
        onClick={() => {
          giveMyFeedback({
            articleId,
            type: FeedbackType.Like,
          })
        }}
        selected={feedback?.type === FeedbackType.Like}
      />
      <ReactionButton
        Icon={Frown}
        onClick={() => {
          giveMyFeedback({
            articleId,
            type: FeedbackType.Dislike,
          })
        }}
        selected={feedback?.type === FeedbackType.Dislike}
      />
      <ReactionButton
        Icon={Angry}
        onClick={() => {
          giveMyFeedback({
            articleId,
            type: FeedbackType.Hate,
          })
        }}
        selected={feedback?.type === FeedbackType.Hate}
      /> */}
    </div>
  )
}
