import Movie from '../models/movie.model.js'
import Genre from '../models/genre.model.js'
import User from '../models/user.model.js'
import Role from '../models/role.model.js'
import db_sqlite from '../../db/db.sqlite.js'

//insertar datos en masa. para tablas movie -> Peliculas
class dbconfig {
    async movieAndGenre() {
        console.log(
            'insertando datos en sqlite tablas Genre and Movie + claveForanea en genre'
        )
        //! Generando la clave foranea uno a muchos en la tabla Genre !//
        Movie.belongsTo(Genre, { foreignKey: 'genre' })
        //* VER Opcion force para que no elimine los registros de las demas tablas
        await db_sqlite.sync({ force: true })
        await Genre.bulkCreate([
            { name: 'accion', picture: 'http://img_Genre,jpg' },
            { name: 'terror', picture: 'http://img_Genre,jpg' },
            { name: 'grama', picture: 'http://img_genre,jpg' }
        ])
        await Movie.bulkCreate([
            {
                title: 'Pelicula 1',
                calification: 2,
                picture: ' http://img_1.jpg',
                genre: 2
            },
            {
                title: 'Pelicula 2',
                calification: 3,
                picture: ' http://img_2.jpg',
                genre: 2
            },
            {
                title: 'Pelicula 3',
                calification: 3,
                picture: ' http://img_3.jpg',
                genre: 2
            },
            {
                title: 'Pelicula 4',
                calification: 3,
                picture: ' http://img_4.jpg',
                genre: 2
            },
            {
                title: 'Pelicula 5',
                calification: 3,
                picture: ' http://img_5.jpg',
                genre: 2
            }
        ])
    }
    async userAndRole() {
        console.log('configurando tablas User and Role y su clave foranea')
        User.belongsTo(Role, { foreignKey: 'role' })
        await db_sqlite.sync({ force: true })
        const contadorRole = await Role.count()
        if (contadorRole > 0) return
        await Role.bulkCreate([
            { name: 'Users' },
            { name: 'Admin' },
            { name: 'Supervisor' }
        ])
        await User.bulkCreate([
            {
                username: 'Ale_1',
                password:
                    '$2a$10$iSZcelwM6sXS/V/e5WvEnu8APUCpXonffqMey0BruysXwzHagv/5K',
                email: 'ale_1',
                role: 1
            },
            {
                username: 'Ale_2',
                password:
                    '$2a$10$iSZcelwM6sXS/V/e5WvEnu8APUCpXonffqMey0BruysXwzHagv/5K',
                email: 'ale_2',
                role: 2
            },
            {
                username: 'Ale_3',
                password:
                    '$2a$10$iSZcelwM6sXS/V/e5WvEnu8APUCpXonffqMey0BruysXwzHagv/5K',
                email: 'ale_3',
                role: 1
            }
        ])
    }
}

export default dbconfig
