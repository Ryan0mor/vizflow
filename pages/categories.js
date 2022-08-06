import React from 'react';
import Link from 'next/link'
import { useState } from 'react';

import { Table, Tabs } from '@mantine/core';

import Image from 'next/image'

const Categories = () => {

    const categoryData = [
        {
            id: 1,
            name: "Living room",
            categoryImage: "/images/web-ready-icon-card.png",
            groups: [
                {
                    id: 1,
                    name: "Chairs",
                    image: "/images/web-ready-icon-card.png",
                    url: "/test",
                },
                {
                    id: 2,
                    name: "Coffe tables",
                    image: "/images/web-ready-icon-card.png",
                    url: "/",
                }
            ]
        },
        {
            id: 2,
            name: "Kitchen",
            categoryImage: "/images/web-ready-icon-card.png",
            groups: [
                {
                    id: 1,
                    name: "Kitche stuff",
                    image: "/images/web-ready-icon-card.png",
                    url: "/",
                },
                {
                    id: 2,
                    name: "Kitchen tables",
                    image: "/images/web-ready-icon-card.png",
                    url: "/",
                }
            ]
        },
        

    ]

    function CategoryCard(props) {
        return (
            <div className='rounded-2xl border aspect-square pb-4 hover:shadow-lg hover:border-teal-400'>
                <Link href='props.link'>
                    <a>
                        <div className='flex flex-col gap-4 item'>
                            <Image
                                className='rounded-2xl'
                                src='/images/augmented-reality-ready-icon-card.png'
                                alt="Category picture"
                                layout="responsive"
                                width={300}
                                height={265}
                            />
                            <h6 className='self-center header06'>{props.title} →</h6>
                        </div> 
                    </a>
                </Link>                
            </div>
        )
    }

    function SvgTest () {
        return (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                <path d="M4 31H46V36C46 41.5228 41.5228 46 36 46H14C8.47715 46 4 41.5228 4 36V31Z" fill="currentColor" fillOpacity="0.25"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M44 33H6V36C6 40.4183 9.58172 44 14 44H36C40.4183 44 44 40.4183 44 36V33ZM4 31V36C4 41.5228 8.47715 46 14 46H36C41.5228 46 46 41.5228 46 36V31H4Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 6C8.68629 6 6 8.68629 6 12V31H4V12C4 7.58172 7.58172 4 12 4H12.5C16.6421 4 20 7.35786 20 11.5H18C18 8.46243 15.5376 6 12.5 6H12Z" fill="currentColor"/>
                <path d="M26 19L12 19L12 18C12 14.134 15.134 11 19 11C22.866 11 26 14.134 26 18L26 19Z" fill="currentColor" fillOpacity="0.25"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M25.9291 17C25.9758 17.3266 26 17.6605 26 18L26 19L12 19L12 18C12 17.6605 12.0242 17.3266 12.0709 17C12.5561 13.6077 15.4735 11 19 11C22.5265 11 25.4439 13.6077 25.9291 17ZM14.1 17L23.9 17C23.4367 14.7178 21.419 13 19 13C16.581 13 14.5633 14.7178 14.1 17Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M13 27V21H15V27H13Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M4 33L2 33L2 31L4 31L4 33Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M48 33L46 33L46 31L48 31L48 33Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M23 27V21H25V27H23Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M18 27V21H20V27H18Z" fill="currentColor"/>
            </svg>
        )
    }

    function createTabList(tab) {
        return (
            <TabListItem 
                key={tab.id}
                name={tab.name}
                categoryImage={tab.categoryImage}
            />
        )
    }

    function TabListItem(props) {
        return (
            <Tabs.Tab value={props.name}>
                <div className='flex flex-col justify-center items-center gap-2 active:text-indigo-500 hover:text-slate-400 text-slate-300'>
                    {/*<img src={props.categoryImage} alt="Alt text" width="50" height="60"></img>*/}
                    <SvgTest/>
                    <h6 className='whitespace-nowrap'>{props.name}</h6>
                </div>
            </Tabs.Tab>
        )
    }


    function createTabPanel(tab) {
        return (
            <TabPanelItem 
                key={tab.id}
                name={tab.name}
                groups={tab.groups}
            />
        )
    }

    function TabPanelItem(props) {
        return (
            <Tabs.Panel value={props.name} pt="xs" >
                <div className='grid grid-cols-4 gap-4'>
                    {props.groups.map(createCategoryGroups)}
                </div>
                
            </Tabs.Panel>
        )
    }
    

    function createCategoryGroups(group) {
        return (
            <CategoryGroup 
                key={group.id}
                name={group.name}
                image={group.image}
                url={group.url}
            />
        )
    }

    function CategoryGroup(props) {
        return (
            <div className='rounded-2xl border aspect-square pb-4 hover:shadow-md hover:text-teal-400 hover:border-teal-400'>
                <Link href={props.url}>
                    <a>
                        <Image
                            className='rounded-2xl'
                            src={props.image}
                            alt="Category picture"
                            layout="responsive"
                            width={300}
                            height={265}
                        />
                        <div className='flex flex-col gap-4 item'>
                            <h6 className='self-center header06'>{props.name} →</h6>
                        </div>
                    </a>
                </Link>
            </div>
        )
    }


    return (
        <div>
            <div className='container mx-auto'>
                <Tabs defaultValue="Living room" >
                    <Tabs.List className='flex flex-row justify-center'>
                        {categoryData.map(createTabList)}
                    </Tabs.List>

                    {categoryData.map(createTabPanel)}

                </Tabs>
            </div>
        </div>
    )
    
}

export default Categories;