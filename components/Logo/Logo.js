
import React from 'react'

import Button from '../../components/Button/Button.js'

import Image from 'next/image'
import Link from 'next/link'

const Logo = (props) => {

    return (
        <Link href='/'>
            <a>
                <div className='flex items-center gap-6'>
                    { props.full == 'true' && 
                    <Image
                        src="/images/web-ready-icon-card.png"
                        alt="Vizflow logo"
                        width={40}
                        height={40}
                    />
                    }
                    
                    <div>
                        <span className='header03 text-slate-400'>viz</span>
                        <span className='header03 text-teal-500'>flow</span>
                    </div>                        
                </div>
            </a>
        </Link>
    )
}

export default Logo