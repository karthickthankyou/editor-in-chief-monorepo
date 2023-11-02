import Link from 'next/link'
import { fontMerriweather } from '@eic/util/fonts'
import { DeveloperInfo } from '../DeveloperInfo'
import { cn } from '../../../utils'

export interface IBrandProps {}

export const Brand = () => {
  return (
    <div>
      <Link
        href="/"
        className={cn(fontMerriweather, 'hover:underline underline-offset-4')}
      >
        Editor in chief.
      </Link>
      <DeveloperInfo />
    </div>
  )
}
