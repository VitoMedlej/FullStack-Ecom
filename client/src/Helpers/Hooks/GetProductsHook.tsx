import {useState} from "react"
import {IformData} from "./CreateProductHook"

const GetProductsHook = () => {
    const [products,
        setProducts] = useState < IformData[] > ([])
    const [isLoading,
        setLoading] = useState(false)
    const [error,
        setError] = useState('')

    const GetDatafromDB = async(url : string) => {
        try {
            setLoading(true)

            const request = await fetch(`http://localhost:9000${url}`)
            const results = await request.json()
            setProducts(results)
            setLoading(false)
            setError('')
        } catch (err) {
            setError(`${err}`)
            setLoading(false)

            console.log(err);

        }

    }

    return {
        products,
        isLoading,
        error,
        setProducts,
        GetDatafromDB,
        setLoading
    }
}

export default GetProductsHook