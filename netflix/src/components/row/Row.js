import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios, {requests, imageBaseURL} from "../../axios";
import styles from "./styles/Row.module.css";
import YouTubeVideo from "../youTubeVideo/YouTubeVideo";
import {useTrailerID} from "../../hooks/useTrailerID";

const linksObject = {
    "fetchNetflixOriginals": "/category/netflix_originals",
      "fetchTrending":  "/category/trending",
      "fetchTopRated" : "/category/top_rated",
      "fetchActionMovies": "/category/action",
      "fetchComedyMovies" : "/category/comedy",
      "fetchHorrorMovies" : "/category/horror",
      "fetchRomanceMovies" : "/category/romance",
      "fetchDocumentaries" : "/category/documentaries"
}

function Row(props) {
    var [movies, setMovies] = useState([]);
    var [trailerID, setTrailerID] = useTrailerID();

    useEffect(() => {
        let isMounted = true;
        async function fetchMovies(){
            const res = await axios.get(requests[props.type]);
             if(isMounted) setMovies(res.data.results);
        }

        fetchMovies();
        
        return () => {isMounted = false};
    }, [])


    const handleClick = (movie) => {
        setTrailerID(movie);
        
    }

    return (
        <div className={styles.Row}>
            <Link to={linksObject[props.type]}> <h1>{props.genre}</h1> </Link>
            <div className={styles.Row_images}>
            {movies.map((movie) => {
                return <img src={`${imageBaseURL}${props.isLarge ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.title} key={movie.id} className={styles.Row_image} onClick={() => handleClick(movie)}
                            style={props.isLarge && {maxHeight: "350px"}}/>
            })}
            </div>
            {trailerID && <YouTubeVideo trailerID={trailerID}/>}
        </div>
    )
}

export default Row;
