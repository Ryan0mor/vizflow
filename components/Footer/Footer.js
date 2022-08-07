import React from 'react'

import Button from '../../components/Button/Button.js'
import Logo from '../../components/Logo/Logo.js'

import Link from 'next/link'

const Footer = () => {

    const linkData = [
        {
            id: 1,
            name: "Assets",
            links: [
                {
                    id: 1,
                    name: "Integrations",
                    url: ""
                },
                {
                    id: 2,
                    name: "Browse",
                    url: ""
                },
            ]
        },
        {
            id: 2,
            name: "Company",
            links: [
                {
                    id: 1,
                    name: "Home",
                    url: "/"
                },
                {
                    id: 2,
                    name: "About",
                    url: ""
                },
                {
                    id: 3,
                    name: "Pricing",
                    url: ""
                },
                {
                    id: 4,
                    name: "Contact",
                    url: ""
                },
            ]
        },
        {
            id: 3,
            name: "Legal",
            links: [
                {
                    id: 1,
                    name: "Privacy policy",
                    url: ""
                },
                {
                    id: 2,
                    name: "Cookie preferences",
                    url: ""
                },
                {
                    id: 3,
                    name: "Terms and conditions",
                    url: ""
                },
            ]
        },
          
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
            <Link href={"/"}>
                <a className='hover:text-violet-500'>{props.name}</a>
            </Link>
        )
    }

    const currentYear = new Date().getFullYear()

    return (
        <div className='bg-slate-50 py-24 '>
            <div className='container mx-auto flex flex-col gap-8 '>
                <div className='items-center'>
                    <div className='flex flex-col md:flex-row gap-12 text-center md:text-left items-center md:items-start' >
                        <div className='w-48 flex justify-center md:justify-start'>
                            <Logo/>
                        </div>
                        <div className='flex flex-col gap-3 w-48'>
                            <h6 className='header06'>{linkData[0].name}</h6>
                            {linkData[0].links.map(createLink)}
                        </div>
                        <div className='flex flex-col gap-3 w-48'>
                            <h6 className='header06'>{linkData[1].name}</h6>
                            {linkData[1].links.map(createLink)}
                        </div>
                        <div className='flex flex-col gap-3 w-48'>
                            <h6 className='header06'>{linkData[2].name}</h6>
                            {linkData[2].links.map(createLink)}
                        </div>
                    </div>
                </div>
                <hr className='w-[75%] self-center'/>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                    <p>© {currentYear} Vizflow</p>
                    <div className='flex flex-row gap-8'>
                        <a href='#'>Linked in</a>
                        <a href='#'>Twiter</a>
                        <a href='#'>Instagram</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer