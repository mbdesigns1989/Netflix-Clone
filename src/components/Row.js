import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from '../axios';


const Row = ({ title, fetchUrl, isLargeRow = false }) => {

    const [movies, setMovies] = useState([]);

    const base_Url = "https://image.tmdb.org/t/p/original/";


    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(fetchUrl)
            setMovies(requests.data.results)
            return requests
        }

        fetchData()
    }, [fetchUrl]);

    console.log(movies);


    return <div className='row'>
        <h2>{title}</h2>
        <div className="row__posters">
            {movies.map((movie) => (
                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (

                    <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                )
            ))}
        </div>
    </div>;
}


export default Row;