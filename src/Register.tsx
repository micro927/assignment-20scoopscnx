import React from 'react'
import 'twin.macro'
import FormRegister from './components/FormRegister'

function Register() {
    return (
        <div tw='flex flex-col container mx-auto p-1 px-0 lg:px-32'>
            <p tw='text-3xl'>Please Enter your Information</p>
            <FormRegister />
        </div>
    )
}

export default Register
