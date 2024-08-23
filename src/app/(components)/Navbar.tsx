import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (

    <header className='bg-gray-700 text-white'>
        <nav className='flex justify-between items-center w-full px-10 py-4 '>
         <div><Link href='/'>Next Auth</Link></div>
         <div className='flex gap-4'>
            <Link href='/'>Home</Link>
            <Link href='/CreateUser'>Create User</Link>
            <Link href='/ClientMember'>Client Member</Link>
            <Link href='/Member'>Member</Link>
            <Link href='/Public'>Public</Link>

         </div>
        </nav>
    </header>
  )
}

export default Navbar
