import React, { useState } from 'react'
import logo from '../../assets/descarga.png'
import './Header.css'
import {FaBars} from 'react-icons/fa'

const Header = () => {
    const [showAside, setShowAside] = useState(false)
    
    const showAsideFunction = () => {
        setShowAside(!showAside)
    }

    return (
      <>
      <div className={showAside?'modal':'modal-off'} onClick={showAsideFunction}></div>
        <header className='header'>
          <div className='filler-div'></div>
          <div className="logo-container">
              <img src={logo} alt="logo" />
          </div>
          <div className="navbar-container">
              <nav className='navbar'>
                  <ul className='list-items'>
                      <li>Sobre nosotros</li>
                      <li>Proyectos</li>
                      <li>Servicios</li>
                      <li>Personal</li>
                  </ul>
              </nav>

             <div className="open-asside-btn" >
              <FaBars className='show-aside-icon' onClick={showAsideFunction}/>
            </div>
          </div>

          { /*aside navbar*/ }

          <div className={showAside?'aside-navbar-container':'aside-navbar-container-hidden'}>
              <nav className='aside-navbar'>
                  <ul className='list-aside-items'>
                      <li className={showAside?null:'aside-nav-container-hidden'}>Sobre nosotros</li>
                      <li className={showAside?null:'aside-nav-container-hidden'}>Proyectos</li>
                      <li className={showAside?null:'aside-nav-container-hidden'}>Servicios</li>
                      <li className={showAside?null:'aside-nav-container-hidden'}>Personal</li>
                  </ul>
              </nav>
          </div>
    </header>
      </>
  )
}

export default Header
