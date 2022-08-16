import React, { useEffect, useState, useRef } from 'react';
import { useRouter, Image } from 'next/router'
import Error from 'next/error'

import { Canvas } from "@react-three/fiber";
import {useGLTF, PresentationControls, Environment, ContactShadows, OrbitControls } from "@react-three/drei";

import { proxy } from "valtio"

const fetchAsset = (slug) => fetch('https://graphql.contentful.com/content/v1/spaces/' + process.env.NEXT_PUBLIC_SPACE_ID, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
        query:
        `
        query getAsset($assetId: String!){
            contentTypeAsset (id: $assetId) {
              file{
                url  
              }
              finishes
            }
          }
        `,
        variables: {"assetId": slug}
    })
})

export default function AssetEntryPage() {
    const [asset, setAsset] = useState([])

    const router = useRouter()
    const slug = router.query.slug

    useEffect (() => {
        if (typeof slug !== 'string') {
            return
        }
        fetchAsset(slug)
            .then((response) => response.json())
            .then((receivedData) => setAsset(receivedData))
    }, [slug])


    const state = proxy ({
        mat01: "#ffffff",
        mat02: "#ffffff",
    })

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
        const { nodes, materials } = useGLTF(asset.data.contentTypeAsset?.file.url)

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

    console.log(asset)

    /*
    if(asset.data?.contentTypeAsset == null) {
        return <Error statusCode={404} />
    }*/

    return (
        <div>
            <div className='flex flex-row'>
                <div className='w-full lg:w-4/5'>
                    <Model />
                </div>
                <div className='lg:w-1/5'>
                <div className='lg:w-1/5'>

                </div>
                    
                </div>
            </div>
        </div>
    )
}