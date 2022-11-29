import React from 'react'
import PrincipalSection from '../components/Principal/PrincipalSection'
import About from '../components/About/About'
import Servicios from '../components/servicios/Servicios'
import ChoseUs from '../components/ChoseUs/ChoseUs'
import Form from '../components/form/Form'
import './Home.css'


const Home = () => {
  return (
    <main className='main-container'>
      <PrincipalSection />
      <About />
      <Servicios/>
      <ChoseUs />
      <Form/>
    </main>
  )
}

export default Home
