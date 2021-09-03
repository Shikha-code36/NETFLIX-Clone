import React from 'react';
import {imageBaseURL} from "../../axios";
import {useTrailerID} from "../../hooks/useTrailerID";
import YouTubeVideo from "../youTubeVideo/YouTubeVideo";
import styles from "./styles/MovieCard.module.css";

function MovieCard({movie}) {
    let [trailerID, setTrailerId] = useTrailerID();

    const playVideo = () => {
        setTrailerId(movie)
    }
    return (
        <>
        <div className={styles.movie}>
              <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.title} onClick={playVideo}/>
              <p>{movie.title}</p>
              <div className={styles.movie__content}>
                  <p>Ratings: {movie.vote_average}</p>
                 <button onClick={playVideo} className={styles.playBtn}>{trailerID ? "Pause" : "Play"}</button>
              </div>
        </div>
        {trailerID && <YouTubeVideo trailerID={trailerID}/>}
        </>
    )
}

export default MovieCard;
