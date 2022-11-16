import React, { useEffect } from 'react';
import axios from 'axios';
import img from '../../assets/profile-pic.jpg'
import './PrincipalSection.css'

const PrincipalSection = () => {
// let img=null
//     useEffect(() => {
//       img=fetch('../../assets/profile-pic.jpg')
//         .then(res=>res.blob())
//         .then(res => img.src = URL.createObjectURL(img))
//         // console.log(img)
//     }, [])
  
    // useEffect(() => {
    //   axios('../../assets/PrincipalSectionData/profile-pic.jpg')
    //     .then(res=>console.log(res))
       
    // },[])
  return (
    <section className='principal-section-container'>
      <div className="left-img-container">
        <div className="img-text-container">
          <img src={img} alt='profile picture' loading='lazy' className='left-profile-pic profile-pic' />
          <h2 className='profile-name-left'>Clarisa Oviedo</h2>
        </div>
      </div>

        <div className="right-img-container">
          <div className="img-text-container">
            <img src={img} alt='profile picture' loading='lazy' className='right-profile-pic' />
            <h2 className='profile-name-right'>Clarisa Oviedo</h2>
          </div>
        </div>
      
        
     
    </section>
  )
}

export default PrincipalSection
