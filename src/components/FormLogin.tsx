import { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Navigate } from "react-router-dom";
import 'twin.macro';
import { UserInformationContext } from "../provider/UserInformation";
import LoginApiFake from "../utils/fakeApi/LoginApiFake";
import Button from "./Button";
import Input from "./Input";

export default function FormLogin() {
    const [isLoginFailed, setIsLoginFailed] = useState(false)
    const { state, dispatch } = useContext(UserInformationContext);
    interface FormInput {
        email: string
        password: string
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInput>();
    // const FormWatcher = [watch("email"), watch("password")]

    const onSubmit: SubmitHandler<FormInput> = async (formData) => {
        const { email, password } = formData
        LoginApiFake(email, password)
            .then(({ data }) => {
                // localStorage.setItem()
            })
            .then(() => {
                console.warn(state.userInformation)
            })
            .catch(() => {
                setIsLoginFailed(true)
                console.log('login failed')
            })
    }

    // console.error(state.userInformation)
    // useEffect(() => {
    //     if (isLoginFailed) {
    //         setIsLoginFailed(false)
    //     }
    // }, [FormWatcher])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div tw="mt-3">
                <Input
                    {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
                    aria-invalid={errors.email ? "true" : "false"}
                    placeholder='Enter Email'
                    tw='invalid:ring-red-500 placeholder:text-sm' />
                <p tw="text-sm mt-1">{errors.email ? <span tw="text-red-500" >Please provide a valid Email.</span> : <span tw="text-slate-500"></span>}</p>
            </div>
            <div tw="mt-3">
                <Input
                    {...register("password", { required: true, minLength: 8, maxLength: 20 })}
                    aria-invalid={errors.password ? "true" : "false"}
                    placeholder='Enter Password (8 - 20 Characters)'
                    tw='invalid:ring-red-500 placeholder:text-sm' />
                <p tw="text-sm mt-1">{errors.password ? <span tw="text-red-500" >Password must be 8-20 characters.</span> : <span tw="text-slate-500"></span>}</p>
            </div>
            <div tw="mt-3">
                <Button type="submit" tw="w-full" >Submit</Button>
            </div>
            <div>
                {isLoginFailed && <p tw="text-red-500">Login Failed! Please try Again.</p>}
            </div>
        </form>
    );
}