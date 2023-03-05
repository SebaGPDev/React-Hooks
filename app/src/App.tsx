import { useState } from 'react'
import Estado from "./components/Counter"
import Title from './components/Title';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title name="Contador" />
      <Estado />
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <h1>{count}</h1>
    </>
  )
}

export default App