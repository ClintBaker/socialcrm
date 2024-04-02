import Connections from './Connections'

export default function Dashboard() {
  return (
    <div className="h-screen flex w-full my-12 flex-col items-center">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <Connections />
    </div>
  )
}
