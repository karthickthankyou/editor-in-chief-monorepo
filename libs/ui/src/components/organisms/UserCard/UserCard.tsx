import { UserDetailsFragment } from '@eic/network/src/generated'
import Image from 'next/image'

export interface IUserCardProps {
  user: UserDetailsFragment
}

export const UserCard = ({ user }: IUserCardProps) => {
  return (
    <div>
      <Image
        src={user.image || ''}
        alt=""
        width={300}
        height={300}
        className="rounded "
      />
      <div>{user.name}</div>
      <div>{user.uid}</div>
    </div>
  )
}
