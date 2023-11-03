'use client'
import { AlertBox } from '../AlertBox'
import Link from 'next/link'

export const LoginToContinue = () => {
  return (
    <AlertBox className="">
      <div>
        <div>Hey, thanks for checking this demo application.</div>
        Please{' '}
        <Link className="font-semibold" href="/register">
          Register
        </Link>{' '}
        to continue.
      </div>
    </AlertBox>
  )
}
