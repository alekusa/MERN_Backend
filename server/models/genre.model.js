import { DataTypes } from 'sequelize'
import db_sqlite from '../../db/db.sqlite.js'

const Genre = db_sqlite.define(
    'Genre',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING
        }
    },
    {}
)
export default Genre
