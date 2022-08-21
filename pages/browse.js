import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import Layout from '../components/Layout';
import SpaceIcon from '../components/Atoms/SpaceIcon.js';
import ImageSection from '../components/ImageSection';
import { Tabs } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

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

export default function Browse () {

  useEffect(() => {
    fetchSpaces()
      .then((response) => response.json())
      .then((receivedData) => setData(receivedData))
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
      <Tabs.Panel value={props.name}>
        <div className='flex flex-col gap-6 py-6'>
          {props.list?.map((category) => (
            <CategorySection
              key={category.sys.id}
              data={category}
            />
          ))}
        </div>
      </Tabs.Panel>
    )
  }

  function CategorySection(props) {
    return (
      <div className='flex flex-col gap-4 justify-center items-center py-8 text-center'>
        <h3 className='header02 text-slate-600'>{props.data.categoryName}</h3>
        <Carousel
          withIndicators
          slideSize="25%"
          slideGap="lg"
          breakpoints={[
            { maxWidth: 'md', slideSize: '50%' },
            { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
          ]}
          loop
          align="start"
        >
          {props.data.linkedFrom.contentTypeAssetCollection.items.map((asset) => (
            <AssetCard
              key={asset.sys?.id}
              data={asset}
            />
          ))}
        </Carousel>
      </div>
    )
  }

  function AssetCard(props) {
    return (
      <Carousel.Slide>
        <Link href={"assets/" + props.data.sys.id}>
          <a>
            <div className=' bg-slate-100 border-slate-300 border-2 flex flex-col gap-2 aspect-square rounded-2xl transition hover:opacity-50'>
              <img className='rounded-2xl object-cover h-full' src={props.data.image.url} alt={props.data.image.title}/>
            </div>
          </a>
        </Link>
      </Carousel.Slide>
    )
  }

  return (
    <Layout>
      <ImageSection
        height={400}
        url='/images/generic-interior-design-background.jpg'
        preTitle='Catalog'
        title='Hundreds of 3d assets in one place'
        body='Browse assets through different spaces and categories.'
      />
      <div className='container mx-auto py-10 px-4'>
        <Tabs value={activeTab} onTabChange={setActiveTab} unstyled>
          <Tabs.List className='flex flex-row overflow-scroll lg:overflow-auto justify-start lg:justify-center py-4'>
            {apiData.data?.spaceCollection?.items.map((tab) => (
              <TabListItem 
                key={tab.sys.id}
                name={tab.name}
                slug={tab.slug}
              />
            ))}
          </Tabs.List>
          {apiData.data?.spaceCollection?.items.map((tab) => (
            <TabPanelItem
              key={tab.sys.id}
              name={tab.name}
              list={tab.categoriesCollection?.items}
              slug={tab.slug}
            />
          ))}
        </Tabs>
      </div>
    </Layout>
  )
}