import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="bg-white p-4 font-semibold border-b-2 flex  items-center">
      <Link to="/">
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-xl overflow-hidden mr-2">
            <img
              src="REL-M-4.jpeg"
              alt="Profile Picture"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl text-gray-900">REL-M</h1>
        </div>
      </Link>
    </nav>
  )
}
