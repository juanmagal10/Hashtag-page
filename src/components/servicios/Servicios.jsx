import React from 'react';
import imagen from '../../assets/pc-usuario.jpg'
import './Servicios.css'

const Servicios = () => {
  return (
      <section className='servicios-section'>
          <div className="servicios-title-container">
              <h2 className='servicios-title'>Servicios que ofrecemos</h2>
          </div>
          <div className="servicios-grid-container">
              <div className="grid-service-item">
                  <h3 className='single-servicio-title'>Nombre Servicio</h3>
                  <img src={imagen} alt="" className='servicio-imagen' />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere consequuntur itaque repellendus culpa inventore explicabo illum error nostrum ipsa provident, necessitatibus fuga voluptates neque temporibus quod nihil perspiciatis libero.</p>
              </div>
              <div className="grid-service-item">
                  <h3 className='single-servicio-title'>Nombre Servicio</h3>
                  <img src={imagen} alt="" className='servicio-imagen' />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere consequuntur itaque repellendus culpa inventore   explicabo illum error nostrum ipsa provident, necessitatibus fuga voluptates neque temporibus quod nihil perspiciatis libero.</  p>
                  
              </div>
              <div className="grid-service-item">
                  <h3 className='single-servicio-title'>Nombre Servicio</h3>
                  <img src={imagen} alt="" className='servicio-imagen' />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere consequuntur itaque repellendus culpa inventore   explicabo illum error nostrum ipsa provident, necessitatibus fuga voluptates neque temporibus quod nihil perspiciatis libero.</  p>
              </div>
          </div>
      </section>
  )
}

export default Servicios
