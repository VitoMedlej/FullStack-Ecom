import {useState} from "react"

const DeleteProductHook = () => {

    const [isReqLoading,
        setReqLoading] = useState(false)
    const [results,
        setResults] = useState('')
    const DeleteProductById = async(id : string, token : string) => {

        try {

            setReqLoading(true)
            const request = await fetch(`${process.env.REACT_APP_URL}dashboard/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': token
                }
            })
            const response = await request
            
            setResults(`${response}`)
            setReqLoading(false)
            return response.status

        } catch (err) {
            setReqLoading(false)
            console.log(err);

        }
    }
    return {DeleteProductById, isReqLoading, results}
}

export default DeleteProductHook