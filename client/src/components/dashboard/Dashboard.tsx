import Outlet from './Outlet'
import Sidebar from './Sidebar'

export default function Dashboard() {
  return (
    <div className="h-screen flex w-full">
      <Sidebar />
      <Outlet />
    </div>
  )
}
