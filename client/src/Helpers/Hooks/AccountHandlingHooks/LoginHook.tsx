import React, {useState} from 'react'

const LoginHook = () => {
    const [loginDetails,
        setLoginDetails] = useState({email: '', password: ''})

    const handleSubmit = (e : React.ChangeEvent < HTMLInputElement >) => {
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: e.target.value
        })

    }
    const resetForm = (all ?: boolean) => {
        setLoginDetails({email: all ? '' : loginDetails.email, password: ''})
    }
    return {loginDetails, resetForm, handleSubmit}
}

export default LoginHook