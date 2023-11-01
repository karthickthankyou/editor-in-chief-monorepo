'use client'

import { LucideIcon } from 'lucide-react'
import { Button } from '../../atoms/button'
import { cn } from '../../../utils'

export interface IReactionButtonProps {
  Icon: LucideIcon
  onClick: () => void
  selected?: boolean
}

export const ReactionButton = ({
  Icon,
  onClick,
  selected,
}: IReactionButtonProps) => {
  return (
    <Button
      size={'icon'}
      variant={'outline'}
      onClick={onClick}
      className={cn(
        'transition-all',
        selected ? 'shadow-lg border border-black scale-110' : '',
      )}
    >
      <Icon />
    </Button>
  )
}
