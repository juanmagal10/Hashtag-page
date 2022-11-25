import {v4 as uuidv4} from 'uuid'

export const servicesData = [{
    servicio1: {
        nombre: 'fotografia',
        img: require('../fondo-principal.png'),
        descripcion: 'La resolución realista y el extraordinario enfoque automático con tecnología de inteligencia artificial de la α7 IV complementan una gama de funciones de primer nivel a la vanguardia de la tecnología de imagen.',
        id:uuidv4()
    },
    servicio2: {
        nombre: 'fotografia2',
        img: require('../fondo-principal.png'),
        descripcion: 'La resolución realista y el extraordinario enfoque automático con tecnología de inteligencia artificial de la α7 IV complementan una gama de funciones de primer nivel a la vanguardia de la tecnología de imagen.',
        id:uuidv4()
    }
}]