import { useState } from 'react'
import NewLink from './components/newLink'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='h-dvh bg-gray-200 flex flex-col justify-center items-center'>
      <NewLink/>
    </main>
  )
}