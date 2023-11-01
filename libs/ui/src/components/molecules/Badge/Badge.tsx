import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'

import { badgeVariants } from '../../variants'
import { cn } from '../../../utils'

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
