import React, { useState } from 'react'
import axios from 'axios'

const initState = {
  // @ts-ignore
  user: JSON.parse(localStorage.getItem('user')) || {},
  // @ts-ignore
  token: localStorage.getItem('token') || '',
  err: '',
  setUserState: () => {},
  login: () => {},
  signup: () => {},
  logout: () => {},
}

interface UserContextType {
  user: object
  token: string
  err: string
  setUserState: Function
  login: Function
  signup: Function
  logout: Function
}

export const UserContext = React.createContext<UserContextType>(initState)

// create axios instance
const userAxios = axios.create()
userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props: any) {
  // state
  const [userState, setUserState] = useState({
    user: initState.user,
    token: initState.token,
    err: initState.err,
  })
  //   functions
  async function login(email: string, password: string) {
    try {
      // @ts-ignore
      const res = await axios.post('/auth/login', { email, password })
      // set user state
      console.log('setting user state')
      console.log(res.data.token)
      setUserState((prevUserState) => ({
        ...prevUserState,
        token: res.data.token,
        user: res.data.user,
      }))
      //   store user and token in local storage

      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
    } catch (e) {
      console.log('e')
      alert('Unable to log in')
    }
  }

  async function signup(email: string, password: string) {
    try {
      // @ts-ignore
      const res = await axios.post('/auth/signup', { email, password })
      // set user state
      setUserState((prevUserState) => ({
        ...prevUserState,
        token: res.data.token,
        user: res.data.user,
      }))
      //   store user and token in local storage

      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
    } catch (e) {
      console.log('e')
      alert('Unable to sign up')
    }
  }

  async function logout() {
    // reset user state
    setUserState({
      user: {},
      token: '',
      err: '',
    })
    // reset localStorage
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  return (
    <UserContext.Provider
      value={{
        user: userState.user,
        token: userState.token,
        err: userState.err,
        setUserState,
        login,
        signup,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
