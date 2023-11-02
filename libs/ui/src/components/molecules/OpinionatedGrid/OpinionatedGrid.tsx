import { BaseComponent } from '@eic/util/types'
import { cn } from '../../../utils'

export interface IOpinionatedGridProps extends BaseComponent {}

export const OpinionatedGrid = ({
  children,
  className,
}: IOpinionatedGridProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5',
        className,
      )}
    >
      {children}
    </div>
  )
}
