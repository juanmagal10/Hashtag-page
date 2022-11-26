import React from 'react';
import imagen from '../../assets/pc-usuario.jpg'
import './Servicios.css'
import { servicesData } from '../../assets/servicesData/servicesData';
import { Link } from 'react-router-dom';

const Servicios = () => {
    
  return (
      <section className='servicios-section'>
          <div className="servicios-title-container">
              <h2 className='servicios-title'>Servicios que ofrecemos:</h2>
          </div>
          <div className="servicios-grid-container">
              <div className="grid-service-item">
                  <h3 className='single-servicio-title'>{servicesData[0].nombre }</h3>
                  <img src={servicesData[0].img} alt="" className='servicio-imagen' />
                  <p className='single-servicio-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere consequuntur itaque repellendus culpa inventore explicabo illum error nostrum ipsa provident, necessitatibus fuga voluptates neque temporibus quod nihil perspiciatis libero.</p>
                  <button className='servicios-link-btn'><Link to={`/${servicesData[0].id}`}>Mas info</Link></button>
              </div>
              <div className="grid-service-item">
                  <h3 className='single-servicio-title'>Nombre Servicio2</h3>
                  <img src={servicesData[1].img} alt="" className='servicio-imagen' />
                  <p className='single-servicio-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere consequuntur itaque repellendus culpa inventore   explicabo illum error nostrum ipsa provident, necessitatibus fuga voluptates neque temporibus quod nihil perspiciatis libero.</p>
                  <button className='servicios-link-btn'><Link to={`/${servicesData[0].id}`}>Mas info</Link></button>
              </div>
              <div className="grid-service-item">
                  <h3 className='single-servicio-title'>Nombre Servicio1</h3>
                  <img src={imagen} alt="" className='servicio-imagen' />
                  <p className='single-servicio-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere consequuntur itaque repellendus culpa inventore   explicabo illum error nostrum ipsa provident, necessitatibus fuga voluptates neque temporibus quod nihil perspiciatis libero.</p>
                  <button className='servicios-link-btn'><Link to={`/${servicesData[0].id}`}>Mas info</Link></button>
              </div>
          </div>
      </section>
  )
}

export default Servicios
