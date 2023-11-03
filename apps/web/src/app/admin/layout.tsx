import { authOptions } from '@eic/common/src/authOptions'
import { CopyToClipboard } from '@eic/ui/src/components/molecules/CopyToClipboard'
import { fetchGraphQL } from '@eic/common/src/fetch'
import { AdminMeDocument, namedOperations } from '@eic/network/src/generated'
import { TellThem } from '@eic/ui/src/components/molecules/TellThem'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { AdminMenu } from '@eic/ui/src/components/organisms/AdminMenu'
import { UserSidebar } from '@eic/ui/src/components/organisms/UserSidebar'

export default async function EmployerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getServerSession(authOptions)

  if (!user?.user?.uid) {
    return <Link href="/api/auth/signin">Login</Link>
  }

  const { data, error } = await fetchGraphQL({
    document: AdminMeDocument,
    config: {
      next: {
        tags: [namedOperations.Query.adminMe],
      },
    },
  })

  if (!data?.adminMe?.user) {
    return <TellThem uid={user.user.uid} role="admin" />
  }

  return (
    <div className="flex">
      <div className="hidden w-full max-w-xs sm:block">
        <AdminMenu />
      </div>

      <div className="flex-grow">
        <div className="sm:hidden">
          <UserSidebar>
            <AdminMenu />
          </UserSidebar>
        </div>
        <div className="bg-white min-h-[calc(100vh-8rem)] py-2 px-4">
          {children}
        </div>
      </div>
    </div>
  )
}
