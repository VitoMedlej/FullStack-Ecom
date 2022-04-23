import {useState} from "react"
import {IformData} from "./CreateProductHook"

const GetSingleProductHook = () => {
    const [isLoading,
        setLoading] = useState(false)
    const [data,
        setData] = useState < IformData[] > ()
    const [error,setError] = useState('')
    const GetProductById = async(category : string, id : string) => {
        try {
            setLoading(true)
            const result = await fetch(`https://el-vito.herokuapp.com/category/${category}/products/${id}`)
            const data = await result.json()
                
            setData(data)
            setLoading(false)
            return data

        } catch (err) {
            setError(`${err}`)
            setLoading(false)
            console.log(err);

        }
    }
    return {GetProductById, error, data, isLoading}
}

export default GetSingleProductHook