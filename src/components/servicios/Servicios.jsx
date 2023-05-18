import React from 'react';
import imagen from '../../assets/pc-usuario.jpg'
import './Servicios.css'
import { servicesData } from '../../assets/servicesData/servicesData';
import { Link } from 'react-router-dom';

const Servicios = () => {
    
  return (
      <section className='servicios-section' id='servicios'>
          <div className="servicios-title-container">
              <h2 className='servicios-title'>Servicios que ofrecemos:</h2>
          </div>
          <div className="servicios-grid-container">
              
              <div className="grid-service-item">
                   <div className="single-servicio-title-container">
                    <h3 className='single-servicio-title'>{servicesData[0].nombre}</h3>
                  </div>
                  <div className="servicio-imagen-container">
                    <img src={servicesData[0].img} alt="" className='servicio-imagen' />
                  </div>
                  <div className="single-servicio-text-container">
                    <p className='single-servicio-text'>{servicesData[0].descripcion}</p>
                  </div>
                  {/* <button className='servicios-link-btn'><Link to={`/${servicesData[0].id}`}>Mas info</Link></button> */}
              </div>

              <div className="grid-service-item">
                   <div className="single-servicio-title-container">
                    <h3 className='single-servicio-title'>{servicesData[1].nombre}</h3>
                  </div>
                     <div className="servicio-imagen-container">
                    <img src={servicesData[1].img} alt="" className='servicio-imagen' />
                  </div>
                  <div className="single-servicio-text-container">
                    <p className='single-servicio-text'>{servicesData[1].descripcion}</p>
                  </div>
                  {/* <button className='servicios-link-btn'><Link to={`/${servicesData[0].id}`}>Mas info</Link></button> */}
              </div>

              <div className="grid-service-item">
                <div className="single-servicio-title-container">
                    <h3 className='single-servicio-title'>{servicesData[2].nombre}</h3>
                </div>
                <div className="servicio-imagen-container">
                    <img src={servicesData[2].img} alt="" className='servicio-imagen' />
                </div>
                <div className="single-servicio-text-container">
                    <p className='single-servicio-text'>{servicesData[2].descripcion}</p>
                </div>
                  {/* <button className='servicios-link-btn'><Link to={`/${servicesData[0].id}`}>Mas info</Link></button> */}
              </div>

              <div className="grid-service-item">
                <div className="single-servicio-title-container">
                    <h3 className='single-servicio-title'>{servicesData[3].nombre}</h3>
                </div>
                   <div className="servicio-imagen-container">
                    <img src={servicesData[2].img} alt="" className='servicio-imagen' />
                </div>
                <div className="single-servicio-text-container">
                    <p className='single-servicio-text'>{servicesData[2].descripcion}</p>
                </div>
                  {/* <button className='servicios-link-btn'><Link to={`/${servicesData[0].id}`}>Mas info</Link></button> */}
              </div>

              <div className="grid-service-item">
                   <div className="single-servicio-title-container">
                    <h3 className='single-servicio-title'>{servicesData[4].nombre}</h3>
                  </div>
                    <div className="servicio-imagen-container">
                    <img src={servicesData[4].img} alt="" className='servicio-imagen' />
                  </div>
                  <div className="single-servicio-text-container">
                    <p className='single-servicio-text'>{servicesData[4].descripcion}</p>
                  </div>
                  {/* <button className='servicios-link-btn'><Link to={`/${servicesData[0].id}`}>Mas info</Link></button> */}
              </div>

              <div className="grid-service-item">
                   <div className="single-servicio-title-container">
                    <h3 className='single-servicio-title'>{servicesData[5].nombre}</h3>
                  </div>
                    <div className="servicio-imagen-container">
                    <img src={servicesData[5].img} alt="" className='servicio-imagen' />
                  </div>
                  <div className="single-servicio-text-container">
                    <p className='single-servicio-text'>{servicesData[5].descripcion}</p>
                  </div>
                  {/* <button className='servicios-link-btn'><Link to={`/${servicesData[0].id}`}>Mas info</Link></button> */}
              </div>
          </div>
      </section>
  )
}

export default Servicios
