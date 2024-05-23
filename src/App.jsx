import { useState } from 'react'

import './App.css'
import Signup from './Componet/Signup'
import Loader from './Componet/Loader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Loader />
      <Signup />
    </>
  )
}

export default App
