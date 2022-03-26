import React, {useState} from 'react'

const RegisterHook = () => {
    const [userDetails,
        setuserDetails] = useState({username: '', email: '', password: ''})

    const handleSubmit = (e : React.ChangeEvent < HTMLInputElement >) => {
        setuserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }
    return {userDetails, handleSubmit}
}

export default RegisterHook
