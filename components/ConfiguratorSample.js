import React, { useState } from 'react'
import { Canvas } from "@react-three/fiber";
import {useGLTF, PresentationControls, Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { useRef } from 'react'
import { proxy, useSnapshot } from "valtio"

export default function ConfiguratorSample () {

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

  function MaterialCard (props) {
    let snap = useSnapshot(state)
    let color = String(props?.mat.toLowerCase())
    let mat = 'cursor-pointer transition-all aspect-square rounded-full matShadows w-full'
    let currMat = 'cursor-pointer shadow-sm border-slate-200 transition-all aspect-square rounded-full matShadows w-full'
    return (
      <div className={color !== snap.mat01 ? mat : currMat} style={{backgroundColor: color}} onClick={() => {
        state.mat01 = color
        state.mat02 = color
      }}/>    
    )
  }

  return (
    <div className='lg:min-h-[400px] bg-slate-50 bg-opacity-80 border shadow-lg flex flex-col rounded-3xl divide-y'>
      <WindowTab/>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full aspect-square lg:w-4/5'>
          <Model />
        </div>
        <div className='flex flex-row lg:flex-col lg:w-1/5 justify-center p-1 gap-2'>
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