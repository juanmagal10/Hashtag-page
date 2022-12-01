import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
          <div className="adress-container">
              <address className='address'>Telefono: 1235124123 / 1324124124</address>
              <address className='address'>Direccion: Nueve de Julio 724 - General Cabrera (Córdoba)</address>
          </div>
          <div className="social-media-container">
              <a href="https://www.instagram.com/hashtagmarketing.gc/?hl=es-la" target='_blank'><BsInstagram className='social-media-img'/></a>
              <a href=""><BsWhatsapp className='social-media-img'/></a>
              <a href=""><FaTiktok className='social-media-img'/></a>
          </div>
    </footer>
  )
}

export default Footer
