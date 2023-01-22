import { DataTypes } from 'sequelize'
import db_sqlite from '../../db/db.sqlite.js'

const Movie = db_sqlite.define(
    'Movie',
    {
        picture: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        calification: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5
            }
        },
        genre: {
            type: DataTypes.INTEGER
        }
    },
    {
        // Other model options go here
    }
)

export default Movie
