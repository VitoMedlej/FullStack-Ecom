import { useState } from "react"

interface IuserDetails {
    username : string,
    password : string,
    email : string
}
type Results = {
    message : string
}


const CreateAccountHook = () => {
    const [isLoading ,setLoading] = useState(false)
    const [results ,setResults] = useState<Results>()
    const [statusCode ,setStatusCode] = useState<number | string>()
    const CreateAccount = async(userDetails : IuserDetails) => {

        try {
            setLoading(true)
            const request = await fetch('http://localhost:9000/account/register', {
                method: 'POST',
                headers: {

                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...userDetails
                })
            })
            const results = await request.json()
            setStatusCode(request.status);
            
            setResults(results);
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.log(err);

        }
    }
    return {CreateAccount ,setResults ,statusCode ,results ,isLoading}

}

export default CreateAccountHook