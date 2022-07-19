import Sequelize from "sequelize";
import db from '../config/db.js';
                        
                        //?dbname, 
export const Testimonial = db.define('testimoniales',{
    nombre: {
        type: Sequelize.STRING //?mysql is varchar, in sequelize is string
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})