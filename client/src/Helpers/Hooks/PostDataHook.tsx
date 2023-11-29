import { useState } from "react";
import { IformData } from "./CreateProductHook";

const PostDataHook = () => {

    const [isLoading ,setLoading] = useState(false)
    const [results,setResults] = useState('')
    const PostDataToDB = async(data : IformData ,token : string) => {
        try {
            setLoading(true)
            const response = await fetch(`${process.env.REACT_APP_URL}dashboard/add-products`, {
                method: 'POST',
                headers: {
                    'Authorization' : token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...data
                })
            })     
          
                   
            setResults(`${response.status}`)
            setLoading(false)
            return response.statusText
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