import React, { useState } from 'react'
import logo from '../../assets/logo-blanco.png'
import './Header.css'
import { FaBars } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
    const [showAside, setShowAside] = useState(false)
    
    const showAsideFunction = () => {
        setShowAside(!showAside)
    }

    return (
      <>
      <div className={showAside?'modal':'modal-off'} onClick={showAsideFunction}></div>
        <header className='header'>
          {/* <div className='filler-div'></div> */}
          <div className="logo-container">
              <HashLink to='/#inicio'><img src={logo} alt="logo" className='logo'/></HashLink>
          </div>
          <div className="navbar-container">
              <nav className='navbar'>
                  <ul className='list-items'>
                            <li><HashLink to='/#about' style={{ textDecoration: 'none', color:'var(--amarillo)' }}>Sobre nosotros</HashLink></li>
                            <li><HashLink to='/#servicios' style={{ textDecoration: 'none', color:'var(--amarillo)' }}>Servicios</HashLink></li>
                            <li><HashLink to='/#contacto' style={{ textDecoration: 'none', color:'var(--amarillo)' }}>Contacto</HashLink></li>
                            <li><HashLink to='/' style={{ textDecoration: 'none', color:'var(--amarillo)' }}>Clientes</HashLink></li>
       
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
                            <li className='aside-item'>
                                <HashLink to='/#about'
                                    style={{
                                        textDecoration: 'none',
                                        color: 'var(--amarillo)',
                                        fontSize: '26px',
                                        transitionDuration: '.4s'
                                    }}>Sobre nosotros</HashLink> 
                            </li>
                            <li className='aside-item'>
                                <HashLink to='/#servicios'
                                    style={{
                                        textDecoration: 'none',
                                        color: 'var(--amarillo)',
                                        fontSize: '26px',
                                        transitionDuration: '.4s'
                                    }}>Servicios</HashLink> 
                            </li>
                            <li className='aside-item'>
                                <HashLink to='/#contacto'
                                    style={{
                                        textDecoration: 'none',
                                        color: 'var(--amarillo)',
                                        fontSize: '26px',
                                        transitionDuration: '.4s'
                                    }}>Contacto</HashLink> 
                            </li>
                            <li className='aside-item'>
                                <HashLink to='/'
                                    style={{
                                        textDecoration: 'none',
                                        color: 'var(--amarillo)',
                                        fontSize: '26px',
                                        transitionAll: '.4s'
                                    }}>Clientes</HashLink>
                            </li>
                  </ul>
              </nav>
          </div>
    </header>
      </>
  )
}

export default Header
