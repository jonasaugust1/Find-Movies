import { useState, useEffect } from "react"
import { getTrendingSeries } from "../services/getTrendingSeries"
import { Series } from "../components/Series"

export const TrendingSeries = () => {

    const [series, setSeries] = useState([])

    useEffect(() => {

        async function loadTrendingSeries() {

            try {
                const trendingSeries = await getTrendingSeries()
                setSeries(trendingSeries)
            } catch (error) {
                console.log(error)
            }
        }

        loadTrendingSeries()
    }, [])

    return (
        
        <main>
            <Series/> 
        </main>

    )
}