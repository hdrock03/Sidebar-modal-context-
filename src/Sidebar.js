import React from 'react'
import logo from './logo.svg'
import {social, links} from './data'
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from './context'

export default function Sidebar() {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()

  return (
   <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' :'sidebar'} `}>
    <div className='sidebar-header'>
        <img src={logo} className='logo' alt='coding addict' />
        <button className='close-btn' onClick={closeSidebar}>
            <FaTimes/>
        </button>
    </div>
    <ul className='links'>
        {/* data folder se yaha map kiye hai data  */}
        {links.map((link) => {
            const{id,url,text,icon} = link;
            return <li key={id}>
                <a href={url}>
                    {icon}
                    {text}
                </a>
            </li>
        })}
    </ul>
    <ul className='social-icons'>
        {social.map((link) => {
            const{id, url, icon} = link;
            return <li key={id}>
                <a href={url}>
                    {icon}
                </a>
            </li>
        })}
    </ul>
   </aside>
  )
}
