import { useContext, useState } from 'react'
import ProfilePicture from '../utility/ProfilePicture'
import { UserContext } from '../../UserProvider'
import { useNavigate } from 'react-router-dom'
import UserPop from './UserPop'

export default function UserMenu() {
  // context
  const { token, user } = useContext(UserContext)

  //   open state
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
        className="flex items-center cursor-pointer"
      >
        {/* @ts-ignore */}
        <div className="mr-1 text-sm">{user.email && user.email}</div>
        {token && <ProfilePicture />}
      </div>
      {isOpen && <UserPop setIsOpen={setIsOpen} />}
    </div>
  )
}
