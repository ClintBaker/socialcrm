import { Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'

function App() {
  return (
    <>
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  )
}

export default App
