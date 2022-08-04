import { baseURL, requestParams } from "../config/Config"

export const getTrendingMovies = async () => {
  const trendingMoviesEndpoint = 'trending/movie/week'
  const urlToFetch = baseURL + trendingMoviesEndpoint + requestParams

  try{
    const response = await fetch(urlToFetch)
    if(response.ok){
      const jsonResponse = await response.json()
      const trendingMovies = jsonResponse.results
      return trendingMovies
    }
  }catch(error) {
    console.log(error)
  }
}

export const imageURL = 'https://image.tmdb.org/t/p/original'