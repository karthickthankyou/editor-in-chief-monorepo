'use client'

import { LucideIcon } from 'lucide-react'
import { Button } from '../../atoms/button'
import { cn } from '../../../utils'
import { useState } from 'react'

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
  const [loading, setLoading] = useState(false)
  return (
    <Button
      size={'icon'}
      variant={'outline'}
      onClick={async () => {
        setLoading(true)
        await onClick()
        setLoading(false)
      }}
      loading={loading}
      className={cn(
        'transition-all',
        selected ? 'shadow-lg border border-black scale-110' : '',
      )}
    >
      <Icon />
    </Button>
  )
}
