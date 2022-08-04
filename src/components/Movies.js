import { useEffect, useState } from 'react'
import heart from '../images/heart.svg'
import start from '../images/Star.svg'
import { getTrendingMovies, imageURL } from '../services/getTrendingMovies'
import '../styles/Movies.css'

export const Movies = (props) => {

    const [movies, setMovies] = useState([])
    console.log(movies)

    useEffect(() => {

        async function loadTrendingMovies() {

            try {
                const trendingMovies = await getTrendingMovies()
                setMovies(() => trendingMovies)
            } catch (error) {
                console.log(error)
            }
        }

        loadTrendingMovies()
    }, [])

    return (
        <>
            {movies.map(movie => (

                <section className="card" key={movie.id}>
                    <img src={imageURL + movie.backdrop_path} alt="" />
                    <div className="movie-name">
                        <h4>
                            {movie.title}
                        </h4>
                        <img src={start} alt="Estrela" />
                        <span>{(movie.vote_average).toFixed(1)}</span>
                        <img src={heart} alt="Coração" />
                        <span>Favoritar</span>
                    </div>
                    
                    <div className="sinopse">
                        <p>{movie.overview}</p>
                    </div>
                </section>
                
            ))}
        </>               
            
    )
}