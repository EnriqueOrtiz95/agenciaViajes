import {Viaje} from '../models/Viaje.js';   
import {Testimonial} from '../models/Testimoniales.js'

const paginaInicio = async (req, res) => { //req --> lo que enviamos, res --> recibimos

    //?CONSULTAR 3 VIAJES DEL MODELO VIAJE
    const promiseDB = [];

    promiseDB.push(Viaje.findAll({ limit: 3}));
    promiseDB.push(Testimonial.findAll({ limit: 3}));
    try {
        //?USAMOS PROMISE.ALL PARA ARRANCAR LAS DOS PROMISES AL MISMO TIEMPO
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => { //req --> lo que enviamos, res --> recibimos
    // const viajes = 'Viaje a alemania';
    
    res.render('nosotros', {
        // viajes
        pagina: 'Nosotros'
    }); //? :o --> ACCEDIENDO A nosotros.pug
}

const paginaViajes = async (req, res) => { //req --> lo que enviamos, res --> recibimos

    //?CONSULTAR DB (PARA ESO DEBEMOS HACER ESTA FUNCION ASYNCRONA)
    const viajes = await Viaje.findAll();
    console.log(viajes);

    res.render('viajes', { //?viajes.pug
        pagina: 'Proximos viajes',
        viajes: viajes
    });
}

const paginaTestimoniales = async (req, res) => { //req --> lo que enviamos, res --> recibimos

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
}

//?MUESTRA UN VIAJE POR SU SLUG
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne( {where : { slug: slug }} );
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje
}