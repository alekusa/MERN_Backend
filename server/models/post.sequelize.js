import { DataTypes } from 'sequelize'
import db_sqlite from '../../db/db.sqlite.js'

const Post_sqlite = db_sqlite.define(
    'Post_sqlite',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING
        }
    },
    {
        //other model options go here
    }
)

export default Post_sqlite
