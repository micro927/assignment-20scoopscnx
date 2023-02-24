import React from 'react'
import 'twin.macro'
import FormRegister from './components/FormRegister'

function Register() {
    return (
        <div tw='flex flex-col w-full h-screen container mt-10 mx-auto p-2 xl:px-60'>
            <div tw='bg-white flex flex-col w-full container border rounded-3xl px-10 py-5 shadow-lg'>
                <div>
                    <p tw='text-4xl font-bold text-sky-800 text-center'>Please enter your Information</p>
                    <FormRegister />
                </div>
            </div>
        </div>
    )
}

export default Register
