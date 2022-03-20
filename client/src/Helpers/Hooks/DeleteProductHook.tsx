import { useState } from "react"

const DeleteProductHook = () => {

    const [isReqLoading,
        setReqLoading] = useState(false)
    const [results,setResults] = useState('')
    const DeleteProductById = async(id : string) => {

        try {

            setReqLoading(true)
            const request = await fetch(`http://localhost:9000/dashboard/products/${id}`, 
            {method: 'DELETE'})
            const response = await request
            setResults(`${response}`)
            setReqLoading(false)
            

        } catch (err) {
            setReqLoading(false)
            console.log(err);

        }
    }
    return {DeleteProductById ,isReqLoading  ,results}
}

export default DeleteProductHook