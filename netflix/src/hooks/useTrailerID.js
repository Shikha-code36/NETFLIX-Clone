import {useState} from "react";
import movieTrailer from "movie-trailer";

export function useTrailerID(){
    var [trailerID, setState] = useState("");
     
    function setTrailerID(movie){
        if(trailerID){
            return setState("");
        }
            
        movieTrailer(movie.name || movie.title)
                    .then((res) => {
                        var urlParams = new URL(res).search;
                        var paramsObj = new URLSearchParams(urlParams);
                        setState(paramsObj.get("v"));
                    })
                    .catch((err) => {
                        console.log(err);
                    })
    }

     return [trailerID, setTrailerID]

}