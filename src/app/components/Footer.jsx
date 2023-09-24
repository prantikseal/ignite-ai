import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white shadow-md w-100 p-4 mx-auto flex justify-center gap-4 border-t-1 border-black'>
        <Link href="https://peerlist.io/prantikseal" className=' text-black hover:text-green-400'>
            Peerlist Profile
        </Link>
        <Link href="https://github.com/prantikseal/ignite-ai" className=' text-black hover:text-green-400'>
            Source Code
        </Link>

    </div>
  )
}

export default Footer