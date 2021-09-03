import React, {useEffect, useState} from 'react'
import Nav from "../../components/navbar/Nav";
import axios, {requests} from "../../axios";
import styles from "./styles/CategoryPage.module.css";
import MovieCard from "../../components/moviecard/MovieCard";

function CategoryPage(props) {
     let [movies, setMovies] = useState([]);
     let [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchMovies(){
            try{
                const res = await axios.get(`${requests[props.type]}&page=${page}`);
            
                setMovies([...movies, ...res.data.results]);
            } catch(err){
                console.log(err)
            }
        }

        fetchMovies();
    }, [page])

    function handleScroll(e){
        var {scrollTop, clientHeight, scrollHeight} = e.currentTarget;
        
        var scrolledToBottom
         = Math.floor(scrollHeight - scrollTop) === clientHeight || Math.ceil(scrollHeight - scrollTop) === clientHeight;

        if(scrolledToBottom){
           
            setPage(page+1);

        }
    }

    return (
        <div className={styles.CategoryPage}>
            <Nav/>
            <h1 className={styles.category}>{props.genre}</h1>
            <div className={styles.movies__container} onScroll={handleScroll}>
                {movies && movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie}/>
                })}
            </div>
        </div>
    )
}

export default CategoryPage
