'use client'

import { signIn, useSession, signOut } from 'next-auth/react'
import { Button } from '@eic/ui/src/components/atoms/button'
import Link from 'next/link'
import { buttonVariants } from '@eic/ui/src/components/variants'
import { fontMerriweather } from '@eic/util/fonts'
import { AlertBox } from '@eic/ui/src/components/molecules/AlertBox'
import { SignIn } from '@eic/ui/src/components/templates/Signin'
import { redirect } from 'next/navigation'

export default function SignInPage() {
  const session = useSession()

  if (session?.data?.user) {
    redirect('/')
    // return (
    //   <AlertBox className={fontMerriweather}>
    //     <div className="space-y-2">
    //       <div>You are logged in.</div>
    //       <Link href="/" className={buttonVariants()}>
    //         Go to home page.
    //       </Link>
    //     </div>
    //   </AlertBox>
    // )
  }
  return (
    <div>
      {/* <SignIn /> */}
      <Button
        onClick={() =>
          signIn('google', {
            redirect: true,
          })
        }
      >
        Sign in with google
      </Button>
      <Button
        onClick={() =>
          signIn('credentials', {
            redirect: true,
            email: '',
            password: '',
          })
        }
      >
        Sign with credentials
      </Button>
    </div>
  )
}
