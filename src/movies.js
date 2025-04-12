// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}

const directors = getAllDirectors(movies);
console.log(directors.length);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  const totalScore = moviesArray.reduce((accumulator, movie) => {
    return accumulator + (movie.score || 0); //si la peli tiene score, lo sumamos; sino, sumamos 0
  }, 0);
  const averageScore = totalScore / moviesArray.length;

  return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  ); //solo se cuentan las pelis del género "Drama". "Drama" está en un array, no un string, por eso hay que añadir .includes
  if (!dramaMovies.length) {
    //si el array de pelis de "Drama" está vacío, se devuelve 0
    return 0;
  }
  if (dramaMovies.length === 1) {
    return dramaMovies[0].score; //se devuelve el score si solo hay una peli de "Drama"
  }
  const totalScore = dramaMovies.reduce(
    (accumulator, movie) => accumulator + movie.score, //se suma el score de todas las pelis de "Drama" del array
    0
  );
  const averageScore = totalScore / dramaMovies.length; //se calcula la media de los scores entre el número de pelis de "Drama" del array
  return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = [...moviesArray]; //se crea una copia del array para no modificarlo
  newArray.sort((a, b) => {
    if (a.year === b.year) {
      // Si los años son iguales, ordenar por título
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year; // Si los años son diferentes, ordenar por año
  });

  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArray = [...moviesArray]; //se crea una copia del array para no modificarlo
  const movieTitles = newArray.map((movie) => movie.title); //se obtienen los títulos de las pelis
  movieTitles.sort(); //se ordenan los títulos alfabéticamente
  return movieTitles.slice(0, 20); //se devuelven los primeros 20 títulos
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
