import { useContext, useState } from 'react'
import ButtonSmall from '../utility/ButtonSmall'
import { UserContext } from '../../UserProvider'

export default function AuthForm() {
  const [formToggle, setFormToggle] = useState('login')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { login, signup } = useContext(UserContext)

  function handleFormToggle() {
    setFormToggle((prevFormToggle) => {
      if (prevFormToggle === 'login') return 'signup'
      return 'login'
    })
  }
  function handleFormChange(e: any) {
    const { value, name } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    // send signup form
    if (formToggle === 'signup') {
      // validate passwords match before sending data
      if (formData.confirmPassword !== formData.password) {
        alert('Passwords must match')
        return
      }
      signup(formData.email, formData.password)
    } else {
      // send login information
      login(formData.email, formData.password)
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex flex-col">
        <label className="text-sm">Email</label>
        <input
          className="border-2 border-gray-400 rounded-md p-2 w-72"
          placeholder="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
        />
      </div>
      <div className="flex flex-col mt-8">
        <label className="text-sm">Password</label>
        <input
          className="border-2 border-gray-400 rounded-md p-2 w-72"
          placeholder="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleFormChange}
        />
      </div>
      {formToggle === 'signup' && (
        <div className="flex flex-col mt-8">
          <label className="text-sm">Confirm Password</label>
          <input
            className="border-2 border-gray-400 rounded-md p-2 w-72"
            placeholder="confirm password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleFormChange}
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
