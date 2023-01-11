import { Sequelize } from 'sequelize'

const db_sqlite = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
})
//funcion unicamente para comprobar la coneccion
export const db_seqlise_Conect = async () => {
    await db_sqlite.authenticate()
    //await db_sqlite.sync({ force: true })
}

export default db_sqlite
