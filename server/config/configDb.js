import Movie from '../models/movie.model.js'
import Genre from '../models/genre.model.js'
import db_sqlite from '../../db/db.sqlite.js'
//insertar datos en masa. para tablas movie -> Peliculas
class dbconfig {
    async conf() {
        console.log('insertando datos en sqlite + claveForanea en genre')
        Movie.belongsTo(Genre, { foreignKey: 'genre' })
        await db_sqlite.sync({ force: true })
        await Genre.bulkCreate([
            { name: 'genero 1', picture: 'http://img_1,jpg' },
            { name: 'genero 2', picture: 'http://img_2,jpg' },
            { name: 'genero 3', picture: 'http://img_3,jpg' }
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
}

export default dbconfig
