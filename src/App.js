import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieHeading from './components/MovieHeading';

const App = () => {
  const [movies, setMovies] = useState([]);	
  const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async () => {
  const url = "http://www.omdbapi.com/?s=One Piece&apikey=f0d25acb"

  const response = await fetch(url);
  const responseJson = await response.json();

  console.log(responseJson);
  setMovies(responseJson.Search);
};

useEffect(()=>{
  getMovieRequest();
}, []);

  return (
    <div className='container-fluid movie-app'>
      <div classname='row'>
        <MovieHeading />
      </div>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
