import { HomeAsync } from '@eic/ui/src/components/templates/Home/HomeAsync'
import { getAuth } from '@eic/common/src/authOptions'
import { LoginToContinue } from '@eic/ui/src/components/molecules/TellThem/LoginToContinue'
export default async function Home() {
  const auth = await getAuth()

  if (!auth?.user) {
    return (
      <main>
        <LoginToContinue />
      </main>
    )
  }
  return (
    <main>
      <HomeAsync />
    </main>
  )
}
