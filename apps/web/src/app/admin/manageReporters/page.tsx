import { fetchGraphQL } from '@eic/common/src/fetch'
import { ReportersDocument } from '@eic/network/src/generated'
import { UserCard } from '@eic/ui/src/components/organisms/UserCard'
import { CreateReporter } from '@eic/ui/src/components/organisms/CreateReporter'

export default async function ManageReporters() {
  const { data } = await fetchGraphQL({ document: ReportersDocument })

  return (
    <div>
      <div className="flex justify-between gap-2">
        <div>Manage Reporters</div>
        <CreateReporter />
      </div>
      <div className="grid grid-cols-6">
        {data?.reporters.map((reporter) => (
          <UserCard key={reporter.user.uid} user={reporter.user} />
        ))}
      </div>
    </div>
  )
}
