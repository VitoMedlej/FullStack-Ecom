import React, {useState} from 'react'

const LoginHook = () => {
    const [loginDetails,
        setLoginDetails] = useState({email: '', password: ''})

    const handleSubmit = (e :React.ChangeEvent<HTMLInputElement> ) => {
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: e.target.value
        })
    }
    return {loginDetails, handleSubmit}
}

export default LoginHook