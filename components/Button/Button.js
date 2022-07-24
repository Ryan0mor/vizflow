import React from 'react'

import Link from 'next/link'

const Button = (props) => {
    const choice = (props.choice)
    switch (choice) {
        case 1:
            return (
                <Link href={props.link}>
                    <button className=' paragraphReg bg-indigo-500 shadow-lg shadow-cyan-500/50 text-white px-6 py-3 rounded-xl'>
                        {props.content}
                    </button>
                </Link>
            )
        case 2:
            return (
                <Link href={props.link}>
                    <button className=' paragraphReg bg-indigo-500 shadow-lg shadow-cyan-500/50 text-white px-6 py-3 rounded-xl'>
                        {props.content}
                    </button>
                </Link>
            )
        case "3":
            return (
                <Link href={props.link}>
                    <button className=' neumorph paragraphReg bg-pink-500 shadow-lg shadow-pink-500/50 text-white px-6 py-3 rounded-xl'>
                        {props.content}
                    </button>
                </Link>
            )
        case "4":
            return (
                <Link>
                    <button className=''>
                        {props.content}
                    </button>
                </Link>
            )
        default:
            return (
                <Link href={props.link}>
                    <button className=' paragraphReg bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white px-6 py-3 rounded-xl'>
                        {props.content}
                    </button>
                </Link>
            )
    }
}

export default Button
