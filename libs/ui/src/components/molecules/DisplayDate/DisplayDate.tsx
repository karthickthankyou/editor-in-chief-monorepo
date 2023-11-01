import { format } from '@eic/util'
import { cn } from '../../../utils'

export interface IDisplayDateProps {
  dateString: string
  dateFormat?: string
  className?: string
}

export const DisplayDate = ({
  dateString,
  dateFormat,
  className,
}: IDisplayDateProps) => {
  return (
    <div className={cn('text-xs text-gray-600', className)}>
      {dateFormat ? format(dateString, dateFormat) : format(dateString)}
    </div>
  )
}
