import Sequelize from 'sequelize';
import dotenv from 'dotenv/config'; //?UTILIZAR SIEMPRE ESTO DONDE SE VALLAN A UTILIZAR

                    //?dbname, username, pass
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql', //?can be as mysql as postgress
    define: {
        timestamps: false //?no crear filas ni columnas
    },
    //?sequelize config
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;