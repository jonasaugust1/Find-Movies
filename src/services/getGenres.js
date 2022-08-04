import {baseURL, requestParams} from '../config/Config'

export async function getGenres() {
    const genresEndpoint = 'genre/movie/list'
    const urlToFetch = baseURL + genresEndpoint + requestParams
  
    try{
      const response = await fetch(urlToFetch)
      if(response.ok){
        const jsonResponse = await response.json()
        const genres = jsonResponse.genres
        return genres
      }
    }catch(error){
      console.log(error)
    }
  }

