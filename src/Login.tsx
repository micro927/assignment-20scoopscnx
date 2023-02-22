import { useState } from 'react'

import Form from './components/Form'
import 'twin.macro'

function Login() {
    return (
        <div tw='flex flex-col container mx-auto p-1 px-0 lg:px-32'>
            <p tw='text-3xl'>Please Login</p>
            <Form />
        </div>
    )
}

export default Login
