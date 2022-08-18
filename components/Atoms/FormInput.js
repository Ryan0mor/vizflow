import React from 'react';

import Link from 'next/link'


const FormInput = (props) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className='header06' htmlfor={props.for}>{props.label}</label>
            <input 
                className='paragraph appearance-none border border-slate-300 focus:outline-none focus:shadow-outline p-2.5'
                id={props.id}
                type={props.type}
                placeholder={props.placeholder} />
        </div>
    )      
}

export default FormInput