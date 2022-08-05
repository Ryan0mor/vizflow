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
                <Link href='' >
                    <a className='h-24 w-24 bg-slate-200 flex flex-col justify-center items-center active:text-indigo-500 text-slate-400 hover:text-slate-600'>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                            <path d="M4 31H46V36C46 41.5228 41.5228 46 36 46H14C8.47715 46 4 41.5228 4 36V31Z" fill="currentColor" fill-opacity="0.25"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M44 33H6V36C6 40.4183 9.58172 44 14 44H36C40.4183 44 44 40.4183 44 36V33ZM4 31V36C4 41.5228 8.47715 46 14 46H36C41.5228 46 46 41.5228 46 36V31H4Z" fill="currentColor"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C8.68629 6 6 8.68629 6 12V31H4V12C4 7.58172 7.58172 4 12 4H12.5C16.6421 4 20 7.35786 20 11.5H18C18 8.46243 15.5376 6 12.5 6H12Z" fill="currentColor"/>
                            <path d="M26 19L12 19L12 18C12 14.134 15.134 11 19 11C22.866 11 26 14.134 26 18L26 19Z" fill="currentColor" fill-opacity="0.25"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9291 17C25.9758 17.3266 26 17.6605 26 18L26 19L12 19L12 18C12 17.6605 12.0242 17.3266 12.0709 17C12.5561 13.6077 15.4735 11 19 11C22.5265 11 25.4439 13.6077 25.9291 17ZM14.1 17L23.9 17C23.4367 14.7178 21.419 13 19 13C16.581 13 14.5633 14.7178 14.1 17Z" fill="currentColor"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 27V21H15V27H13Z" fill="currentColor"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 33L2 33L2 31L4 31L4 33Z" fill="currentColor"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M48 33L46 33L46 31L48 31L48 33Z" fill="currentColor"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 27V21H25V27H23Z" fill="currentColor"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 27V21H20V27H18Z" fill="currentColor"/>
                        </svg>
                        <h6 className='whitespace-nowrap'>{props.categoryName}</h6>
                    </a>
                </Link>
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

            <div className='py-36 bg-fixed bg-[url("https://pixabay.com/get/ga31db0d3f7bb2d4775628f8bfac72dc39f3094b4100be717d0960e15ecd3e230bd3dbb946a2201c4b9bf0c782f645984a316ca926c25caba6cbcdd4a9de11e8ad074ece218155e3b7ab3d8cd9938654f_1920.jpg")]'>
                <div className='container mx-auto grid grid-cols-12'>
                    <div className='backdrop-filter backdrop-blur-sm bg-opacity-40 bg-slate-50 border rounded-2xl px-12 py-16 col-start-1 md:col-end-8 lg:col-end-5 flex flex-col gap-4'>
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