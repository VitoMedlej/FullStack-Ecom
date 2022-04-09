import {useState} from "react"
import {useDispatch} from "react-redux";
import {saveUser} from "../../../Redux/Slices/UserSlice";
import {Results} from './ValidateAccountHook';

interface IuserDetails {
    username : string,
    password : string,
    email : string
}

const CreateAccountHook = () => {
    const [isLoading,
        setLoading] = useState(false)
    const [results,
        setResults] = useState < Results > ()
    const [statusCode,
        setStatusCode] = useState < number | string > ()
    const dispatch = useDispatch()
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
            const res = await request.json()
            setStatusCode(request.status);

            setResults(res);
            dispatch(saveUser(res.user))
            localStorage.setItem('user', JSON.stringify(res.user))
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.log(err);

        }
    }
    return {CreateAccount, setResults, statusCode, results, isLoading}

}

export default CreateAccountHook