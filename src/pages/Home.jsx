import React from 'react'
import PrincipalSection from '../components/Principal/PrincipalSection'
import About from '../components/About/About'
import Servicios from '../components/servicios/Servicios'
import './Home.css'


const Home = () => {
  return (
    <main className='main-container'>
      <PrincipalSection />
      <About></About>
      <Servicios></Servicios>
    </main>
  )
}

export default Home
