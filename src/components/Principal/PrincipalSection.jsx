import React, { useEffect } from 'react';
import axios from 'axios';
import img from '../../assets/profile-pic-clari.JPG'
import img2 from '../../assets/profile-pic-ro.JPG'
import './PrincipalSection.css'

const PrincipalSection = () => {
  return (
    <section className='principal-section-container' id='inicio'>
      <div className="left-img-container">
        <div className="img-text-container">
          <img src={img} alt='profile picture' loading='lazy' className='left-profile-pic profile-pic' />
          <h2 className='profile-name-left'>Clarisa Oviedo</h2>
        </div>
      </div>

        <div className="right-img-container">
          <div className="img-text-container">
            <img src={img2} alt='profile picture' loading='lazy' className='right-profile-pic' />
            <h2 className='profile-name-right'>Rocio Arias</h2>
          </div>
        </div>
      
        
     
    </section>
  )
}
export default PrincipalSection
