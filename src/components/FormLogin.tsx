import { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { redirect } from "react-router-dom";
import 'twin.macro';
import { login } from "../utils/authFunction";
import Button from "./Button";
import Input from "./Input";

export default function FormLogin() {
    const [isLoginFailed, setIsLoginFailed] = useState(false)
    interface FormInput {
        email: string
        password: string
    }
    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();
    const onSubmit: SubmitHandler<FormInput> = async (formData) => {
        const { email, password } = formData
        login(email, password)
            .then((result) => {
                if (result.success) {
                    window.location.reload()
                }
                else {
                    setIsLoginFailed(true)
                }
            }).catch(() => {
                console.warn('login error')
            })
    }
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
            <div tw="mt-3">
                <Link to="../register"><p tw="text-slate-800 text-sm text-right">Don't have an account? Sign up Here.</p></Link>
            </div>
            <div tw="mt-3">
                {isLoginFailed && <p tw="text-red-500">Login Failed! Please try Again.</p>}
            </div>
        </form>
    );
}