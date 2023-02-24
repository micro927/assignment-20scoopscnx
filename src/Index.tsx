import React from 'react'
import 'twin.macro'
import { logout } from './utils/authFunction'
import Button from './components/Button'
function Index() {
    const { firstName, lastName, gender, address, postCode, telPhoneNumber } = JSON.parse(sessionStorage.getItem('assignment') ?? '{}')
    return (
        <div tw='w-full h-screen container mt-10 mx-auto p-2 xl:px-60'>
            <div tw='bg-white flex flex-col w-full border rounded-2xl items-center p-10 text-sky-700 shadow-lg'>
                <div tw='text-4xl font-bold'>
                    Hello, {firstName} {lastName} ({gender})
                </div>
                <div tw='text-2xl mt-8 text-center'>
                    <p>{address} {postCode}</p>
                    <p>{telPhoneNumber}</p>
                </div>
                <div tw='mt-8 w-1/3'>
                    <Button onClick={logout} tw='w-full'> Logout </Button>
                </div>
            </div>
        </div>
    )
}

export default Index
