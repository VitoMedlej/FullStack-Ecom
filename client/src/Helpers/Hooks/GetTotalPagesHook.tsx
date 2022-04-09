import {useState} from "react"
import {IformData} from "./CreateProductHook"

const GetTotalPagesHook = () => {

    const [isLoading,
        setLoading] = useState(false)
    const [error,
        setError] = useState('')
    const [pages,
        setPages] = useState(0)

    const GetPages = async(url : string) => {
        try {
            setLoading(true)
            
            const request = await fetch(`${url}`)
            const results = await request.json()
            setPages(results.TotalPages)
            setError('')
            setLoading(false)
        } catch (err) {
            setError(`${err}`)
            setLoading(false)
            console.log(err);
        }

    }

    return {
        isLoading ,
        pages,
        error,
        GetPages,
        setLoading
    }
}

export default GetTotalPagesHook