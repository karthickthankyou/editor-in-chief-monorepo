'use client'

import { signIn, useSession, signOut } from 'next-auth/react'
import { Button } from '@eic/ui/src/components/atoms/button'
import Link from 'next/link'
import { buttonVariants } from '@eic/ui/src/components/variants'
import { fontMerriweather } from '@eic/util/fonts'
import { AlertBox } from '@eic/ui/src/components/molecules/AlertBox'

export default function SignIn() {
  const session = useSession()

  if (session?.data?.user) {
    return (
      <AlertBox className={fontMerriweather}>
        <div className="space-y-2">
          <div>You are logged in.</div>
          <Link href="/" className={buttonVariants()}>
            Go to home page.
          </Link>
        </div>
      </AlertBox>
    )
  }
  return (
    <div className="flex items-center justify-center">
      <Button
        onClick={() =>
          signIn('google', {
            redirect: true,
          })
        }
      >
        Sign in with google
      </Button>
    </div>
  )
}
