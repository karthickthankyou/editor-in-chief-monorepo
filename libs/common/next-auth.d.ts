// /types/next-auth.ts

import type { DefaultUser, DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user?: Omit<DefaultUser, 'id'> & { uid: string }
  }
}
