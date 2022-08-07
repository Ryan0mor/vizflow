import React from 'react'

import Button from '../../components/Button/Button.js'
import Logo from '../../components/Logo/Logo.js'

import Link from 'next/link'

const Navbar = () => {

    const linkData = [
        {
            id: 2,
            name: "Assets",
            link: "/assets",
        },
        {
            id: 3,
            name: "Integrations",
            link: "/#integrations",
        },
        {
            id: 4,
            name: "About",
            link: "/about",
        },
        {
            id: 5,
            name: "Contact",
            link: "contact",
        }   
    ];

    function createLink(link) {
        return <LinkItem
            key={link.id}
            name={link.name}
            link={link.link}
        />
    }

    function LinkItem(props) {
        return (
            <Link href={props.link }>
                <a className='hover:text-teal-400 header06 '>
                    <div className=''>
                        {props.name}
                    </div>
                </a>
            </Link>
        )
    }

    return (
        <nav className='bg-white border-b border-slate-200 py-3'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <Logo />
                <div className='flex flex-row gap-8'>
                    {linkData.map(createLink)}
                </div>
                
                <div className='flex gap-6'>
                    <Button 
                        content='Log in' 
                        link='#'
                        choice='1'/>
                    <Button 
                        content='Get started' 
                        link='#'
                        choice='2'/>
                </div>

            </div>
            
        </nav>
    )
}

export default Navbar