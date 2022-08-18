import React, { useEffect, useState, useRef } from 'react';
import { useRouter, Image } from 'next/router'
import Link from 'next/link'
import Error from 'next/error'
import { Tabs, ScrollArea } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import SpaceIcon from '/components/Atoms/SpaceIcon.js';
import { Canvas } from "@react-three/fiber";
import {useGLTF, PresentationControls, Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio"

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

const fetchCatalog = () => fetch('https://graphql.contentful.com/content/v1/spaces/' + process.env.NEXT_PUBLIC_SPACE_ID, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
        query:
        `
        {
            spaceCollection(limit: 9) {
              items {
                slug
                sys {
                  id
                }
                name
                categoriesCollection(limit: 15) {
                  total
                  items {
                    sys {
                      id
                    }
                    slug
                    categoryName
                    image {
                      title
                      url
                    }
                    linkedFrom {
                      contentTypeAssetCollection(limit: 30) {
                        items {
                          sys {
                            id
                          }
                          slug
                          image {
                            title
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
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

    useEffect(() => {
        fetchCatalog()
            .then((response) => response.json())
            .then((receivedData) => setData(receivedData))
    }, [])

    const [apiData, setData] = useState([]);


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
        const snap = useSnapshot(state)
        const { nodes, materials } = useGLTF(String(asset?.data?.contentTypeAsset?.file?.url))

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


    /*
    if(asset.data?.contentTypeAsset == null) {
        return <Error statusCode={404} />
    }*/

    function MaterialCard (props) {
        let snap = useSnapshot(state)
        let color = String(props?.mat.toLowerCase())
        let mat = 'cursor-pointer hover:m-1 m-3 transition-all aspect-square rounded-full matShadows'
        let currMat = 'cursor-pointer border-[12px] shadow-sm border-slate-200 m-3 transition-all aspect-square rounded-full matShadows'

        return (
            <div className={color !== snap.mat01 ? mat : currMat} style={{backgroundColor: color}} onClick={() => {
                state.mat01 = color
                state.mat02 = color
            }}/>    
        )
    }

    const [activeTab, setActiveTab] = useState("Living room");

    function TabListItem(props) {
        let active = 'flex flex-col justify-center items-center gap-2 hover:text-indigo-500 text-indigo-500'
        let unActive = 'flex flex-col justify-center items-center gap-2 hover:text-slate-400 text-slate-300'
        return (
            <Tabs.Tab value={props.name} className='flex flex-col justify-center items-center w-[85px]'>
                <div className={props.name == activeTab ? active : unActive}>
                    <SpaceIcon />
                    <h6 className='whitespace-nowrap'>{props.name}</h6>
                </div>
            </Tabs.Tab>
        )
    }

    function CategorySection(props) {
        return (
            <div className='flex flex-col gap-2 justify-center items-center text-center'>
                <h3 className='header03 text-slate-600'>{props.data.categoryName}</h3>
                <div className='grid grid-cols-2 gap-3'>
                    {props.data.linkedFrom.contentTypeAssetCollection.items.map((asset) => (
                        <AssetCard
                            key={asset.sys?.id}
                            data={asset}
                        />
                    ))}
                </div>
            </div>
        )
    }

    function TabPanelItem(props) {
        return (
            <Tabs.Panel value={props.name}>
                <ScrollArea>                    
                        <div className='flex flex-col gap-10'>
                            {props.list?.map((category) => (
                                <CategorySection
                                    key={category.sys.id}
                                    data={category}
                                />
                            ))}
                        </div>
                </ScrollArea>
            </Tabs.Panel>
        )
    }

    function AssetCard(props) {
        return (
            <Link href={props.data.sys.id}>
                <a>
                    <div className=' bg-slate-100 border-slate-300 border-2 flex flex-col gap-2 aspect-square rounded-2xl transition hover:opacity-50'>
                        <img className='rounded-2xl object-cover h-full' src={props.data.image.url} alt={props.data.image.title}/>
                    </div>
                </a>
            </Link>
        )
    }

    return (
        <div className="h-screen">
            <div className='h-[48px] bg-slate-200'></div>
            <div className='h-[calc(100%-48px)] grid lg:grid-cols-4 grid-cols-1 lg:grid-rows-1 grid-rows-4 divide-x-2 divide-slate-200'>
                
                {/*Asset browser*/}
                <ScrollArea>
                    <div className='col-span-1 row-span-1 h-full '>
                        <Tabs radius="md" orientation="vertical" onTabChange={setActiveTab} defaultValue={"Living room"}>
                            <Tabs.List>
                                {apiData.data?.spaceCollection?.items.map((tab) => (
                                    <TabListItem 
                                        key={tab.sys.id}
                                        name={tab.name}
                                        slug={tab.slug}
                                    />
                                ))}
                            </Tabs.List>
                            <div className='bg-slate-50 p-3'>
                                {apiData.data?.spaceCollection?.items.map((tab) => (
                                    <TabPanelItem
                                        key={tab.sys.id}
                                        name={tab.name}
                                        list={tab.categoriesCollection?.items}
                                        slug={tab.slug}
                                    />
                                ))}
                            </div>
                            
                        </Tabs>
                    </div>            
                </ScrollArea>

                <div className='lg:col-span-2 col-span-1 row-span-2' >
                    <Model />
                </div>

                {/*Material selector*/}
                <ScrollArea>
                    <div className='col-span-1 row-span-1 bg-slate-50'>
                        <div className='flex flex-row lg:grid lg:grid-cols-2 p-2'>
                            {asset?.data?.contentTypeAsset?.finishes?.map((mat) => (
                                <MaterialCard
                                    key={mat} 
                                    mat={mat}/>
                            ))}
                        </div>
                    </div>
                </ScrollArea>

            </div>
        </div>
    )
}