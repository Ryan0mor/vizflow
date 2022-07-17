import React from 'react';
import Navbar from '../components/Configurator/Navbar/Navbar.js';
import Actionbar from '../components/Actionbar/Actionbar.js';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber'
import { useGLTF, PresentationControls, Environment, ContactShadows } from '@react-three/drei'
import { useRef } from 'react'
import materialData from '../public/material-data.js';

const Configurator = () => {
    const [selectedMat, setSelectedMat] = React.useState("");

    function createMaterial(material) {
        return <MaterialItem
            key={material.id}
            color={material.color}
            id={material.id}
        />
    }

    function MaterialItem(props) {
        return (
            <div className="h-full w-full aspect-square bg-slate-50">
                <Canvas camera={{ position: [0, 0, 4], fov: 32}}>
                    <ambientLight intensity={0.1} />
                    <directionalLight color="white" position={[0, 0, 5]} />
                    <mesh
                        onClick={() => {
                            console.log("clicked" + props.id);
                            setSelectedMat()
                        }}
                    >
                        <sphereGeometry />
                        <meshStandardMaterial color={props.color}/>   
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
    console.log(materials.watch)
    setSelectedMat(materials.glass);
    setSelectedMat(materials.watch);
    return (
        <group ref={ref} {...props} dispose={null}>
            <mesh geometry={nodes.Object005_glass_0.geometry} material={materials.glass}></mesh>
            <mesh castShadow receiveShadow geometry={nodes.Object006_watch_0.geometry} material={selectedMat} />
        </group>
    )
  }

    return (
        <div className="h-screen bg-slate-200">
            <Navbar></Navbar>
            <div className="h-[calc(100%-50px)] flex-col flex lg:flex-row">

                <div className="bg-slate-300 h-1/4 lg:h-[calc(100%-50px)] lg:basis-1/4">
                    <div className="h-[50px]">
                        <h3 className='header03'>Model list</h3>
                    </div>
                    <div className="h-[calc(100%-50px)] lg:h-full">
                        <div className="h-full flex flex-row  lg:grid gap-2 p-2 lg:grid-cols-2 overflow-auto bg-slate-600">
                            <div className="h-full aspect-square bg-slate-200">Model item</div>                           
                        </div> 
                    </div>                 
                </div>

                <div className="bg-slate-900 h-1/2 lg:h-full lg:basis-1/2">
                    <Model></Model>
                </div>

                <div className="bg-slate-300 h-1/4 lg:h-[calc(100%-50px)] lg:basis-1/4">
                    <div className="h-[50px]">
                        <h3 className='header03'>Material slider</h3>
                    </div>
                    <div className="h-[calc(100%-50px)] lg:h-full">
                        <div className="h-full flex flex-row lg:grid gap-2 p-2 lg:grid-cols-2 overflow-auto bg-slate-600">
                            {materialData.map(createMaterial)}
                        </div> 
                    </div>    
                </div>

            </div>
        </div>
    )
}

export default Configurator;

    /* TODO: CHECK or DELETE
    function MaterialSelector(props) {
        const ref = useRef();
        return (
            <group ref={ref} {...props} dispose={null}>
                {data.map(MaterialItem)}
            </group>
        )
    }*/
