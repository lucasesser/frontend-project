import { useState } from 'react'
import Text from './components/text'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='h-dvh flex flex-col justify-center items-center'>
      <Text variant="Text Sm">Teste</Text>
    </main>
  )
}