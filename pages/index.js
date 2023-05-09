import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className='flex justify-center items-center h-screen'
    >
     <h1 className='text-2xl text-red-500'>Ola Mundo</h1> 
    </main>
  )
}
