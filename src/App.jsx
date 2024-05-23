import { useState } from 'react'

import './App.css'
import Signup from './Componet/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Signup />
    </>
  )
}

export default App
