import { useState } from 'react'
import NewLink from './components/newLink'
import Logo from './assets/images/Logo.svg?react'
import MyLinks from './components/myLinks'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='h-dvh bg-gray-200 flex flex-col justify-center items-center p-2'>
      <div className="flex flex-col max-w-245 w-full gap-8">
        <Logo className="fill-blue-base w-24.5 h-6"/>
        <div className="flex w-full gap-5">
          <NewLink/>
          <MyLinks/>
        </div>
      </div>
    </main>
  )
}