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
      <div className="mt-2 font-medium">{user.name}</div>
      <div className="text-xs text-gray-500 whitespace-pre-wrap">
        {user.uid}
      </div>
    </div>
  )
}
