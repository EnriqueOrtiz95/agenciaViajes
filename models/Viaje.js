import Sequelize from "sequelize";
import db from '../config/db.js';
                        
                        //?dbname, 
export const Viaje = db.define('viajes',{
    //?IMPORTANTE ESPECIFICAR TODAS LAS COLUMNAS, DE LO CONTRARIO NO SE TRAERA LA FILA
    titulo: {
        type: Sequelize.STRING //?mysql is varchar, in sequelize is string
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
})