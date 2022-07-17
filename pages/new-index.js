import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';

import { Canvas } from '@react-three/fiber'
import { useGLTF, PresentationControls, Environment, ContactShadows } from '@react-three/drei'
import { useRef } from 'react'
import materialData from '../public/material-data.js';

import Image from 'next/image'




const Browse = () => {

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
            <div className="w-full aspect-square bg-slate-50">
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

    function Button(props) {
        return (
            <button className='paragraphReg bg-slate-300 px-8 py-4 rounded-2xl'>
                {props.content}
            </button>
        )
    }
    

    return (
        <div>
            <Navbar></Navbar>
            <div className='dotted-bg'>
                <div className='bg-gradient-to-br from-slate-100'>

                    <div className='lg:container mx-auto grid lg:grid-cols-2 gap-8'>
                        {/*Left*/}
                        <div className='flex flex-col gap-10 justify-center items-start'>
                            <h1 className='header01'>The ultimate archviz 3D content repository</h1>
                            <h2 className='header02'>Customizable 3D assets for architectural visualization proffesionals</h2>
                            <div className='flex flex-row gap-8'>
                                <Button content='Log in'/>
                                <Button content='Get started'/>
                            </div>
                        </div>
                        {/*Right*/}
                        <div className='flex flex-col lg:flex-row bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5'>
                            <div className='w-full aspect-square '>
                                <Model/>
                            </div>
                            <div className='max-h-96 flex-auto bg-gradient-to-tl from-slate-100'>
                                <div className='flex flex-row lg:flex-col justify-self-auto gap-2 p-2 overflow-auto'>
                                    <div className="w-full aspect-square bg-slate-200 min-w-24">Mat item</div>
                                    <div className="w-full aspect-square bg-slate-200">Mat item</div>
                                    <div className="w-full aspect-square bg-slate-200">Mat item</div>
                                    <div className="w-full aspect-square bg-slate-200">Mat item</div>
                                    <div className="w-full aspect-square bg-slate-200">Mat item</div>
                                    <div className="w-full aspect-square bg-slate-200">Mat item</div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>  
            </div>
            <div className='ass min-h-3/4 '>
                <div className='bg-gradient-to-br from-slate-100'>
                    <div className='p-12 lg:p-32 lg:container mx-auto grid lg:grid-cols-2 gap-8'>
                        {/*Left*/}
                        <div className='flex flex-col gap-10 justify-center items-start'>
                            <h1 className='header01'>The ultimate archviz 3D content repository</h1>
                            <h2 className='header02'>Customizable 3D assets for architectural visualization proffesionals</h2>
                            <div className='flex flex-row gap-8'>
                                <Button content='Log in'/>
                                <Button content='Get started'/>
                            </div>
                        </div>
                        {/*Right*/}
                        <div className='flex flex-row bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 rounded-3xl '>
                            <div className='w-full aspect-square '>
                               
                            </div>
                            <div className='flex-auto bg-gradient-to-tl from-slate-100'>
                                <div className='flex flex-col gap-2 p-2 overflow-auto'>
                                    
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className='pt-24 pb-24 bg-slate-200 '>
                <div className='lg:container mx-auto lg:flex w-full bg-slate-300'>
                    <div className='bg-slate-500 lg:w-1/3'></div>
                    <div className='bg-pink-200 lg:w-2/3 lg:h-[700px] rounded-full'>
                        <div className='h-full'>
                            <Canvas>
                                <ambientLight intensity={0.1} />
                                <directionalLight color="red" position={[0, 0, 5]} />
                                <mesh>
                                    <boxGeometry args={[4, 4, 4]}/>
                                    <meshStandardMaterial />
                                </mesh>
                            </Canvas>
                        </div>
                        <div className="h-24 flex flex-row gap-2 p-2 overflow-auto bg-slate-600">
                            <div className="h-full aspect-square bg-slate-200">Model item</div>
                            <div className="h-full aspect-square bg-slate-200">Model item</div>
                            <div className="h-full aspect-square bg-slate-200">Model item</div>
                            <div className="h-full aspect-square bg-slate-200">Model item</div>
                            <div className="h-full aspect-square bg-slate-200">Model item</div>
                            <div className="h-full aspect-square bg-slate-200">Model item</div>
                            <div className="h-full aspect-square bg-slate-200">Model item</div>
                            <div className="h-full aspect-square bg-slate-200">Model item</div>
                            <div className="h-full aspect-square bg-slate-200">Model item</div>
                            <div className="h-full aspect-square bg-slate-200">Model item</div>
                            <div className="h-full aspect-square bg-slate-200">Model item</div>
                        </div> 
                    </div>
                </div>
            </div>

            <div>
                
            </div>
            

            
        </div>
    )
}

export default Browse;