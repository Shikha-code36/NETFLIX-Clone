import React, {useEffect, useState} from 'react'
import { IoMdPlay, IoMdAdd } from 'react-icons/io';
import instance, {requests} from "../../axios";
import styles from "./styles/Header.module.css";
import {useTrailerID} from "../../hooks/useTrailerID";
import YouTubeVideo from "../youTubeVideo/YouTubeVideo";

const imageBaseURL = "https://image.tmdb.org/t/p/original";

function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "....";
    } else {
      return str;
    }
  }

function Header() {
    var [movie, setMovie] = useState({});
    var [trailerID, setTrailerID] = useTrailerID();

    useEffect(() => {
        let isMounted = true;
         async function fetchMovie(){
            var res = await instance.get(`${requests.fetchNetflixOriginals}&page=${Math.floor(Math.random() * 100)}`);
            var movies = res.data.results;
            var movie = movies[Math.floor(Math.random() * movies.length)];
             if(isMounted) setMovie(movie);
         }
         fetchMovie();

         return () => {isMounted = false};
    }, [])

    const playVideo = (movie) => {
      console.log(movie)
        setTrailerID(movie);
    }

    return (
      <>
        <header className={styles.Header} style={{backgroundImage: `url(${imageBaseURL}${movie.backdrop_path})`}}>
             <div className={styles.Header_contents}>
             <h1>{movie.name}</h1>
            <div className={styles.Header_btns}>
            <button onClick={() => playVideo(movie)}>
              <IoMdPlay className={styles.playIcon}/>{trailerID.length > 0 ? `Pause` : "Play"}
            </button>
               <button><IoMdAdd className={styles.addIcon}/> My List</button>
            </div>
             <p>{movie.overview && truncateString(movie.overview, 170)}</p>
             </div>
        </header>
        {trailerID && <YouTubeVideo trailerID={trailerID}/>}
      </>
    )
}

export default Header
