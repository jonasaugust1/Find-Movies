import { useEffect, useState } from 'react'
import heart from '../images/heart.svg'
import start from '../images/Star.svg'
import { imageURL } from '../services/getTrendingMovies'
import { getTrendingSeries } from '../services/getTrendingSeries'
import '../styles/Cards.css'

export const Series = (props) => {

    const [series, setSeries] = useState([])
    console.log(series)

    useEffect(() => {

        async function loadTrendingSeries() {

            try {
                const trendingSeries = await getTrendingSeries()
                setSeries(() => trendingSeries)
            } catch (error) {
                console.log(error)
            }
        }

        loadTrendingSeries()
    }, [])

    return (
        <>
            {series.map(serie => (

                <section className="card" key={serie.id}>
                    <img src={imageURL + serie.backdrop_path} alt="" />
                    <div className="movie-name">
                        <h4>
                            {serie.name}
                        </h4>
                        <img src={start} alt="Estrela" />
                        <span>{(serie.vote_average).toFixed(1)}</span>
                        <img src={heart} alt="Coração" />
                        <span>Favoritar</span>
                    </div>
                    
                    <div className="sinopse">
                        <p>{serie.overview}</p>
                    </div>
                </section>
                
            ))}
        </>               
            
    )
}