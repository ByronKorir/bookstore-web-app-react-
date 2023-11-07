import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar' 
import '../styles/Layout.css'

export default function Layout() {
  return (
    <div>
      <Navbar/>
        <div id='outlet' className='pt-3 pb-2'>
          <Outlet/>
        </div>
      <Footer/>
    </div>
  )
}
