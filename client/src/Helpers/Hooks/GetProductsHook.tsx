import {useState} from "react"
import {IformData} from "./CreateProductHook"

const GetProductsHook = () => {
    const [products,
        setProducts] = useState < IformData[] > ([])
    const [isLoading,
        setLoading] = useState(false)
    const [error,
        setError] = useState('')
    const [pages,setPages] = useState(0)

    const GetDatafromDB = async(url : string ,page ?: number) => {
        try {
            setLoading(true)

            const request = await fetch(`http://localhost:9000${url}?page=${page || 0}`)
            const results = await request.json()
            console.log('results: ', results);
            setProducts(results.products)
            setPages(results.TotalPages)
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
        pages,
        error,
        setProducts,
        GetDatafromDB,
        setLoading
    }
}

export default GetProductsHook