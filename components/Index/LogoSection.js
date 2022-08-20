import Image from 'next/image'

export default function LogoSection () {

  function LogoCard(props) {
    return (
      <div className='rounded-2xl'>
        <Image
          className='rounded-3xl'
          src={props.url}
          alt="Picture of the author"
          layout="responsive"
          width={290}
          height={165}
        />
      </div>
    )
  }

  return (
    <div className='bg-slate-100'>
      <div className='container mx-auto py-12 flex flex-col gap-8 p-4'>
        <div className='flex flex-col gap-4 text-center'>
          <h4 className='header04 text-pink-500'>Integrations</h4>
          <h2 className='header03'>One content lybrary to fit all workflows</h2>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 '>
          <LogoCard url='/images/logos/logo-unity.jpg'/>
          <LogoCard url='/images/logos/logo-unreal.jpg'/>
          <LogoCard url='/images/logos/logo-blender.jpg'/>
          <LogoCard url='/images/logos/logo-3ds-max.jpg'/>
          <LogoCard url='/images/logos/logo-twinmotion.jpg'/>
          <LogoCard url='/images/logos/logo-lumion.jpg'/>
          <LogoCard url='/images/logos/logo-d5-render.jpg'/>
          <LogoCard url='/images/logos/logo-cinema-4d.jpg'/>
        </div>
      </div>
    </div>
  )
}