'use client'
import { Register } from '@eic/ui/src/components/templates/Register'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function SignIn() {
  const session = useSession()

  if (session?.data?.user) {
    redirect('/')
  }

  return (
    <div>
      <Register />
    </div>
  )
}
