import React from 'react'
import Image from 'next/image'

import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import {useGLTF, PresentationControls, Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useRef } from 'react'
import { proxy, useSnapshot } from "valtio"


const ConfiguratorSample = () => {

    
    const state = proxy ({
        mat01: "#000000",
        mat02: "#000000",
    })
    /*
    const anotherState = proxy ({
        mat01: null,
        mat02: null,
    })*/

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

        //state.mat02 = "#c6ce00"
        //anotherState.mat02 = materials.glass
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
        return (
            <div className='m-2 aspect-square bg-teal-400 rounded-full'
                onClick={() => {
                    console.log(color)
                    state.mat02 = color
                    state.mat01 = color}}>
                    {snap.mat01}
            </div>
        )
    }

    function increase() {
        console.log("efsdf")
        state.mat01 = "#c6ce00"
        state.mat02 = "#c6ce00"
    }

    return (
        <div className='min-h-[400px] bg-slate-50 bg-opacity-80 border shadow-lg flex flex-col rounded-3xl divide-y'>
            <WindowTab/>
            <div className='flex flex-row'>
                <div className='w-full lg:w-4/5'>
                    <Model />
                </div>
                <div className='lg:w-1/5'>
                        <ColorSelector color='#c6ce00'/>
                        <ColorSelector color='#ff0080'/>
                        <ColorSelector color='#572364'/>
                        <ColorSelector color='#67feff'/>
                </div>
            </div>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default ConfiguratorSample