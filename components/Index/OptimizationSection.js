import Image from 'next/image'

export default function OptimizationSection () {

  function IconCard(props) {
    return (
      <div className='flex flex-col gap-4 rounded-2xl border-slate-300 border'>
        <Image
          className='rounded-3xl'
          src={props.url}
          alt="Picture of the author"
          layout="responsive"
          width={290}
          height={165}
        />
        <div className=' flex flex-col gap-4 px-4 pb-4'>
          <h3 className='header03 text-slate-700'>{props.title}</h3>
          <p className='paragraphReg'>{props.body}</p>
        </div>
      </div>
    )
  }

  return(
    <div className='container mx-auto flex flex-col gap-10 py-12' id='design'>
      <div className='flex flex-col gap-3 text-center'>
        <p className='text-teal-400 header04'>Optimization</p>
        <h2 className='header03'>Future ready assets</h2>
      </div>
      <div className=' grid grid-cols-2 lg:grid-cols-4 gap-4 px-4'>
        <IconCard 
          url='/images/game-ready-icon-card.png'
          title='Game Ready' 
          body='Fully optimized assets for realtime workflows.'
        />
        <IconCard 
          url='/images/augmented-reality-ready-icon-card.png'
          title='AR Ready' 
          body='Create fluid lightweight augmented reality solutions.'
        />
        <IconCard 
          url='/images/virtual-reality-ready-icon-card.png'
          title='VR Ready' 
          body='Fully optimized assets for realtime workflows.'
        />
        <IconCard 
          url='/images/web-ready-icon-card.png'
          title='Web Ready' 
          body='Easily bring 3d experiences to web browsers.'
        />
      </div>
      <div className='bg-slate-'></div>
    </div>
  )
}