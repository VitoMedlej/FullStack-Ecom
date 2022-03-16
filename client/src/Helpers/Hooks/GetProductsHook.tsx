import { useState } from "react"
import { IformData } from "./CreateProductHook"



const GetProductsHook = () => {
    const [products,
        setProducts] = useState < IformData[] > ([])
    const [isLoading,
        setLoading] = useState(false)

       
    const GetDatafromDB = async(url : string) => {
        try {
            setLoading(true)

            const request = await fetch(`http://localhost:9000${url}`)
            const results = await request.json()
            setProducts(results)
            setLoading(false)

        } catch (err) {
            setLoading(false)

            console.log(err);

        }

    }

    return {products ,isLoading ,GetDatafromDB,setLoading}
}

export default GetProductsHook