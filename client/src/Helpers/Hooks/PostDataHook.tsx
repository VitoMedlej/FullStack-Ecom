import { useState } from "react";
import { IformData } from "./CreateProductHook";

const PostDataHook = () => {

    const [isLoading ,setLoading] = useState(false)
    const [results,setResults] = useState('')
    const PostDataToDB = async(data : IformData) => {
        try {
            setLoading(true)
            const response = await fetch(' http://localhost:9000/dashboard/add-products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...data
                })
            })            
            setResults(`${response.status}`)


            setLoading(false)
        }
       
        
        catch (err) {
            setLoading(false)
            setResults(`400 ,${err}`)

            console.log(err);

        }
    }
    return {PostDataToDB ,results,isLoading} 
}

export default PostDataHook