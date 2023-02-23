import React from 'react'
import FormLogin from './components/FormLogin'
import 'twin.macro'

function Login() {
    return (
        <div tw='flex flex-col container mx-auto p-1 px-0 lg:px-32'>
            <p tw='text-3xl'>Please Login</p>
            <FormLogin />
        </div>
    )
}

export default Login
