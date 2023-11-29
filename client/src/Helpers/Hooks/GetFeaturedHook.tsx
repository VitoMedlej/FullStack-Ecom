import { useState } from "react";
import { IformData } from "./CreateProductHook";

const GetFeaturedHook = () => {
  
    const [isLoading,
        setLoading] = useState(false)
    const [FeaturedArray ,setFeaturedArray] = useState<IformData[]>()
        const GetFeaturedProducts = async() => {
            try {
                setLoading(true)
    
                const request = await fetch(`${process.env.REACT_APP_URL}`)
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