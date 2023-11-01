import { fetchGraphQL } from '@eic/common/src/fetch'
import Link from 'next/link'
import { ArticlesDocument } from '@eic/network/src/generated'

export default async function Home() {
  const articles = await fetchGraphQL({ document: ArticlesDocument })
  return (
    <main>
      <div>Hello world</div>
      <Link href={'/signin'}>Hey signin</Link>

      <div>
        {articles.data?.articles.map((article) => (
          <div key={article.id}>{article.id}</div>
        ))}
      </div>
    </main>
  )
}
