import React from 'react'

import Button from '../../components/Button/Button.js'
import Logo from '../../components/Logo/Logo.js'

import Link from 'next/link'

const Navbar = () => {

    const linkData = [
        {
            id: 1,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "Catalog",
            link: "/catalog",
        },
        {
            id: 3,
            name: "Integrations",
            link: "/integrations",
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
                <a className='p-4 hover:bg-violet-700 rounded-xl h-16'>{props.name}</a>
            </Link>
        )
    }

    return (
        <nav className='drop-shadow-md bg-white p-4'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <Logo/>
                <div className='flex'>
                    {linkData.map(createLink)}
                </div>
                
                <div className='flex gap-6'>
                    <Button 
                        content='Log in' 
                        link='#'
                        choice='2'/>
                    <Button 
                        content='Get started' 
                        link='#'
                        choice='3'/>
                </div>

            </div>
            
        </nav>
    )
}

export default Navbar