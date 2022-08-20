import React, { useEffect, useState } from 'react';
import CategoriesBrowser from '../components/CategoriesBrowser/CategoriesBrowser'
import Layout from '../components/Layout';
import HeroSection from '../components/Index/HeroSection';
import LogoSection from '../components/Index/LogoSection.js'
import OptimizationSection from '../components/Index/OptimizationSection';
import ImageSection from '../components/ImageSection';

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
        spaceCollection {
          items {
            name
          }
        }
      }
    `
  })
})

export default function Index() {
    
  useEffect(() => {
      fetchSpaces()
          .then((response) => response.json())
          .then((data) => console.log(data.data.spaceCollection.items[0].name))
  }, [])

  function CatalogSection () {
    return (
      <div className=''>
        <div className='container mx-auto py-12 flex flex-col gap-8'>
          <div className='flex flex-col gap-4 text-center'>
            <h4 className='header04 text-blue-500'>Catalog</h4>
            <h2 className='header03'>Carefully crafted categories</h2>
          </div>
          <CategoriesBrowser/>
        </div>
      </div>
    )
  }
  

  return (
    <Layout>
      <HeroSection />
      <OptimizationSection />
      <ImageSection 
        align='left'
        url='/images/generic-interior-design-background.jpg'
        preTitle='Design'
        title='Create stunning 3d visualizations'
        body='At your disposal a collection of 3d assets re'
      />
      <LogoSection />
      <CatalogSection />
    </Layout>
  )
}
