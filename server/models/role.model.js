import { DataTypes } from 'sequelize'
import db_sqlite from '../../db/db.sqlite.js'

const Role = db_sqlite.define('Role', {
    name: {
        type: DataTypes.STRING
    }
})

export default Role
