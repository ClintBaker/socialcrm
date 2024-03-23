import { useState } from 'react'
import ButtonSmall from '../utility/ButtonSmall'

export default function AuthForm() {
  const [formToggle, setFormToggle] = useState('login')
  function handleFormToggle() {
    setFormToggle((prevFormToggle) => {
      if (prevFormToggle === 'login') return 'signup'
      return 'login'
    })
  }
  return (
    <form className="flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <label className="text-sm">Email</label>
        <input
          className="border-2 border-gray-400 rounded-md p-2 w-72"
          placeholder="email"
          type="email"
        />
      </div>
      <div className="flex flex-col mt-8">
        <label className="text-sm">Password</label>
        <input
          className="border-2 border-gray-400 rounded-md p-2 w-72"
          placeholder="password"
          type="password"
        />
      </div>
      {formToggle === 'signup' && (
        <div className="flex flex-col mt-8">
          <label className="text-sm">Confirm Password</label>
          <input
            className="border-2 border-gray-400 rounded-md p-2 w-72"
            placeholder="confirm password"
            type="password"
          />
        </div>
      )}
      <div className="flex flex-col">
        <ButtonSmall>{formToggle}</ButtonSmall>
        <h3 onClick={handleFormToggle} className="mt-8 cursor-pointer text-lg">
          {formToggle === 'login'
            ? 'Need an account?'
            : 'Already have an account?'}
        </h3>
      </div>
    </form>
  )
}
