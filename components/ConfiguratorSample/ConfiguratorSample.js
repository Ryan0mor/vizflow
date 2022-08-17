import React, { useState } from 'react'
import Image from 'next/image'

import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import {useGLTF, PresentationControls, Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useRef } from 'react'
import { proxy, useSnapshot } from "valtio"


const ConfiguratorSample = () => {

    const materials = [
        {
            id: 1,
            mat: '#ffffff',
        },
        {
            id: 2,
            mat: '#a3a2b8',
        },
        {
            id: 3,
            mat: '#f7dc6f',
        },
        {
            id: 4,
            mat: '#f09c65',
        },
        
    ]

    
    const state = proxy ({
        mat01: "#ffffff",
        mat02: "#ffffff",
    })

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

    function Model() {
        return (
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
                <PresentationControls
                    global
                    config={{ mass: 2 }}
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 3, Math.PI / 3]}
                    azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
                    <File rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.25]} scale={0.003} />
                </PresentationControls>
                <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
                <Environment preset="city" />
            </Canvas>
        )
    }

    


    function File(props) {
        const ref = useRef()
        const snap = useSnapshot(state)
        const { nodes, materials } = useGLTF('/watch-v1.glb')

        return (
            <group 
                ref={ref} 
                {...props}
                dispose={null}>
                <mesh geometry={nodes.Object005_glass_0.geometry} material={materials.glass} material-color={state.mat01}/>
                <mesh castShadow receiveShadow geometry={nodes.Object006_watch_0.geometry} material={materials.watch} material-color={state.mat02}/>
            </group>
        )
    }

    function ColorSelector (props) {
        const snap = useSnapshot(state)
        const color = props.color

        if (color !== snap.mat01) {
            return (
                <div className='hover:scale-110 m-3 transition-all aspect-square bg-teal-400 rounded-full'
                    onClick={() => {
                        state.mat02 = color
                        state.mat01 = color}}>
                    <Image
                        className='rounded-2xl'
                        src={props.image}
                        alt="Category picture"
                        layout="responsive"
                        width={200}
                        height={200}
                    /> 
                </div>
            )
        } else {
            return (
                <div className='shadow-xl m-3 hover:scale-110 transition-all aspect-square rounded-full'
                    onClick={() => {
                        state.mat02 = color
                        state.mat01 = color}} 
                    >
                        <Image
                            className='rounded-2xl'
                            src={props.image}
                            alt="Category picture"
                            layout="responsive"
                            width={200}
                            height={200}
                        /> 
                </div>
            )
        }
        
    }

    function MaterialCard (props) {
        let snap = useSnapshot(state)
        let color = String(props?.mat.toLowerCase())
        let mat = 'cursor-pointer hover:scale-110 m-3 transition-all aspect-square rounded-full matShadows'
        let currMat = 'cursor-pointer border-[8px] shadow-sm border-slate-200 m-3 transition-all aspect-square rounded-full matShadows'

        return (
            <div className={color !== snap.mat01 ? mat : currMat} style={{backgroundColor: color}} onClick={() => {
                state.mat01 = color
                state.mat02 = color
            }}/>    
        )
    }

    return (
        <div className='min-h-[400px] bg-slate-50 bg-opacity-80 border shadow-lg flex flex-col rounded-3xl divide-y'>
            <WindowTab/>
            <div className='flex flex-row'>
                <div className='w-full lg:w-4/5'>
                    <Model />
                </div>
                <div className='lg:w-1/5'>

                    {materials.map((props) =>  (
                            <MaterialCard 
                                key={props.id}
                                mat={props.mat}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default ConfiguratorSample