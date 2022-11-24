import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
          <div className="adress-container">
              <address className='address'>Telefono: 1235124123 / 1324124124</address>
              <address className='address'>Direccion: Nueve de Julio 331 - General Cabrera (Córdoba)</address>
          </div>
          <div className="social-media-container">
              <a href=""><BsFacebook/></a>
              <a href=""><BsInstagram/></a>
              <a href=""><BsWhatsapp/></a>
              <a href=""><FaTiktok/></a>
              
          </div>
    </footer>
  )
}

export default Footer
