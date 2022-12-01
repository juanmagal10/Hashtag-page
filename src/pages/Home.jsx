import React,{Suspense, lazy} from 'react'
import About from '../components/About/About'
import Servicios from '../components/servicios/Servicios'
import ChoseUs from '../components/ChoseUs/ChoseUs'
import Form from '../components/form/Form'
import Loading from '../components/Loading/Loading'
import './Home.css'
const PrincipalSection = lazy(() => import("../components/Principal/PrincipalSection"));


const Home = () => {
  return (
    <main className='main-container'>
      <Suspense fallback={<Loading/>}>
        <PrincipalSection />
        <About />
        <Servicios/>
        <ChoseUs />
        <Form/>
      </Suspense>
    </main>
  )
}

export default Home
