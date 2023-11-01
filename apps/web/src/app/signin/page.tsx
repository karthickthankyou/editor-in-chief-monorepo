'use client'

import { signIn, useSession, signOut } from 'next-auth/react'

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
      <button
        onClick={() =>
          signIn('google', {
            redirect: true,
            // callbackUrl: 'http://localhost:3001',
          })
        }
      >
        Sign in with google
      </button>
    </div>
  )
}
