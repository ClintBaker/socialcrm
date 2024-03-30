import { useContext } from 'react'
import { UserContext } from '../../UserProvider'

export default function UserPop(props: any) {
  const { logout } = useContext(UserContext)
  return (
    <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl border-[1px] border-gray-100 text-sm cursor-pointer">
      <div className="block px-4 py-2 text-gray-300 hover:bg-gray-100">
        User Profile
      </div>
      <div className="block px-4 py-2 text-gray-300  hover:bg-gray-100">
        Settings
      </div>
      <div
        onClick={() => {
          // make sure pop out isn't open if they log back in
          props.setIsOpen(false)
          logout()
        }}
        className="block px-4 py-2  hover:bg-gray-100"
      >
        Logout
      </div>
    </div>
  )
}
