const { Character, Movie, Genre } = require('../config/database');


//El personaje pertenece a varias peliculas y/o series
//Crea una nueva base de datos character_movie
Character.belongsToMany(Movie, { as: "Movies", through: "character_movie" });
Movie.belongsToMany(Character, { as: "Characters", through: "character_movie" });



//La pelicula y/o serie tiene varios generos
Movie.belongsToMany(Genre, { as: "Genres", through: "movie_genre" });
Genre.belongsToMany(Movie, { as: "Movies", through: "movie_genre" });

//El personaje puede tener vario generos
Genre.belongsToMany(Character, { as: "Characters", through: "genre_character" });
Character.belongsToMany(Genre, { as: "Genres", through: "genre_character" });