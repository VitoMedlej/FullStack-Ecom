import {useState} from "react"
import {IformData} from "./CreateProductHook"

const GetSingleProductHook = () => {
    const [isLoading,
        setLoading] = useState(false)
    const [data,
        setData] = useState < IformData[] > ()
    const GetProductById = async(category : string, id : string) => {
        try {
            setLoading(true)
            const result = await fetch(`http://localhost:9000/category/${category}/products/${id}`)
            const data = await result.json()
            setTimeout(() => {
                
                setData(data)
                setLoading(false)
            }, 3000);

        } catch (err) {
            setLoading(false)
            console.log(err);

        }
    }
    return {GetProductById, data, isLoading}
}

export default GetSingleProductHook