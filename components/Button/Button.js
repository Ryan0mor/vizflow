import React from 'react'

import Link from 'next/link'

const Button = (props) => {
    const choice = (props.choice)
    switch (choice) {
        case "1":
            return (
                <Link href={props.link}>
                    <button className='bg-teal-400 hover:bg-teal-300 header06 shadow-lg shadow-teal-400/50 text-white px-5 py-2.5 rounded-xl'>
                        {props.content}
                    </button>
                </Link>
            )
        case "2":
            return (
                <Link href={props.link}>
                    <button className=' header06 bg-purple-400 hover:bg-purple-300 shadow-lg shadow-purple-400/50 text-white px-5 py-2.5 rounded-xl'>
                        {props.content}
                    </button>
                </Link>
            )
        case "3":
            return (
                <Link href={props.link}>
                    <button className=' header06 bg-pink-400 hover:bg-pink-300 shadow-lg shadow-pink-400/50 text-white px-5 py-2.5 rounded-xl'>
                        {props.content}
                    </button>
                </Link>
            )
        case "4":
            return (
                <Link href={props.link}>
                    <button className=' header06 bg-blue-400 hover:bg-blue-300 shadow-lg shadow-blue-400/50 text-white px-5 py-2.5 rounded-xl'>
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
