import { authOptions } from '@eic/common/src/authOptions'
import { fetchGraphQL } from '@eic/common/src/fetch'
import { ReporterMeDocument, namedOperations } from '@eic/network/src/generated'

import { TellThem } from '@eic/ui/src/components/molecules/TellThem'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { ReporterMenu } from '@eic/ui/src/components/organisms/ReporterMenu'
import { UserSidebar } from '@eic/ui/src/components/organisms/UserSidebar'

export default async function ReporterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getServerSession(authOptions)

  if (!user?.user?.uid) {
    return <Link href="/api/auth/signin">Login</Link>
  }

  const { data, error } = await fetchGraphQL({
    document: ReporterMeDocument,
    config: {
      next: {
        tags: [namedOperations.Query.reporterMe],
      },
    },
  })

  if (!data?.reporterMe?.user) {
    return <TellThem uid={user.user.uid} role="reporter" />
  }

  return (
    <div className="flex mt-2 bg-gray-50">
      <div className="hidden w-full max-w-xs sm:block">
        <ReporterMenu />
      </div>

      <div className="flex-grow">
        <div className="sm:hidden">
          <UserSidebar>
            <ReporterMenu />
          </UserSidebar>
        </div>
        {children}
      </div>
    </div>
  )
}
