import { Link } from '../../molecules/CustomLink/CustomLink'

export interface IAdminMenuProps {}

export const AdminMenu = () => {
  return (
    <div className="flex flex-col gap-1">
      <Link href="/admin">Dashboard</Link>
      <Link href="/admin/manageAdmins">Manage admins</Link>
      <Link href="/admin/manageReporters">Manage reporters</Link>
      <Link href="/admin/manageArticles">Manage articles</Link>
    </div>
  )
}
