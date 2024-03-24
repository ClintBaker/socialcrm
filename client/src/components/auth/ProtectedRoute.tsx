import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props: any) {
  const { token, children, redirect } = props
  return token ? children : <Navigate to={redirect} />
}
