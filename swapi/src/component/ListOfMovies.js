import { useState, useEffect } from "react";

export default function ListOfMovies(props){
    const [moviesURL,setMoviesURL] = useState([])
    const [movie,setMovie] = useState([])
    const [lastMovie,setLastMovie] = useState("")
    useEffect(()=>{
        fetch(props.url)
            .then(res=>res.json())
            .then((json)=>{
                json.films.map(movie=>{
                    setMoviesURL(prevMovie=>[movie,...prevMovie])
                })
            })
        return setMoviesURL([]),setLastMovie("")
    },[props.url])
    useEffect(()=>{
        moviesURL.map(url=>{
            fetch(url)
                .then(res=>res.json())
                .then((json)=>{
                    setMovie(prevMovies=>[{movieName:json.title,year:json.release_date.substring(0,4)},...prevMovies])
                })
        })
        
        return setMovie([])
    },[moviesURL])
    useEffect(()=>{
        if(movie.length>0){
            let result = movie.reduce((max, obj) => (max.year > obj.year) ? max : obj)
            setLastMovie(`${result.movieName} - ${result.year}`)
        }
    },[movie])

    return(
        <div>
            <div className="m-2 border border-dark">
                {movie.map(movie=><h1 className="p-s" key={movie.movieName}>{movie.movieName}</h1>)}
            </div>
            <div className="p-3">
                <h2>Name/Year Last Movie</h2>
                <h1><u>{lastMovie}</u></h1>
            </div>
        </div>
    )
}