import { useState } from 'react'

const initDate = new Date().getFullYear()

export default function Footer() {
  const [date, setDate] = useState(initDate)
  return (
    <footer className="bg-white p-16 text-gray-900 border-t-2">
      <ul className="flex flex-col justify-center items-center">
        <li className="flex justify-center items-center font-semibold">
          <div className="h-12 w-12 rounded-xl overflow-hidden mr-2 ">
            <img
              src="REL-M-4.jpeg"
              alt="Profile Picture"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl text-gray-900">REL-M</h1>
        </li>
        <li className="mt-6">All Rights Reserved {date}</li>
      </ul>
    </footer>
  )
}
