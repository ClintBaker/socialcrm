import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserProvider'

export default function Nav(props: any) {
  const { logout } = useContext(UserContext)
  const navigate = useNavigate()
  function handleAuth() {
    if (props.token) {
      // handle logout
      logout()
    } else {
      navigate('/login')
    }
  }
  return (
    <nav className="p-4 font-semibold border-b-2 flex  items-center justify-between text-gray-900 ">
      <Link to="/">
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-xl overflow-hidden mr-2">
            <img
              src="REL-M-4.jpeg"
              alt="Profile Picture"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl ">REL-M</h1>
        </div>
      </Link>
      <div className="flex items-center w-max">
        <ul>
          <li className=" cursor-pointer" onClick={handleAuth}>
            {props.token ? 'Logout' : 'Login'}
          </li>
        </ul>
      </div>
    </nav>
  )
}
