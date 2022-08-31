import Image from 'next/image'

export default function ImageSection (props) {
  let height = props.height
  let containerStyle = 'relative flex flex-col h-[' + height + 'px]'
  return (
    <div className={containerStyle}>
      <div className='hidden lg:block'>
        <Image
          alt="Background image"
          src={props.url}
          layout="responsive"
          width={1440}
          height={height}
          objectFit="cover"
          quality={75}
        />
      </div>
      
      <div className='block lg:hidden'>
        <Image
          alt="Background image"
          src={props.url}
          layout="responsive"
          width={1440}
          height={1800}
          objectFit="cover"
          quality={75}
        />
      </div>
      
      <div className='w-full h-full absolute flex flex-col justify-center'>
        <div className='container mx-auto grid grid-cols-12 p-4 lg-p0'>
          <div className='backdrop-filter backdrop-blur-sm bg-opacity-40 bg-slate-50 border rounded-2xl p-8 lg:p-16 col-start-1 col-end-13 lg:col-start-2 lg:col-end-7 flex flex-col gap-4'>
            <h5 className='header04 text-purple-500'>{props.preTitle}</h5>
            <h2 className='header02'>{props.title}</h2>
            <p className='paragraph'>{props.body}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 