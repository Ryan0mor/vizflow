import Button from '../../components/Button/Button.js'
import Logo from '../../components/Logo/Logo.js'
import Link from 'next/link'
import { Menu } from '@mantine/core';

export default function Navbar () {
  const linkData = [
    {
      id: 2,
      name: "Browse",
      link: "/browse",
    },
    {
      id: 3,
      name: "Integrations",
      link: "/#integrations",
    },
    {
      id: 4,
      name: "About",
      link: "/about",
    },
    {
      id: 5,
      name: "Contact",
      link: "/contact",
    }   
  ];

  function LinkItemDesktop(props) {
    return (
      <Link href={props.link }>
        <a className='hover:text-teal-400 header06 '>
          <div className=''>
            {props.name}
          </div>
        </a>
      </Link>
    )
  }

  function LinkItemMobile(props) {
    return (
      <Menu.Item>
        <Link href={props.link }>
          <a className='hover:text-teal-400 header06 '>
            <div className=''>
              {props.name}
            </div>
          </a>
        </Link>
      </Menu.Item>
    )
  }

  return (
    <nav className='bg-white border-b border-slate-200 py-3 px-4 md:px-0'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <Logo />
        <div className='hidden md:flex flex-row gap-8'>
          {linkData.map((link) => (
            <LinkItemDesktop
              key={link.id}
              name={link.name}
              link={link.link}
              type='desktop'
            />
          ))}
        </div>
        
        <div className='hidden md:flex gap-6'>
          <Button 
            content='Log in' 
            link='#'
            choice='1'/>
          <Button 
            content='Get started' 
            link='#'
            choice='2'/>
        </div>
        <Menu className='block md:hidden'>
          <Menu.Target>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
          </Menu.Target>
          <Menu.Dropdown className='w-3/4 p-5 rounded-2xl'>
            {linkData.map((link) => (
              <LinkItemMobile
                key={link.id}
                name={link.name}
                link={link.link}
              />
            ))}
            <Menu.Divider />
            <Menu.Item>
              <Button 
                content='Log in' 
                link='#'
                choice='1'/>
            </Menu.Item>
            <Menu.Item>
              <Button 
                content='Get started' 
                link='#'
                choice='2'/>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div> 
    </nav>
  )
}