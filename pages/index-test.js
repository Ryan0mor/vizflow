import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Button from '../components/Button/Button.js';

import { Canvas } from '@react-three/fiber'
import { useGLTF, PresentationControls, Environment, ContactShadows } from '@react-three/drei'
import { useRef } from 'react'
import materialData from '../public/material-data.js';

import Image from 'next/image'

const Browse = () => {

    function IconCard(props) {
        return (
            <div className='flex flex-col gap-4 bg-slate-200 neumorph rounded-3xl'>
                <Image
                    className='rounded-3xl'
                    src={props.url}
                    alt="Picture of the author"
                    width={100}
                    height={200}
                />
                <div className=' flex flex-col gap-4 px-4 pb-4'>
                    <h3 className='header03'>{props.title}</h3>
                    <p className='paragraphReg'>{props.body}</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className='dotted-bg'>
                  <div className='lg:py-24 bg-gradient-to-br from-slate-100'>

                    <div className='lg:container mx-auto grid lg:grid-cols-12 gap-4'>
                        {/*Left*/}
                        <div className='overflow-auto lg:col-start-2 lg:col-end-7 flex flex-col gap-6 justify-center items-start'>
                            <h1 className='header01'>The ultimate archviz 3D content repository</h1>
                            <h2 className='header02'>Customizable 3D assets for architectural visualization proffesionals</h2>
                            <div className='flex flex-row gap-4'>
                                <Button content='Log in' link='#'/>
                                <Button content='Get started' link='#'/>
                            </div>
                        </div>
                        {/*Right*/}
                        <div className='rounded-3xl lg:col-start-7 lg:col-end-12 flex flex-row  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5'>
                            <div className=' lg:w-4/5 bg-gradient-to-tl from-slate-200 rounded-3xl'>
                                
                            </div>
                            <div className='lg:w-1/5 lg:rounded-r-3xl'>
                                    <div className='m-2 aspect-square bg-slate-300 rounded-full'></div>
                                    <div className='m-2 aspect-square bg-slate-300 rounded-full'></div>
                                    <div className='m-2 aspect-square bg-slate-300 rounded-full'></div>
                                    <div className='m-2 aspect-square bg-slate-300 rounded-full'></div> 
                            </div>
                           
                        </div>
                    </div>

                </div>
            </div>
            
            <div className='bg-slate-200 container mx-auto'>
                <div className='flex  justify-items-center w-full'>
                    <h2 className='header02 text-end'>Future ready assets</h2>
                </div>
                <div className=' grid grid-cols-2 lg:grid-cols-4 gap-8 p-8'>
                    
                    <IconCard 
                        url='/../public/images/test.jpg'
                        title='VR Ready' 
                        body='Lightweight '
                    />
                    <IconCard 
                        url='/../public/images/test.jpg'
                        title='AR Ready' 
                        body='Fluid augmented reality for all.'
                    />
                    <IconCard 
                        url='/../public/images/test.jpg'
                        title='Game Ready' 
                        body='Lightweight realtime '
                    />
                    <IconCard 
                        url='/../public/images/test.jpg'
                        title='Web Ready' 
                        body='Bring 3D experience to the browsers.'
                    />
                </div>
            </div>        
        </div>
    )
}

export default Browse;