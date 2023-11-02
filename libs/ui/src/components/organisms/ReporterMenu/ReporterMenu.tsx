import Link from 'next/link'

export const ReporterMenu = () => {
  return (
    <div className="flex flex-col gap-1">
      <Link href="/reporter">Dashboard</Link>
      <Link href="/reporter/newArticle">New article</Link>
    </div>
  )
}
