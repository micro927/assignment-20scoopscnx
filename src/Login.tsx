import React from 'react'
import FormLogin from './components/FormLogin'
import 'twin.macro'

function Login() {
    return (
        <div tw='flex flex-col w-full h-screen container mt-10 mx-auto p-2 xl:px-60'>
            <div tw='bg-white flex flex-col w-full container border rounded-3xl px-8 py-5 shadow-lg'>
                <div>
                <p tw='text-4xl font-bold text-sky-800 text-center'>Please Login</p>
                <FormLogin />
                </div>
            </div>
        </div>
    )
}

export default Login
