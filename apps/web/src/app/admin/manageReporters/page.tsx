import { fetchGraphQL } from '@eic/common/src/fetch'
import { ReportersDocument } from '@eic/network/src/generated'
import { UserCard } from '@eic/ui/src/components/organisms/UserCard'
import { CreateReporter } from '@eic/ui/src/components/organisms/CreateReporter'
import { OpinionatedGrid } from '@eic/ui/src/components/molecules/OpinionatedGrid'
import {
  Title2,
  Title3,
} from '@eic/ui/src/components/atoms/Typography/Typography'

export default async function ManageReporters() {
  const { data } = await fetchGraphQL({ document: ReportersDocument })

  return (
    <div>
      <div className="flex justify-between gap-2">
        <Title3>Manage Reporters</Title3>
        <CreateReporter />
      </div>
      <OpinionatedGrid>
        {data?.reporters.map((reporter) => (
          <UserCard key={reporter.user.uid} user={reporter.user} />
        ))}
      </OpinionatedGrid>
    </div>
  )
}
