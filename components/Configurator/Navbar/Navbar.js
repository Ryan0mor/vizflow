import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav class="h-[50px] bg-slate-400">
        <menu>
            <Link href='/'>
                Home
            </Link>
            <Link href='/browse'>
                Browse
            </Link>
            <Link href='/configurator'>
                Configurator
            </Link>
            <Link href='/configurator'>
                Checkout
            </Link>
        </menu>
    </nav>
  )
}

export default Navbar