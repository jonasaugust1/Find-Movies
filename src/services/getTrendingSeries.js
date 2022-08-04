import { baseURL, requestParams } from "../config/Config"

export const getTrendingSeries = async () => {
  const trendingSeriesEndpoint = 'trending/tv/week'
  const urlToFetch = baseURL + trendingSeriesEndpoint + requestParams

  try{
    const response = await fetch(urlToFetch)
    if(response.ok){
      const jsonResponse = await response.json()
      const trendingSeries = jsonResponse.results
      return trendingSeries
    }
  }catch(error) {
    console.log(error)
  }
}