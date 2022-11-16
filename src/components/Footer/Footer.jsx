import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
          <div className="adress-container">
              <address>Telefono:1235124123 / 1324124124</address>
              <address>Direccion: Nueve de Julio 331 - General Cabrera (Córdoba)</address>
          </div>
          <div className="social-media-container">
              <a href=""><BsFacebook/></a>
              <a href=""><BsInstagram/></a>
              <a href=""><BsWhatsapp/></a>
              <a href=""><BsTwitter/></a>
              
          </div>
    </footer>
  )
}

export default Footer
