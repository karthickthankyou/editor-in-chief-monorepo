import Link from 'next/link'
import { ArticlesDocument } from '@eic/network/src/generated'
import { ArticleCard } from '@eic/ui/src/components/organisms/articleCard'
import { HomeAsync } from '@eic/ui/src/components/templates/Home/HomeAsync'

export default async function Home() {
  return (
    <main>
      <HomeAsync />
    </main>
  )
}
