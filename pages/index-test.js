import React from 'react';
import Link from 'next/link'

import Navbar from '../components/Navbar/Navbar.js';
import Button from '../components/Button/Button.js';

import { Canvas } from '@react-three/fiber'
import { useGLTF, PresentationControls, Environment, ContactShadows } from '@react-three/drei'
import { useRef } from 'react'
import materialData from '../public/material-data.js';

import Image from 'next/image'

const Index = () => {

    function IconCard(props) {
        return (
            <div className='flex flex-col gap-4  rounded-2xl border-slate-300 border'>
                <Image
                    className='rounded-3xl'
                    src={props.url}
                    alt="Picture of the author"
                    layout="responsive"
                    width={290}
                    height={165}
                />
                <div className=' flex flex-col gap-4 px-4 pb-4'>
                    <h3 className='header03'>{props.title}</h3>
                    <p className='paragraphReg'>{props.body}</p>
                </div>
            </div>
        )
    }

    function IconTab(props) {
        return (
            <div className='h-24 w-24 bg-slate-200 flex flex-col justify-center items-center'>
                <svg width="50" height="50" viewBox="0 0 24 24">
                    <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                </svg>
                <h6>{props.categoryName}</h6>
            </div>
        )
    }

    function CategoryCard(props) {
        return (
            <div className='rounded-2xl border aspect-square pb-4 hover:shadow-lg hover:border-teal-400'>
                <Link href='props.link'>
                    <a>
                        <div className='flex flex-col gap-4 item'>
                            <Image
                                className='rounded-2xl'
                                src='/../public/images/augmented-reality-ready-icon-card.png'
                                alt="Category picture"
                                layout="responsive"
                                width={300}
                                height={265}
                            />
                            <h6 className='self-center header06'>{props.title} →</h6>
                        </div> 
                    </a>
                </Link>                
            </div>
        )
    }

    function WindowTab() {
        return (
            <div className='bg-slate-100 flex flex-row gap-2 rounded-t-2xl p-2 '>
                <div className='h-4 w-4 rounded-full bg-slate-300'></div>
                <div className='h-4 w-4 rounded-full bg-slate-300'></div>
                <div className='h-4 w-4 rounded-full bg-slate-300'></div>
                <Dot diameter='4' color='bg-slate-300' />
            </div>  
        )
    }

    function Dot(props) {
        return (
            <div className='h-4 w-4 rounded-full bg-slate-300'></div>
        )      
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className=' gradient-bg'>
                <div className='lg:py-24 bg-gradient-to-br from-slate-100'>

                    <div className='lg:container mx-auto flex flex-col lg:flex-row gap-4'>
                        {/*Left*/}
                        <div className='z-50 lg:translate-x-20 rounded-2xl m-16 p-8 border lg:basis-1/2 shadow-lg flex flex-col gap-6 content-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 bg-slate-50'>
                            <h1 className='header01'>The ultimate archviz 3D content repository</h1>
                            <h2 className='header02'>Customizable 3D assets for architectural visualization proffesionals</h2>
                            <div className='flex flex-row gap-4'>
                                <Button content='Log in' link='#'/>
                                <Button content='Get started' link='#'/>
                            </div>
                        </div>
                        {/*Right*/}
                        <div className='lg:-translate-x-20 bg-slate-50 bg-opacity-80 border lg:basis-1/2 shadow-lg flex flex-col rounded-3xl  divide-y'>
                                <WindowTab/>
                                <div className='flex flex-row  '>
                                    <div className=' lg:w-4/5'>
                                        
                                    </div>
                                    <div className='lg:w-1/5'>
                                            <div className='m-2 aspect-square bg-slate-300 rounded-full'></div>
                                            <div className='m-2 aspect-square bg-slate-300 rounded-full'></div>
                                            <div className='m-2 aspect-square bg-slate-300 rounded-full'></div>
                                            <div className='m-2 aspect-square bg-slate-300 rounded-full'></div> 
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='container mx-auto flex flex-col gap-10 py-12'>
                <div className='flex flex-col gap-3 text-center'>
                    <p className='text-teal-400 header04'>Optimization</p>
                    <h2 className='header03'>Future ready assets</h2>
                </div>
                <div className=' grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    <IconCard 
                        url='/../public/images/game-ready-icon-card.png'
                        title='Game Ready' 
                        body='Fully optimized assets for realtime workflows.'
                    />
                    <IconCard 
                        url='/../public/images/virtual-reality-ready-icon-card.png'
                        title='VR Ready' 
                        body='Fully optimized assets for realtime workflows.'
                    />
                    <IconCard 
                        url='/../public/images/augmented-reality-ready-icon-card.png'
                        title='AR Ready' 
                        body='Create fluid lightweight augmented reality solutions.'
                    />
                    <IconCard 
                        url='/../public/images/web-ready-icon-card.png'
                        title='Web Ready' 
                        body='Easily bring 3d experiences to web browsers.'
                    />
                </div>
                <div className='bg-slate-'></div>
            </div>

            <div className='gradient-bg py-24'>
                <div className='container mx-auto grid lg:grid-cols-12'>
                    <div className='backdrop-filter backdrop-blur-sm bg-opacity-40 bg-slate-50 border rounded-2xl px-12 py-16 col-start-1 col-end-5 flex flex-col gap-4'>
                        <h5 className='header04'>Design</h5>
                        <h2 className='header01'>Create stunning 3d visualizations</h2>
                        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
            </div>

            <div className='bg-slate-100'>
                <div className='container mx-auto py-12 flex flex-col gap-8'>
                    <div className='flex flex-col gap-4 text-center'>
                        <h4 className='header04'>Integrations</h4>
                        <h2 className='header03'>One content lybrary to fit all workflows</h2>
                    </div>

                    <div className='grid lg:grid-cols-4 gap-4'>
                        <IconCard 
                            url='/../public/images/game-ready-icon-card.png'
                            title='Game Ready' 
                            body='Fully optimized assets for realtime workflows.'
                        />
                        <IconCard 
                            url='/../public/images/virtual-reality-ready-icon-card.png'
                            title='VR Ready' 
                            body='Fully optimized assets for realtime workflows.'
                        />
                        <IconCard 
                            url='/../public/images/augmented-reality-ready-icon-card.png'
                            title='AR Ready' 
                            body='Create fluid lightweight augmented reality solutions.'
                        />
                        <IconCard 
                            url='/../public/images/web-ready-icon-card.png'
                            title='Web Ready' 
                            body='Easily bring 3d experiences to web browsers.'
                        />
                        <IconCard 
                            url='/../public/images/game-ready-icon-card.png'
                            title='Game Ready' 
                            body='Fully optimized assets for realtime workflows.'
                        />
                        <IconCard 
                            url='/../public/images/virtual-reality-ready-icon-card.png'
                            title='VR Ready' 
                            body='Fully optimized assets for realtime workflows.'
                        />
                        <IconCard 
                            url='/../public/images/augmented-reality-ready-icon-card.png'
                            title='AR Ready' 
                            body='Create fluid lightweight augmented reality solutions.'
                        />
                        <IconCard 
                            url='/../public/images/web-ready-icon-card.png'
                            title='Web Ready' 
                            body='Easily bring 3d experiences to web browsers.'
                        />
                    </div>
                </div>

            </div>

            <div className=''>
                <div className='container mx-auto py-12 flex flex-col gap-8'>
                    <div className='flex flex-col gap-4 text-center'>
                        <h4 className='header04'>Integrations</h4>
                        <h2 className='header03'>One content lybrary to fit all workflows</h2>
                    </div>
                    <div className='flex flex-row gap-8 justify-center'>
                        <IconTab categoryName='Living room'/>
                        <IconTab categoryName='Kitchen'/>
                        <IconTab categoryName='Dinning room'/>
                        <IconTab categoryName='Bed room'/>
                        <IconTab categoryName='Office'/>
                        <IconTab categoryName='Hall room'/>
                        <IconTab categoryName='Bath room'/>
                        <IconTab categoryName='Outdoor'/>
                    </div>
                    <div className='grid lg:grid-cols-4 gap-4'>
                        <CategoryCard 
                            image='/../public/images/web-ready-icon-card.png'
                            title='Chairs'
                            url='/#'  
                        />
                        <CategoryCard 
                            image='/../public/images/web-ready-icon-card.png'
                            title='Chairs'
                            url='/#'  
                        />
                        <CategoryCard 
                            image='/../public/images/web-ready-icon-card.png'
                            title='Chairs'
                            url='/#'  
                        />
                        <CategoryCard 
                            image='/../public/images/web-ready-icon-card.png'
                            title='Chairs'
                            url='/#'  
                        />
                        <CategoryCard 
                            image='/../public/images/web-ready-icon-card.png'
                            title='Chairs'
                            url='/#'  
                        />
                        <CategoryCard 
                            image='/../public/images/web-ready-icon-card.png'
                            title='Chairs'
                            url='/#'  
                        />
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Index;