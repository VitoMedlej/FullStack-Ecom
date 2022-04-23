import { useState } from "react"
import { IformData } from "./CreateProductHook"

const GetFeaturedHook = () => {
    // const [categories,
    //     setCategories] = useState < ICateData[] > ([])
    const [isLoading,
        setLoading] = useState(false)
    const [FeaturedArray ,setFeaturedArray] = useState<IformData[]>()
        const GetFeaturedProducts = async() => {
            try {
                setLoading(true)
    
                const request = await fetch('https://elvito.herokuapp.com/')
                const results = await request.json()
                setFeaturedArray(results)
                setLoading(false)
    
            } catch (err) {
                setLoading(false)
                console.log(err);
    
            }
        }
        return {FeaturedArray,isLoading,GetFeaturedProducts}
}

export default GetFeaturedHook