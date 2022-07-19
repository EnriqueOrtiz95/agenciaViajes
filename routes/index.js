// const express = require('express');
import express from 'express';
import { paginaInicio, paginaNosotros, paginaTestimoniales, 
         paginaViajes, paginaDetalleViaje
         } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js'

const router = express.Router();

//!IT IS A ROUTER--> CONTROLLER SO WE WILL SEND IT TO controllers js file
// router.get('/', (req, res) => { //req --> lo que enviamos, res --> recibimos
//     res.render('inicio', {
//         pagina: 'Inicio'
//     });
// });
//?TO THIS NOW
router.get('/', paginaInicio);


router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;
