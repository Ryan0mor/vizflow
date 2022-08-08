import React from 'react'
import Image from 'next/image'

import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const ConfiguratorSample = () => {

    function WindowTab() {
        return (
            <div className='bg-slate-100 flex flex-row gap-2 rounded-t-2xl p-2 '>
                <Dot />
                <Dot />
                <Dot />
            </div>  
        )
    }

    function Dot() {
        return (<div className='h-4 w-4 rounded-full bg-slate-300' />)      
    }

    return (
        <div className='min-h-[400px] bg-slate-50 bg-opacity-80 border shadow-lg flex flex-col rounded-3xl divide-y'>
            <WindowTab/>
            <div className='flex flex-row'>
                <div className='w-full lg:w-4/5'>
                    
                </div>
                <div className='lg:w-1/5'>
                        <div className='m-2 aspect-square bg-slate-300 rounded-full'></div>
                        <div className='m-2 aspect-square bg-slate-300 rounded-full'></div>
                        <div className='m-2 aspect-square bg-slate-300 rounded-full'></div>
                        <div className='m-2 aspect-square bg-slate-300 rounded-full'></div> 
                </div>
            </div>
        </div>
    )
}

export default ConfiguratorSample