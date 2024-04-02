import Connection from './Connection'

export default function Connections() {
  return (
    <div className="container flex flex-col items-center text-center bg-slate-200 mt-12">
      <h2 className="text-xl font-bold">Connections</h2>
      <div className="m-4 bg-purple-600 w-full overflow-auto">
        <div className="connections-container flex items-center justify-between font-semibold h-20">
          <div>ID</div>
          <div>Name</div>
          <div>Company</div>
          <div>Position</div>
          <div>Quick Hits</div>
          <div>Notes</div>
          <div>Phone</div>
          <div>Email</div>
          <div>Location</div>
          <div>Relationship</div>
          <div>Tags</div>
          <div>Last contact</div>
          <div>Priority</div>
          <div>Date created</div>
          <div>Birthday</div>
        </div>
        <Connection />
      </div>
    </div>
  )
}
