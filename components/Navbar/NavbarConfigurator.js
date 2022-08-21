import Button from '../../components/Button/Button.js'
import Logo from '../../components/Logo/Logo.js'
import Link from 'next/link'
import { Menu } from '@mantine/core';

export default function Navbar (props) {

  return (
    <nav className='bg-white border-b border-slate-200 py-3 px-4'>
      <div className='flex flex-wrap justify-between items-center mx-auto'>
        <Link href='/browse'>
          <a className='hover:text-teal-400 flex flex-row'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <h4 className='hidden md:flex'>Browse</h4>
          </a>
        </Link>       
        <Logo />
        <div className='flex flex-row items-center gap-4'>
          <a className='hidden md:flex' href=''>Log out</a>
          <div className='bg-teal-400 text-white flex flex-row gap-2 py-2 px-3 rounded-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            <a className='header05 hidden md:flex' href={props.file}>download</a>
          </div>
        </div>
      </div> 
    </nav>
  )
}