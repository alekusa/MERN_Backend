import { Sequelize } from 'sequelize'
import { db_name_mysql, PASS, USER } from '../server/config/config.js'

export const sequelize = new Sequelize(db_name_mysql, USER, PASS, {
    host: 'us-east.connect.psdb.cloud',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true
        }
    }
})

//* Funcion de comprovacion *//
export async function connect_mysql() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}
//* funcion de creacion de tablas *//
export async function CrearTablas() {
    try {
        await sequelize.sync({ force: false })
        console.log(
            'Create tables successfully_ modiefie established force: in true'
        )
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}
