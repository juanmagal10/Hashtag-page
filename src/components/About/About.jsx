import React from 'react'
import './About.css'

const About = () => {
  return (
    <article className='about-container'>
      <div className="hero"></div>
        <div className="about-title-container">
          <h2 className='about-title'>Que es Hashtag??</h2>
        </div>
        <div className="about-text-container">
          <p className='about-text'>¡HOLA! Somos Clari y Ro 👭🏻, juntas conformamos el Team Hashtag Agencia de Marketing Digital 🖥.
          Decidimos unir nuestras profesiones, fotógrafa 📸  y Diseñadora Gráfica 👩🏻‍💻 para hacer crecer sus negocios en el medio digital y llevarlos a otro nivel 📈.</p>
          <h5>¿Como hacemos crecer tu marca?</h5>
          <ul className='about-list'>
            <li className='about-list-item'>Gestion de redes</li>
            <li className='about-list-item'>Consultoria</li>
            <li className='about-list-item'>Publicidad en medios sociales</li>
            <li className='about-list-item'>Fotoproducto/Producción de fotos y videos</li>
            <li className='about-list-item'>Diseño/Branding</li>
            <li className='about-list-item'>Creación de reels, gift, filtros y carrusel</li>
            <li className='about-list-item'>Diseño de historias y post</li>
          </ul>
        </div>
    </article>
  )
}

export default About
