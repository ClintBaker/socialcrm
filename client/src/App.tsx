import { Route, Routes } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Nav from './components/utility/Nav'
import Footer from './components/utility/Footer'

function App() {
  return (
    <>
      <Nav />
      <main className="bg-white h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
