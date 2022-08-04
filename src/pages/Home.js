import { useState, useEffect } from "react"
import { getTrendingMovies } from "../services/getTrendingMovies"
import { Movies } from "../components/Movies"

export const Home = () => {

    const [movies, setMovies] = useState([])
    console.log(movies)

    useEffect(() => {

        async function loadTrendingMovies() {

            try {
                const trendingMovies = await getTrendingMovies()
                setMovies(trendingMovies)
            } catch (error) {
                console.log(error)
            }
        }

        loadTrendingMovies()
    }, [])

    return (
        
        <main>
            <Movies/> 
        </main>

    )
}