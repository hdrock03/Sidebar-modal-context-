import React,{useContext} from 'react'
import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './context'

export default function Home() {
    const {openSidebar,openModal} = useGlobalContext()
  return (
    <div>
         <main>
        <button className='sidebar-toggle' onClick={openSidebar}>
            <FaBars/>
        </button>
        <button className='btn' onClick={openModal}>show Modal</button>
    </main>
    </div>
  )
}
