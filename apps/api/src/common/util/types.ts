export type Role = 'admin' | 'reporter'

// Todo: Fix this type based on next auth user type.
export type GetUserType = {
  uid: string
  displayName: string
  email: string
  emailVerified: boolean
  phoneNumber: string
  roles: Role[]
}
