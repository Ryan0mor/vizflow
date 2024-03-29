import React from 'react';
import CategoriesBrowser from '../components/CategoriesBrowser/CategoriesBrowser'
import Layout from '../components/Layout';
import HeroSection from '../components/Index/HeroSection';
import LogoSection from '../components/Index/LogoSection.js'
import OptimizationSection from '../components/Index/OptimizationSection';
import ImageSection from '../components/ImageSection';
import Button from '../components/Button/Button';

export default function Index() {
  function CatalogSection () {
    return (
      <div className='pb-8'>
        <div className='container mx-auto py-12 flex flex-col gap-8'>
          <div className='flex flex-col gap-4 text-center'>
            <h4 className='header04 text-blue-500'>Catalog</h4>
            <h2 className='header03'>Carefully crafted categories</h2>
          </div>
          <CategoriesBrowser/>
        </div>
        <div className='flex flex-row justify-center'>
          <Button choice='1' content='View all' link='/browse'/>
        </div>
      </div>
    )
  }
  
  return (
    <Layout>
      <HeroSection />
      <OptimizationSection />
      <ImageSection
        height={600}
        url='/images/generic-interior-design-background.jpg'
        preTitle='Design'
        title='Create stunning 3d visualizations'
        body='At your disposal a collection of 3d assets carefully made by 3d professionals and optimized for architectural visualization workflows.'
      />
      <LogoSection />
      <CatalogSection />
    </Layout>
  )
}
