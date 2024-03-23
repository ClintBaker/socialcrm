import React, { useState } from 'react'
import axios from 'axios'

const initState = {
  // @ts-ignore
  user: JSON.parse(localStorage.getItem('user')) || {},
  // @ts-ignore
  token: localStorage.getItem('token') || '',
  err: '',
  setUserState: () => {},
}

interface UserContextType {
  user: object
  token: string
  err: string
  setUserState: Function
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

  return (
    <UserContext.Provider
      value={{
        user: userState.user,
        token: userState.token,
        err: userState.err,
        setUserState,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
