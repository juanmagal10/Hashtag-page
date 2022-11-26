import React from 'react'
import './SingleService.css';
import { useParams } from 'react-router-dom';



const SingleService = ({ servicios }) => {
    const servicioId = useParams().servicio;
    

    const servicio = servicios.filter(
        (servicio) => servicio.id === servicioId)
  console.log(servicio)
  
   const {nombre, descripcion, img}=servicio[0]

  return (
    <div className='single-service-container'>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <img src={img} alt="img-servicio" />
        <h2 className='paginacion'>{servicio.nombre}</h2>
          
    </div>
  )
}

export default SingleService
