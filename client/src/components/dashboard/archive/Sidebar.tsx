function Sidebar() {
  return (
    <div className=" w-1/4 bg-indigo-700 text-white">
      <div className="px-5 py-2">
        <h1 className="text-xl font-semibold">Clint Baker</h1>
        <div>PROFILE PIC</div>
      </div>
      <ul className="mt-5">
        <li className="py-1 px-4 hover:bg-gray-700">
          <a href="#" className="block">
            Dashboard
          </a>
        </li>
        <li className="py-1 px-4 hover:bg-gray-700">
          <a href="#" className="block">
            My Connections
          </a>
        </li>
        <li className="py-1 px-4 hover:bg-gray-700">
          <a href="#" className="block">
            Create Connection
          </a>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  )
}

export default Sidebar
