import React,{ useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import 'twin.macro';
import { login } from "../utils/authFunction";
import Button from "./Button";
import Input from "./Input";

export default function FormLogin() {
    interface FormInput {
        email: string
        password: string
    }
    type InputPasswordType = 'password' | 'text'
    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();
    const [isLoginFailed, setIsLoginFailed] = useState(false)
    const [inputPasswordType, setInputPasswordType] = useState<InputPasswordType>('password')
    const Icon = {
        'password': 'Show',
        'text': 'Hide',
    }

    function clickInputTypeChange(): void {
        setInputPasswordType(prevType => {
            return prevType === 'password' ? 'text' : 'password'
        })
    }

    const onSubmit: SubmitHandler<FormInput> = async (formData) => {
        // setIsLoginFailed(false)
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
        <div tw="rounded-xl text-slate-700">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div tw="mt-3">
                    <Input
                        {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
                        aria-invalid={errors.email ? "true" : "false"}
                        placeholder='Email'
                        tw='invalid:ring-red-500 placeholder:text-sm' />
                    <p tw="text-xs select-none">{errors.email ? <span tw="text-red-500" >Please provide a valid Email.</span> : <span tw="text-white">-</span>}</p>
                </div>
                <div tw="mt-3">
                    <div tw='relative'>
                        <div tw='absolute right-4 top-1.5 cursor-pointer text-sm text-slate-400 select-none' onClick={() => clickInputTypeChange()}>{Icon[inputPasswordType]}</div>
                        <Input
                            {...register("password", { required: true, minLength: 8, maxLength: 20 })}
                            type={inputPasswordType}
                            aria-invalid={errors.password ? "true" : "false"}
                            placeholder='Password (8-20 characters)'
                            autoComplete="off"
                            tw='invalid:ring-red-500 placeholder:text-sm' />
                    </div>
                    <p tw="text-xs select-none">{errors.password ? <span tw="text-red-500" >Password must be 8-20 characters.</span> : <span tw="text-white">-</span>}</p>
                </div>
                <div tw="mt-3">
                    <Button type="submit" tw="w-full" >Login</Button>
                </div>
                <div tw="mt-3">
                    <Link to="../register"><p tw="text-slate-800 text-sm text-right">Don't have an account? Sign up Here.</p></Link>
                </div>
                <div tw="mt-3">
                    {isLoginFailed && <p tw="text-red-500 transition delay-300 duration-300">Login Failed! Please try Again.</p>}
                </div>
            </form>
        </div>
    );
}