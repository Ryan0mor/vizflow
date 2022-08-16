import React from 'react';

import Link from 'next/link'


const SimpleLink = (props) => {
    return (
        <div className='text-purple-600 header06'>
            <Link href={props.link}>
                <a>
                    {props.label}
                </a>
            </Link>
        </div>
    )      
}

export default SimpleLink