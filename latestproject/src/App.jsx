import { useState } from 'react'
import Basic from "./basic"


function App() {
  const [count, setCount] = useState(0)

  return (
   //<h1>hello world</h1>
   <>
   <Basic/>
   <p>lurning purpose</p>
   </>
   )
}

export default App
