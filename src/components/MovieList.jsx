import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useState } from 'react';


const MovieCard =({movie}) => {
    return(
        <div className='col-lg-2 col-md-4 col-sm-6 mb-4'>
            <div className='card movie-card'>
                <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className='card-img-top'/>
                <div className='card-body'>
                    <h5 className='card-title'>{movie.title}</h5>
                    <p className='card-text'>{movie.overview}</p>
                </div>
            </div>
            </div>

    );
};

function MovieList() {
    const [movies,setMovies]=useState([])

useEffect(() => {
    const fetchMovies= async () =>{
        try{
            const response = await axios.get(
               " https://api.themoviedb.org/3/discover/movie?api_key=430c006648d5b74211daadea23d26834",
              
            );
            console.log(response.data.results);
            setMovies(response.data.results);
        }catch(error){
            console.error("Error Fetching data:",error);
        }
    };
    fetchMovies();

},[]);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                <div className="container">
                    <a className="navbar-brand text-white" href="/">🎬 Movie Explorer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">TV Shows</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    <div className='container mt-4'>
    <h2 className="text-center mb-4">🔥 Trending Movies</h2>
        <div className='row'>
            {movies.map((movie)=> (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>

    </div>
    </>
  )
}

export default MovieList