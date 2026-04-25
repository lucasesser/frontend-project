import { useState } from 'react'
import React from 'react'

interface teste {
  children: React.ReactNode
}

export default function App({children}: teste) {
  const [count, setCount] = useState(0)

  return (
    <main className='h-dvh bg-gray-400'>
      <p>children</p>
    </main>
  )
}