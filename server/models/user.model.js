import { DataTypes } from 'sequelize'
import db_sqlite from '../../db/db.sqlite.js'

const User = db_sqlite.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Deve ser un Email Valido'
            }
        }
    },
    role: {
        type: DataTypes.INTEGER
    }
})

export default User
