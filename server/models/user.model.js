import { DataTypes } from 'sequelize'
import db_sqlite from '../../db/db.sqlite.js'

const User = db_sqlite.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'Deve ser un Email Valido'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default User
