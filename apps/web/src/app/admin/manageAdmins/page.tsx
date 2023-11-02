import { fetchGraphQL } from '@eic/common/src/fetch'
import { UserCard } from '@eic/ui/src/components/organisms/UserCard'
import { CreateAdmin } from '@eic/ui/src/components/organisms/CreateAdmin'
import { AdminsDocument } from '@eic/network/src/generated'

export default async function ManageAdmins() {
  const { data } = await fetchGraphQL({ document: AdminsDocument })

  return (
    <div>
      <div className="flex justify-between gap-2">
        <div>Manage Admins</div>
        <CreateAdmin />
      </div>
      <div className="grid grid-cols-6">
        {data?.admins.map((admin) => (
          <UserCard key={admin.user.uid} user={admin.user} />
        ))}
        CreateAdmin
      </div>
    </div>
  )
}
