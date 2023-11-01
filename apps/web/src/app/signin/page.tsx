'use client'

import { signIn, useSession, signOut } from 'next-auth/react'
import { Button } from '@eic/ui/src/components/ui/button'

export default function SignIn() {
  const session = useSession()

  if (session?.data?.user) {
    return (
      <div>
        <div>You are logged in</div>
        <button onClick={() => signOut()}>signOut</button>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center">
      <Button
        onClick={() =>
          signIn('google', {
            redirect: true,
            // callbackUrl: 'http://localhost:3001',
          })
        }
      >
        Sign in with google
      </Button>
    </div>
  )
}
