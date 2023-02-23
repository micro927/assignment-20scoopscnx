import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import 'twin.macro'
import { Link } from "react-router-dom";
import TextArea from "./TextArea";

interface FormInput {
    email: string
    firstName: string
    lastName: string
    address: string
    postCode: string
    telPhoneNumber: string
}

export default function App() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInput>();
    const onSubmit: SubmitHandler<FormInput> = data => console.log(data);
    const left = 500 - (watch("address") ?? '').length + ' characters left'
    return (
        <div tw="rounded-xl p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div tw="mt-3">
                    <Input
                        {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
                        aria-invalid={errors.email ? "true" : "false"}
                        placeholder='Email'
                        tw='invalid:ring-red-500 placeholder:text-sm' />
                    <p tw="text-sm mt-1">{errors.email ? <span tw="text-red-500" >Please provide a valid Email.</span> : <span tw="text-slate-500"></span>}</p>
                </div>
                <div tw="mt-3">
                    <Input
                        {...register("firstName", { required: true, minLength: 1, maxLength: 100 })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                        placeholder='First Name'
                        tw='invalid:ring-red-500 placeholder:text-sm' />
                    <p tw="text-sm mt-1">{errors.firstName ? <span tw="text-red-500" >Please provide a valid First Name.</span> : <span tw="text-slate-500"></span>}</p>
                </div>
                <div tw="mt-3">
                    <Input
                        {...register("lastName", { required: true, minLength: 1, maxLength: 100 })}
                        aria-invalid={errors.lastName ? "true" : "false"}
                        placeholder='Last Name'
                        tw='invalid:ring-red-500 placeholder:text-sm' />
                    <p tw="text-sm mt-1">{errors.lastName ? <span tw="text-red-500" > Please provide a valid Last Name.</span> : <span tw="text-slate-500"></span>}</p>
                </div>
                <div tw="mt-3">
                    <TextArea
                        {...register("address", { required: true, minLength: 1, maxLength: 500 })}
                        aria-invalid={errors.address ? "true" : "false"}
                        placeholder='Address'
                        rows={5}
                        tw='resize-none invalid:ring-red-500 placeholder:text-sm' />
                    <div tw="flex justify-between">
                        <p tw="text-sm mt-1">{errors.address ? <span tw="text-red-500" > Please provide a valid Address (Maximum 500 characters)</span> : <span tw="text-right text-slate-500"></span>}</p>
                        <p tw="text-sm mt-1 text-right text-slate-500">{left}</p>
                    </div>
                </div>
                <div tw="mt-3">
                    <Input
                        {...register("postCode", { required: true, minLength: 5, maxLength: 5, pattern: /\d{5}/g })}
                        aria-invalid={errors.postCode ? "true" : "false"}
                        placeholder='TH Postal Code'
                        tw='invalid:ring-red-500 placeholder:text-sm' />
                    <p tw="text-sm mt-1">{errors.postCode ? <span tw="text-red-500" > Please provide a valid PostCode</span> : <span tw="text-slate-500"></span>}</p>
                </div>
                <div tw="mt-3">
                    <Input
                        {...register("telPhoneNumber", { required: true, minLength: 1, maxLength: 100, pattern: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g })}
                        aria-invalid={errors.telPhoneNumber ? "true" : "false"}
                        placeholder='Phone Number'
                        tw='invalid:ring-red-500 placeholder:text-sm' />
                    <p tw="text-sm mt-1">{errors.telPhoneNumber ? <span tw="text-red-500" > Please provide a valid Last Name.</span> : <span tw="text-slate-500"></span>}</p>
                </div>
                <div tw="mt-3">
                    <Button type="submit" tw="w-full" >Submit</Button>
                </div>
                <div tw="mt-3">
                    <Link to="../Login"><p tw="text-slate-800 text-sm text-right">Go to Login page</p></Link>
                </div>
            </form>
        </div>
    );
}