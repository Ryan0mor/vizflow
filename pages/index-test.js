import React, { useEffect, useState } from 'react';
import Link from 'next/link'

import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.js';
import Button from '../components/Button/Button.js';
import CategoriesBrowser from '../components/CategoriesBrowser/CategoriesBrowser.js'
import ConfiguratorSample from '../components/ConfiguratorSample.js';

import Image from 'next/image'

const fetchSpaces = () => fetch('https://graphql.contentful.com/content/v1/spaces/' + process.env.NEXT_PUBLIC_SPACE_ID, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
        query:
        `
            {
                spaceCollection {
                    items {
                        name
                    }
                }
            }
        `
    })
})

const Index = () => {
    

    useEffect(() => {
        fetchSpaces()
            .then((response) => response.json())
            .then((data) => console.log(data.data.spaceCollection.items[0].name))
    }, [])


    function IconCard(props) {
        return (
            <div className='flex flex-col gap-4 rounded-2xl border-slate-300 border'>
                <Image
                    className='rounded-3xl'
                    src={props.url}
                    alt="Picture of the author"
                    layout="responsive"
                    width={290}
                    height={165}
                />
                <div className=' flex flex-col gap-4 px-8 pb-8'>
                    <h3 className='header03'>{props.title}</h3>
                    <p className='paragraphReg'>{props.body}</p>
                </div>
            </div>
        )
    }

    function LogoCard(props) {
        return (
            <div className='rounded-2xl'>
                <Image
                    className='rounded-3xl'
                    src={props.url}
                    alt="Picture of the author"
                    layout="responsive"
                    width={290}
                    height={165}
                />
            </div>
        )
    }

    return (
        <div>
            <Navbar />

            {/* Hero section */}
            <div className=' gradient-bg'>
                <div className='lg:py-24 bg-gradient-to-br from-slate-100'>

                    <div className='lg:container mx-auto flex flex-col lg:flex-row gap-4 p-4 lg:p-0'>
                        {/*Left*/}
                        <div className='z-50 lg:translate-x-20 rounded-2xl lg:m-16 p-8 border lg:basis-1/2 shadow-lg flex flex-col gap-6 content-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 bg-slate-50'>
                            <h1 className='header01'>The ultimate archviz 3D content repository</h1>
                            <h2 className='header02'>Customizable 3D assets for architectural visualization proffesionals</h2>
                            <div className='flex flex-row gap-4'>
                                <Button choice='3' content='More info' link='#'/>
                                <Button choice='4' content='Get started' link='#'/>
                            </div>
                        </div>
                        {/*Right*/}
                        <div className='lg:-translate-x-20 lg:basis-1/2'>
                            <ConfiguratorSample />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Optimization section */}
            <div className='container mx-auto flex flex-col gap-10 py-12'>
                <div className='flex flex-col gap-3 text-center'>
                    <p className='text-teal-400 header04'>Optimization</p>
                    <h2 className='header03'>Future ready assets</h2>
                </div>
                <div className=' grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    <IconCard 
                        url='/images/game-ready-icon-card.png'
                        title='Game Ready' 
                        body='Fully optimized assets for realtime workflows.'
                    />
                    <IconCard 
                        url='/images/augmented-reality-ready-icon-card.png'
                        title='AR Ready' 
                        body='Create fluid lightweight augmented reality solutions.'
                    />
                    <IconCard 
                        url='/images/virtual-reality-ready-icon-card.png'
                        title='VR Ready' 
                        body='Fully optimized assets for realtime workflows.'
                    />

                    <IconCard 
                        url='/images/web-ready-icon-card.png'
                        title='Web Ready' 
                        body='Easily bring 3d experiences to web browsers.'
                    />
                </div>
                <div className='bg-slate-'></div>
            </div>

            {/* Design section */}
            <div className='py-36 bg-center bg-[url("https://www.domingoloro.com/images/portfolio_2/render-3d-espacio-interior-domingo-loro.jpg")]'>
                <div className='container mx-auto grid grid-cols-12'>
                    <div className='backdrop-filter backdrop-blur-sm bg-opacity-40 bg-slate-50 border rounded-2xl px-12 py-16 col-start-1 md:col-end-8 lg:col-end-5 flex flex-col gap-4'>
                        <h5 className='header04 text-purple-500'>Design</h5>
                        <h2 className='header01'>Create stunning 3d visualizations</h2>
                        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
            </div>

            {/* Integrations section */}
            <div className='bg-slate-100'>
                <div className='container mx-auto py-12 flex flex-col gap-8 p-4'>
                    <div className='flex flex-col gap-4 text-center'>
                        <h4 className='header04 text-pink-500'>Integrations</h4>
                        <h2 className='header03'>One content lybrary to fit all workflows</h2>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 '>
                        <LogoCard url='/images/logos/logo-unity.jpg' />
                        <LogoCard url='/images/logos/logo-unreal.jpg'/>
                        <LogoCard url='/images/logos/logo-blender.jpg'/>
                        <LogoCard url='/images/logos/logo-3ds-max.jpg'/>
                        <LogoCard url='/images/logos/logo-twinmotion.jpg'/>
                        <LogoCard url='/images/logos/logo-lumion.jpg'/>
                        <LogoCard url='/images/logos/logo-d5-render.jpg'/>
                        <LogoCard url='/images/logos/logo-cinema-4d.jpg'/>
                    </div>
                </div>
            </div>

            {/*Categories section*/}
            <div className=''>
                <div className='container mx-auto py-12 flex flex-col gap-8'>
                    <div className='flex flex-col gap-4 text-center'>
                        <h4 className='header04 text-blue-500'>Catalog</h4>
                        <h2 className='header03'>Carefully crafted categories</h2>
                    </div>
                    <CategoriesBrowser/>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Index;