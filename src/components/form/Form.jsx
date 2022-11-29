import React from 'react';
import formImg from '../../assets/profile-pic.jpg'
import './Form.css'

const Form = () => {

  return (
      <section className='form-section'>
          <div className="form-container">
              <div className="form-title-container">
                  <h3 className='form-title'>Contactanos!!</h3>
              </div>
              <div className="form-image-container">
                  <img src={formImg} alt="" className='form-img'/>
              </div>
              <div className="form-inputs-container">
                  <form action="">
                      <form-control>
                          <label htmlFor="name"></label>
                          <input type="text" id='name' name='name' className='form-input' placeholder='nombre'/>
                      </form-control>
                      <form-control>
                          <label htmlFor="email"></label>
                          <input type="email" id='email' name='email' className='form-input' placeholder='email'/>
                      </form-control>
                      <form-control>
                          <label htmlFor="tel"></label>
                          <input type="number" id='tel' name='tel' className='form-input' placeholder='telefono'/>
                      </form-control>
                      <form-control>
                          <label htmlFor="city"></label>
                          <input type="text" id='city' name='city' className='form-input' placeholder='ciudad'/>
                      </form-control>
                      <form-control>
                          <label htmlFor="company"></label>
                          <input type="text" id='company' name='company' className='form-input' placeholder='empresa'/>
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
