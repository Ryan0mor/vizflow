import React from 'react';
import Link from 'next/link'

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
                    url: "/",
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

    function createTabList(tab) {
        return (
            <TabListItem 
                key={tab.id}
                name={tab.name}
                image={tab.image}
            />
        )
    }

    function TabListItem(props) {
        return (
            <Tabs.Tab value={props.name} >{props.name}</Tabs.Tab>
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
            <Tabs.Panel value={props.name} pt="xs">
                {props.name}
                {props.groups.map(createCategoryGroups)}
            </Tabs.Panel>
        )
    }
    

    function createCategoryGroups(group) {
        return (
            <CategoryGroup 
                key={group.id}
                name={group.name}
            />
        )
    }

    function CategoryGroup(props) {
        return (
            <div>
                {props.name}
            </div>
        )
    }


    return (
        <div>
            <div className='container mx-auto'>
                <Tabs defaultValue="Living room">
                    <Tabs.List>
                        {categoryData.map(createTabList)}
                    </Tabs.List>

                    {categoryData.map(createTabPanel)}

                </Tabs>
            </div>
        </div>
    )
    
}

export default Categories;