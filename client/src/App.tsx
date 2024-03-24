import { Navigate, Route, Routes } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Nav from './components/utility/Nav'
import Footer from './components/utility/Footer'
import Auth from './components/auth/Auth'
import ScrollToTop from './components/utility/ScrollToTop'
import Dashboard from './components/dashboard/Dashboard'
import { useContext } from 'react'
import { UserContext } from './UserProvider'
import ProtectedRoute from './components/auth/ProtectedRoute'

function App() {
  const { token } = useContext(UserContext)
  return (
    <>
      <Nav token={token} />
      <main className="bg-white min-h-screen text-gray-900 my-16">
        <ScrollToTop>
          <Routes>
            {/* Primary routes */}
            <Route
              path="/"
              element={token ? <Navigate to="/dashboard" /> : <Landing />}
            />
            <Route
              path="/login"
              element={token ? <Navigate to="/dashboard" /> : <Auth />}
            />

            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute token={token} redirect="/">
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ScrollToTop>
      </main>
      <Footer />
    </>
  )
}

export default App
