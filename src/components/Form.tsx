import Button from "./Button"
import Input from "./Input"
import InputPassword from "./InputPassword"
import 'twin.macro'
import InputEmail from "./InputEmail"
import { FormEvent, useState } from "react"
import fakeApiforLogin from "../utils/fakeApiforLogin"

const Form = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isValid, setIsValid] = useState({
        email: false,
        password: false
    })

    async function Login(username: string, password: string) {
        const response = await fakeApiforLogin(username, password)
        if (response.success) {
            
        }
        else {
            
        }

    }
    function handleLoginSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();


    }
    const a = "a"
    return (
        <form noValidate onSubmit={handleLoginSubmit}>
            <div tw="w-full">
                <div>
                    <div tw="mt-5">
                        <Input type="email" required />
                        {!isValid.email && <p tw={"mt-2 text-red-500 peer-invalid:transition duration-100 text-sm "} >
                            Please provide a valid email address.
                        </p>}
                    </div>
                    <div tw="mt-5">
                        <InputPassword />
                        {!isValid.password && <p tw="mt-2 text-red-500 peer-invalid:transition duration-100 text-sm">
                            Please fill password (8-20 characters)
                        </p>}
                    </div>
                    <div tw="mt-5">
                        <Button type='submit' tw="w-full bg-green-600 hover:bg-green-800">Button here</Button>
                    </div>
                    <div tw="mt-5">
                        <Button type='button' tw="w-full bg-sky-600 hover:bg-sky-800">Button here</Button>
                    </div>
                </div>
            </div>
        </form >
    )
}

export default Form