import { Link } from '../../molecules/CustomLink/CustomLink'

export const ReporterMenu = () => {
  return (
    <div className="flex flex-col gap-1">
      <Link href="/reporter">Dashboard</Link>
      <Link href="/reporter/newArticle">New article</Link>
      <Link href="/reporter/myArticles">My articles</Link>
    </div>
  )
}
