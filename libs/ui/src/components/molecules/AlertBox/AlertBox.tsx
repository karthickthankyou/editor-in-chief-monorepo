import { ReactNode } from 'react'
import { cn } from '../../../utils'

export interface IAlertBoxProps {
  children: ReactNode
  className?: string
}

export const AlertBox = ({ children, className }: IAlertBoxProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center h-40 bg-gray-100',
        className,
      )}
    >
      {children}
    </div>
  )
}
