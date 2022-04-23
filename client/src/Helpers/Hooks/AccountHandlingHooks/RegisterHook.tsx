import React, {useState} from 'react'

const RegisterHook = () => {
    const defaultValue = {username: '', email: '', password: ''}
    const [userDetails,
        setuserDetails] = useState(defaultValue)

    const handleSubmit = (e : React.ChangeEvent < HTMLInputElement >) => {
        setuserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }
    const resetForm = () => {
        setuserDetails(defaultValue)
    }
    return {userDetails, resetForm, handleSubmit}
}

export default RegisterHook
