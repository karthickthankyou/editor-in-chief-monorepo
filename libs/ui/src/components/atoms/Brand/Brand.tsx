import Link from 'next/link'
import { fontMerriweather } from '@eic/util/fonts'
import { DeveloperInfo } from '../DeveloperInfo'

export interface IBrandProps {}

export const Brand = () => {
  return (
    <div>
      <Link href="/" className={fontMerriweather}>
        Editor in chief.
      </Link>
      <DeveloperInfo />
    </div>
  )
}
