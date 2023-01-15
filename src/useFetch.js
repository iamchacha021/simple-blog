import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data, setData]= useState([])
    const [isPending, setIsPending]= useState(true)
    const [error, setError]= useState("")

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw error('Could not fetch data')
            }
            return res.json()
        })
        .then((fetchData)=>{
            setData(fetchData)
            setIsPending(false)
            setError("")
        })
        .catch((err)=>{
            setError(err.message)
            setIsPending(false)
        })

    },[url])




    return ( {data, isPending, error} );
}
 
export default useFetch;