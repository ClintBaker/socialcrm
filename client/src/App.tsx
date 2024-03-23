import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<div>HELLO</div>} />
      </Routes>
    </>
  )
}

export default App
