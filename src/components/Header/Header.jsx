import React from 'react'
import logo from '../../assets/descarga.png'
import './Header.css'

const Header = () => {
  return (
      <header className='header'>
          <div></div>
          <div className="logo-container">
              <img src={logo} alt="logo" />
          </div>
          <div className="navbar-container">
              <nav className='navbar'>
                  <ul className='list-items'>
                      <li>Sobre nosotros</li>
                      <li>Proyectos</li>
                      <li>Areas</li>
                      <li>Personal</li>
                  </ul>
              </nav>
          </div>
    </header>
  )
}

export default Header
