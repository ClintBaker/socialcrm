import { useState } from 'react'

const initDate = new Date().getFullYear()

export default function Footer() {
  const [date, setDate] = useState(initDate)
  return (
    <footer className="bg-white p-16 text-gray-800 border-t-2">
      <ul className="flex flex-col justify-center items-center">
        <li className="text-xl font-semibold">REL-M</li>
        <li>All Rights Reserved {date}</li>
      </ul>
    </footer>
  )
}
