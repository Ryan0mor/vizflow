import React from 'react';
import Navbar from '../components/Configurator/Navbar/Navbar.js';
import Actionbar from '../components/Actionbar/Actionbar.js';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber'
import { useGLTF, PresentationControls, Environment, ContactShadows, Html } from '@react-three/drei'
import { useRef } from 'react'

const Configurator = () => {
    const [stadoMaterial, setEstadoMaterial] = React.useState("");

    return (
        <div class="h-screen bg-slate-200">
            <Navbar></Navbar>
            <div class="h-[calc(100%-50px)] flex-col flex lg:flex-row">
                <div class="bg-slate-300 h-1/4 lg:h-[calc(100%-50px)] lg:basis-1/4">
                    <div class="h-[50px]">
                        <h3>Model list</h3>
                    </div>
                    <div class="h-[calc(100%-50px)] lg:h-full">
                        <div class="h-full flex flex-row  lg:grid gap-2 p-2 lg:grid-cols-2 overflow-auto bg-slate-600">
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                        </div> 
                    </div>                 
                </div>
                <div class="bg-slate-900 h-1/2 lg:h-full lg:basis-1/2">
                    <Model></Model>
                </div>
                <div class="bg-slate-300 h-1/4 lg:h-[calc(100%-50px)] lg:basis-1/4">
                    <div class="h-[50px]">
                        <h3>Material slider</h3>
                    </div>
                    <div class="h-[calc(100%-50px)] lg:h-full">
                        <div class="h-full flex flex-row lg:grid gap-2 p-2 lg:grid-cols-2 overflow-auto bg-slate-600">
                            <MaterialItem></MaterialItem>
                            <MaterialItem></MaterialItem>
                            <MaterialItem></MaterialItem>
                            <MaterialItem></MaterialItem>
                            <MaterialItem></MaterialItem>
                            <MaterialItem></MaterialItem>
                            <MaterialItem></MaterialItem>
                            <MaterialItem></MaterialItem>
                            <MaterialItem></MaterialItem>
                            <MaterialItem></MaterialItem>
                            <MaterialItem></MaterialItem>
                        </div> 
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Configurator;

    function MaterialItem() {
        return (
            <div class="h-full w-full aspect-square bg-slate-50">
                <Canvas camera={{ position: [0, 0, 4], fov: 32}}>
                    <ambientLight intensity={0.1} />
                    <directionalLight color="white" position={[0, 0, 5]} />
                    <mesh
                        onClick={() => {
                            console.log("clicked");
                        }}
                    >
                        <sphereGeometry />
                        <meshStandardMaterial />   
                    </mesh>
                </Canvas>
            </div>
        )
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
                    <Watch rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.25]} scale={0.003} />
                </PresentationControls>
                <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
                <Environment preset="city" />
            </Canvas>
        )
    }
  
  function Watch(props) {
    const ref = useRef()
    const { nodes, materials } = useGLTF('/watch-v1.glb')
    return (
      <group ref={ref} {...props} dispose={null}>
        <mesh geometry={nodes.Object005_glass_0.geometry} material={materials.glass}></mesh>
        <mesh castShadow receiveShadow geometry={nodes.Object006_watch_0.geometry} material={materials.watch} />
      </group>
    )
  }