import { useState, useEffect } from 'react'
import {getGenres} from '../services/getGenres'
import { getTrendingMovies } from '../services/getTrendingMovies'
import '../styles/Form.css'

export const Form = () => {

    const [genres, setGenres] = useState([])
    // const [movies, setMovies] = useState([])

    useEffect(() => {

        async function loadGenres() {

            try {
                const genresList = await getGenres()
                setGenres(() => genresList)
            } catch (error) {
                console.log(error)
            }
        }

        // async function loadMovies() {

        //     try {
        //         const moviesList = await getMovies()
        //         setMovies(() => moviesList)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }

        loadGenres()
        // loadMovies()
    }, [])

    getTrendingMovies()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            
            const moviesList = await getTrendingMovies()
            
            const genreIds = moviesList.map(movies => movies.genre_ids)
            console.log(genreIds)
            const filteredMovies = genreIds.filter(id => id === e.target.key)
            console.log(filteredMovies)
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = async (e) => {
        console.log("Genre selected");
        await setGenres(() => ({ name: e.target.value }));
      }
    
    return (
        <form onSubmit={handleSubmit}>
            
            <select id="genres" onChange={handleChange}>
                {genres?.map(genre => (
                    <option value={genre.name} key={genre.id} >{genre.name}</option>
                ))}
            </select>

            {/* <div className='checkbox'>
                <input type="checkbox" name="movie" value="movie" />
                <input type="checkbox" name="tv" value="tv" />
            </div>         */}
            
            <div className="search">
                <input type="submit"  value="Procurar"  />
            </div>
        </form>
    )
}
