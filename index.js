// const express = require('express');
import router from './routes/index.js';
import express from 'express';
import db from './config/db.js';
// import dotenv from 'dotenv';

// dotenv.config(); //?LEER LAS ENVIRONMENT VARIABLES (ENV) DEL .env

console.log(process.env.DB_HOST)

const app = express();

//?CONECTAR LA DB
db.authenticate()
    .then(() => console.log('DB conectada'))
    .catch(error => console.log(error));

//?DEFINIR PUERTO
          //?VARIABLE DE ENTORNO
const port = process.env.PORT || 4000;

//?HABILITAR PUG
app.set('view engine', 'pug');

//?OBTENER EL AÑO ACTUAL
app.use( (req,res, next) => {
    // console.log(res);
    //?locals son como variables internas de express
    // res.locals.unaVariable = 'Una Nueva Variable';
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    // console.log(res.locals);
    
    
    next();
})

//?AGREGAR BODY-PARSER PARA LEER LOS DATOS DEL FORM(EN EL CORE DE EXPRESS)
app.use(express.urlencoded({extended: true}))

//?DEFINIR LA CARPETA public
app.use(express.static('public'));

//?AGREGAR ROUTER
//?>>> AGREGAR DESDE MAIN TODOS LOS ROUTER
app.use('/', router);

app.listen( port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})