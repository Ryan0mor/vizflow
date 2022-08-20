import ConfiguratorSample from '../ConfiguratorSample';
import Button from '../Button/Button';

export default function HeroSection () {
  return (
    <div className=' gradient-bg'>
      <div className='lg:py-24 bg-gradient-to-br from-slate-100'>
        <div className='lg:container mx-auto flex flex-col lg:flex-row gap-4 p-4 lg:p-0'>
          {/*Left*/}
          <div className='z-50 lg:translate-x-20 rounded-2xl lg:m-16 p-8 border lg:basis-1/2 shadow-lg flex flex-col gap-6 content-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 bg-slate-50'>
            <h1 className='header01'>The ultimate archviz 3D content repository</h1>
            <h2 className='header02'>Customizable 3D assets for architectural visualization proffesionals</h2>
            <div className='flex flex-row gap-4'>
              <Button choice='3' content='More info' link='#design'/>
              <Button choice='4' content='Get started' link='#'/>
            </div>
          </div>
          {/*Right*/}
          <div className='lg:-translate-x-20 lg:basis-1/2'>
              <ConfiguratorSample />
          </div>
        </div>
      </div>
    </div>
  )
}