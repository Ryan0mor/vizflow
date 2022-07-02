import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
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
        </menu>
    </nav>
  )
}

export default Navbar