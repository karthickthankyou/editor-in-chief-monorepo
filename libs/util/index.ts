import { format as dateFnsFormat } from 'date-fns'

export const format = (date: string, format = 'PPp') =>
  dateFnsFormat(new Date(date), format)
