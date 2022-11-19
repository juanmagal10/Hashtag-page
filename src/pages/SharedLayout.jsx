import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './SharedLayout/SharedLayout.css'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <>
    <main className='shared-layout-container'>
          <Header />
          <Outlet />
          <Footer/>
    </main>
    </>
  )
}

export default SharedLayout
