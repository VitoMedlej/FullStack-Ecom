import {useState} from "react"
import { IformData } from "../CreateProductHook"

const GetProductsBySearch = () => {
   
    const [products,
        setProducts] = useState < IformData[] > ([])
    const [isLoading,
        setLoading] = useState(false)
    const [error,
        setError] = useState<string  >()

    const HandleSearch = async(e : React.ChangeEvent < HTMLInputElement >,
         setQuery : React.Dispatch < React.SetStateAction < string >>) => {
    const searchKeyword = e.target.value
    try {
        setQuery(searchKeyword)

        if (searchKeyword.length > 2) {
            setLoading(true)
            setError('')
            const request = await fetch(`https://el-vito.herokuapp.com/search/?query=${searchKeyword}`)
            const results = await request.json()
            if (results && results.length > 0) {
                setProducts(results);
                setLoading(false)
                return
            }
            setLoading(false)
            setError('No products found!')
            setProducts([])
        }
    } catch (err) {
        setProducts([])
        setLoading(false)
        setError(`${err}`)

    

    }
}
return {HandleSearch  ,products,isLoading ,error}
}

export default GetProductsBySearch