import React, { useState } from 'react';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([		{
    "Title": "One Piece",
    "Year": "1999–",
    "imdbID": "tt0388629",
    "Type": "series",
    "Poster":
     "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    "Title": "One Piece Film Z",
    "Year": "2012",
    "imdbID": "tt2375379",
    "Type": "movie",
    "Poster":
     "https://m.media-amazon.com/images/M/MV5BNWEyZTYzZDYtMzQ0Zi00MjMzLThjMWUtNzYyMzdiZDk0MzBiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    "Title": "One Piece: Stampede",
    "Year": "2019",
    "imdbID": "tt9430698",
    "Type": "movie",
    "Poster":
     "https://m.media-amazon.com/images/M/MV5BM2MxY2QwYTAtMDM1My00MTc0LWEwZjktMDdjODY2NWJiNDg2XkEyXkFqcGdeQXVyODY3ODQ2MTk@._V1_SX300.jpg"
  },
  {
    "Title": "One Piece: Strong World",
    "Year": "2009",
    "imdbID": "tt1485763",
    "Type": "movie",
    "Poster":
     "https://m.media-amazon.com/images/M/MV5BMmIyNGQ3NmEtNGZkNi00MDFhLThhOTMtYjEyN2U1OTc1MjBlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    "Title": "One Piece Film: Gold",
    "Year": "2016",
    "imdbID": "tt5251328",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzBiMTlhNTAtNDc4Yi00M2FiLWE3ODMtNzgwNWI3ZGFhYjNkXkEyXkFqcGdeQXVyMjQ5NjMxNDA@._V1_SX300.jpg"
  },]);
  return (
    <div>
      <MovieList movies = {movies} />
    </div>
  );
};

export default App;
