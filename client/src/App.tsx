import { Navigate, Route, Routes } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Nav from './components/utility/Nav'
import Footer from './components/utility/Footer'
import Auth from './components/auth/Auth'
import ScrollToTop from './components/utility/ScrollToTop'

function App() {
  return (
    <>
      <Nav />
      <main className="bg-white h-screen">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />

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
