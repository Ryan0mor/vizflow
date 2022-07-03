import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import { Canvas } from '@react-three/fiber'


const Browse = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>About me</h1>
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh>
                    <boxGeometry args={[4, 4, 4]}/>
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    )
}

export default Browse;