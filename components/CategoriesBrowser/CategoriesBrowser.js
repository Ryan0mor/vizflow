import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Tabs } from '@mantine/core';
import SpaceIcon from '../Atoms/SpaceIcon.js';

const fetchSpaces = () => fetch('https://graphql.contentful.com/content/v1/spaces/' + process.env.NEXT_PUBLIC_SPACE_ID, {
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
            }
          }
        }
      }
    }
    `
  })
})

export default function CategoriesBrowser () {

  useEffect(() => {
    fetchSpaces()
        .then((response) => response.json())
        .then((data) => setData(data))
  }, [])

  const [apiData, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("Living room")

  function TabListItem(props) {
    let active = 'flex flex-col justify-center items-center gap-2 hover:text-indigo-500 text-indigo-500 w-[100px]'
    let unActive = 'flex flex-col justify-center items-center gap-2 hover:text-slate-400 text-slate-300 w-[100px]'
    return (
        <Tabs.Tab value={props.name}>
            <div className={props.name == activeTab ? active : unActive}>
                <SpaceIcon type={props.name}/>
                <h6 className='whitespace-nowrap'>{props.name}</h6>
            </div>
        </Tabs.Tab>
    )
}

  function TabPanelItem(props) {
    return (
      <Tabs.Panel value={props.name} pt="xs" >
        <div className='grid sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4 gap-4 p-4 lg:p-0'>
          {props.groups.map((group) => (
            <CategoryGroup 
              key={group.sys?.id}
              name={group.categoryName}
              image={group.image}
              slug={group.slug}
            />
          ))}
        </div>  
      </Tabs.Panel>
    )
  }

  function CategoryGroup(props) {
    console.log(props.image)
    return (
      <div className='rounded-2xl border aspect-square pb-4 hover:shadow-md hover:text-teal-400 hover:border-teal-400'>
        <Link href={props.slug}>
          <a>
            <div className='flex flex-col items-stretch gap-4'>
              <Image
                className='rounded-2xl'
                src={props.image?.url}
                alt={props.image?.title}
                layout="responsive"
                width={300}
                height={255}
              />
              <div className='flex flex-col gap-4'>
                <h6 className='self-center header06'>{props.name} →</h6>
              </div>
            </div>
          </a>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className='container mx-auto'>
        <Tabs value={activeTab} onTabChange={setActiveTab} unstyled >
          <Tabs.List className='flex flex-row justify-center overflow-auto py-4 gap-2'>
            {apiData?.data?.spaceCollection?.items?.map((tab) => (
              <TabListItem 
                key={tab.sys.id}
                name={tab.name}
                categoryImage={tab.name}
              />
            ))}
          </Tabs.List>
          {apiData?.data?.spaceCollection?.items?.map((tab) => (
            <TabPanelItem 
              key={tab.sys.id}
              name={tab.name}
              groups={tab.categoriesCollection?.items}
            />
          ))}
        </Tabs>
      </div>
    </div>
  )
}