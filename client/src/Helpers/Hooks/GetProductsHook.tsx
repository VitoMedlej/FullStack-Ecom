import {useState} from "react"
import {IformData} from "./CreateProductHook"

const GetProductsHook = () => {
    const [products,
        setProducts] = useState < IformData[] > ([])
    const [isLoading,
        setLoading] = useState(false)
    const [error,
        setError] = useState('')
    const [pages,
        setPages] = useState(0)

    const GetDatafromDB = async(url : string) => {
        try {
          

            setLoading(true)

            const request = await fetch(`${url}`)
        

            const results = await request.json()
        

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
        setLoading,
      
    }
}

export default GetProductsHook