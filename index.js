const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
};

export const fetchPopularMovies = () =>
  fetch(`https://api.polygon.io/v2/aggs/ticker/O:TSLA230113C00015000/range/1/day/2023-01-01/2023-01-11?apiKey=YPYGsi2Npvnieiy03z8hwPaA7U5rMtDt`)
        .then(response => response.json())
        .then(data => console.log(data))
    .catch(err => console.error(err));

export const fetchMoviesByID = id =>
  fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    .then(response => response.json())
    .catch(err => console.error(err));