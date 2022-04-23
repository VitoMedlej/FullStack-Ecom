import { useState } from "react"
import { useDispatch } from "react-redux"
import { saveUser } from "../../../Redux/Slices/UserSlice"

interface IuserDetails {
    password : string,
    email : string
}
export type Results = {
    message : string,
    user ?: {
        username : string,
        email : string,
        id : string
        token : string
    }

}


const ValidateAccountHook = () => {
    const dispatch = useDispatch()

    const [isLoading ,setLoading] = useState(false)
    const [results ,setResults] = useState<Results>()
    const [statusCode ,setStatusCode] = useState<number | string>()
    const ValidateAccount = async(userDetails : IuserDetails) => {

        try {
            setLoading(true)
            const request = await fetch('https://el-vito.herokuapp.com/account/login', {
                method: 'POST',
                headers: {

                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...userDetails
                })
            })
            const res = await request.json()
         
            setStatusCode(request.status);
            
            setResults(res);
            dispatch(saveUser(res.user));
            if (res.user) localStorage.setItem('user', JSON.stringify(res.user))
            setLoading(false)
  
            return request.status
        } catch (err) {
            setLoading(false)
            console.log(err);

        }
    }
    return {ValidateAccount ,setResults ,statusCode ,results ,isLoading}

}

export default ValidateAccountHook