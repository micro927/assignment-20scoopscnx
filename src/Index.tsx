import React from 'react'
import 'twin.macro'
import { useAuth } from './components/UserProvider'
import Button from './components/Button'
function Index() {
    const { loginInformation, logout } = useAuth()
    const { email, firstName, lastName, gender, address, postCode, telPhoneNumber } = loginInformation.userInformation ?? {}

    async function clickLogout() {
        logout()
    }

    return (
        <div tw='w-full h-screen container mt-10 mx-auto p-2 xl:px-60'>
            <div tw='bg-white flex flex-col w-full border rounded-2xl items-center p-10 text-sky-700 shadow-lg'>
                <div>
                    <div tw='text-4xl font-bold text-center'>
                        {firstName ? <span> Hello, {firstName} {lastName} </span> : <span tw='text-base'>Logged out...</span>}
                    </div>
                    <div tw='text-2xl mt-8 text-center'>
                        <p>{address} {postCode}</p>
                        <p tw='capitalize'>{gender}</p>
                        <p>{telPhoneNumber}</p>
                        <p>{email}</p>
                    </div>
                </div>
                <div tw='mt-8 w-1/3'>
                    <Button onClick={clickLogout} tw='w-full'> Logout </Button>
                </div>
            </div>
        </div>
    )
}

export default Index
