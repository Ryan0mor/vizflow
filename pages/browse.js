import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.js';
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
            spaceCollection (limit: 9) {
              items {
                sys {
                  id
                }
                name
                categoriesCollection (limit: 15) {
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
                      contentTypeAssetCollection (limit: 30){
                        items {
                          name
                          image{
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

const Browse = () => {

    const [apiData, setData] = useState([]);

    useEffect(() => {
        fetchSpaces()
            .then((response) => response.json())
            .then((receivedData) => setData(receivedData))
    }, [])

    console.log(apiData.data?.spaceCollection?.items[0].categoriesCollection.items[0].name)

    function TabListItem(props) {
        return (
            <Tabs.Tab value={props.name}>
                <h6 className='whitespace-nowrap'>{props.name}</h6>
            </Tabs.Tab>
        )
    }

    function TabPanelItem(props) {
        return (
            <Tabs.Panel value={props.name}>
                <h6 className='whitespace-nowrap'>{props.name}</h6>
                {console.log(props.list)}
                {props.list.map((category) => (
                    <div>
                        <h2>{category.categoryName}</h2>
                        {category.linkedFrom?.contentTypeAssetCollection.items.map((asset) => (
                            <div>
                                <AssetCarrousel 
                                    asset= {asset}
                                />
                                {asset.image.title}
                                <img src={asset.image.url} alt='test'/>
                            </div>
                        ))}
                    </div>
                ))}
            </Tabs.Panel>
        )
    }

    function AssetCarrousel(props) {
        return (
            <div>
                <Carousel
                    withIndicators
                    height={200}
                    slideSize="33.333333%"
                    slideGap="md"
                    breakpoints={[
                        { maxWidth: 'md', slideSize: '50%' },
                        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                    ]}
                    loop
                    align="start"
                >
                <Carousel.Slide>1</Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide>
                <Carousel.Slide>3</Carousel.Slide>
                </Carousel>
            </div>
        )
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
            <Tabs className=''>
                    <Tabs.List>
                        {
                        apiData.data?.spaceCollection?.items.map((tab) => (
                            <TabListItem 
                                key={tab.sys.id}
                                name={tab.name}
                            />
                        ))}
                    </Tabs.List>
                    {apiData.data?.spaceCollection?.items.map((tab) => (
                        <TabPanelItem
                            key={tab.sys.id}
                            name={tab.name}
                            list={tab.categoriesCollection?.items}
                        />
                    ))}
                </Tabs>
            </div>
            <Footer/>
        </div>
    )
}

export default Browse;