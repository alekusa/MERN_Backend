import Movie from './models/movie.model'

//crear en masa de Peliculas
const fillMovie = await Movie.bulkCreate([
    { title: 'Pelicula 1', calification: 2, picture: ' http://img.jpg' },
    { title: 'Pelicula 2', calification: 3, picture: ' http://img.jpg' },
    { title: 'Pelicula 3', calification: 3, picture: ' http://img.jpg' },
    { title: 'Pelicula 4', calification: 3, picture: ' http://img.jpg' },
    { title: 'Pelicula 5', calification: 3, picture: ' http://img.jpg' }
])
