import Image from 'next/image'

export default function ImageSection (props) {
  let height = 700
  let overlay = 'flex flex-col static'
  return (
    <div className='relative flex flex-col h-[800px]'>
      <Image
        alt="Background image"
        src={props.url}
        layout="fill"
        objectFit="cover"
        quality={75}
      />
      <div className='w-full h-full absolute flex flex-col justify-center'>
        <div className='container mx-auto grid grid-cols-12'>
          <div className='backdrop-filter backdrop-blur-sm bg-opacity-40 bg-slate-50 border rounded-2xl p-8 lg:p-16 col-start-2 col-end-12 lg:col-end-7 flex flex-col gap-4'>
            <h5 className='header04 text-purple-500'>Design</h5>
            <h2 className='header02'>Create stunning 3d visualizations</h2>
            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
      </div>
    </div>
  )
} 