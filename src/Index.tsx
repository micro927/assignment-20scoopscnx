import React from 'react'
import 'twin.macro'
import { logout } from './utils/authFunction'
import Button from './components/Button'
function Index() {
    const { firstName, lastName, gender, address, postCode, telPhoneNumber } = JSON.parse(sessionStorage.getItem('assignment') ?? '{}')
    return (
        <div tw='w-full h-screen flex  p-1 px-0 lg:px-32'>
            <div tw='flex flex-col container mx-auto justify-center items-center'>
                <div tw='text-2xl'>
                    Hi, {firstName} {lastName} ({gender})
                </div>
                <div tw='text-lg'>
                    {address} {postCode}
                </div>
                <div tw='text-lg'>
                    {telPhoneNumber}
                </div>
                <div tw='mt-8'>
                    <Button onClick={logout}> Logout</Button>
                </div>
            </div>
        </div>
    )
}

export default Index
