'use client'
import { ReactNode } from 'react'
import { Button } from '../../atoms/button'
import { cn } from '../../../utils'

export interface IActionButtonProps {
  children: ReactNode
  serverAction: () => void
  className?: string
}

export const ActionButton = ({
  serverAction,
  children,
  className,
}: IActionButtonProps) => {
  return (
    <Button
      className={cn('text-red-500 border border-red-500', className)}
      variant={'outline'}
      size={'sm'}
      onClick={() => serverAction()}
    >
      {children}
    </Button>
  )
}
