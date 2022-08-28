import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '/components/Layout';
import CategoriesBrowser from '../../components/CategoriesBrowser/CategoriesBrowser.js'

const fetchAsset = (slug) => fetch('https://graphql.contentful.com/content/v1/spaces/' + process.env.NEXT_PUBLIC_SPACE_ID, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_ACCESS_TOKEN
  },
  body: JSON.stringify({
    query:
    `
    query getCategoryAssets($assetId: String!) {
        category(id: $assetId) {
          categoryName
          linkedFrom {
            contentTypeAssetCollection {
              items {
                sys {
                  id
                }
                image{
                  url
                  title
                }
              }
            }
          }
        }
      }
    `,
    variables: {"assetId": slug}
  })
})

const Categories = () => {

  const [asset, setAsset] = useState([])
  const router = useRouter()
  const slug = router.query.slug

  function AssetCard(props) {
    return (
      <Link href={"/assets/" + props.data.sys.id}>
        <a>
          <div className=' bg-slate-100 border-slate-300 border-2 flex flex-col gap-2 aspect-square rounded-2xl transition hover:opacity-50'>
            <img className='rounded-2xl object-cover h-full' src={props.data.image.url} alt={props.data.image.title}/>
          </div>
        </a>
      </Link>
    )
  }

  useEffect (() => {
    if (typeof slug !== 'string') {
      return
    }
      fetchAsset(slug)
      .then((response) => response.json())
      .then((receivedData) => setAsset(receivedData))
  }, [slug])

  return (
    <Layout>
      <div className='container mx-auto flex flex-col gap-4 py-8'>
        <h1 className='header01'>{asset?.data?.category?.categoryName}</h1>
        <div className='grid grid-cols-4 gap-4'>
          {asset?.data?.category?.linkedFrom?.contentTypeAssetCollection?.items?.map((asset) => (
            <AssetCard
              key={asset.sys?.id}
              data={asset}
            />
          ))}
        </div>
        
      </div>
    </Layout>
    
  )
    
}

export default Categories;