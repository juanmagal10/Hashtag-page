import React from 'react';
import formImg from '../../assets/logo-negro.png'
import './Form.css'

const Form = () => {

  return (
      <section className='form-section' id='contacto'>
          <div className="form-container">
              <div className="form-title-img-container">
                  
              <div className="form-title-container">
                  <h3 className='form-title'>Contactanos!!</h3>
              </div>
              <div className="form-image-container">
                      <img src={formImg} alt="" className='form-img' />
                      <h5 className='form-subtitle'>Hagamos crecer tu negocio!!!</h5>
              </div>
              </div>
              <div className="form-inputs-container">
                  <form action="" className='form'>
                      <form-control>
                          <label htmlFor="name"></label>
                          <input type="text" id='name' name='name' className='form-input form-input1' placeholder='nombre'/>
                      </form-control>
                      <form-control>
                          <label htmlFor="email"></label>
                          <input type="email" id='email' name='email' className='form-input form-input2' placeholder='email'/>
                      </form-control>
                      <form-control>
                          <label htmlFor="tel"></label>
                          <input type="text" id='tel' name='tel' className='form-input form-input3' placeholder='telefono'/>
                      </form-control>
                      <form-control>
                          <label htmlFor="city"></label>
                          <input type="text" id='city' name='city' className='form-input form-input4' placeholder='ciudad'/>
                      </form-control>
                      <form-control>
                          <label htmlFor="company"></label>
                          <input type="text" id='company' name='company' className='form-input form-input5' placeholder='empresa'/>
                      </form-control>
                      <form-control>
                          <label htmlFor="message"></label>
                          <textarea type="text" id='company' name='company' rows={window.innerWidth<800?4:10} className='form-textarea' placeholder='mensaje'/>
                      </form-control>
                  </form>
              </div>
             
          </div>
    </section>
  )
}

export default Form
