import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import 'twin.macro'
import Select from "./Select";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import { userRegister } from "../utils/authFunction";
import { Gender, UserInformation } from "../types/main.type";

interface FormInput extends UserInformation {
    isAccepted: boolean
}

export default function FormRegister() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInput>();
    const maxAddressTextLength = 500
    const [countAddressTextLengthLeft, setCountAddressTextLengthLeft] = useState(maxAddressTextLength)
    const [isAcceptedChecked, setIsAcceptedChecked] = useState(false)
    const [isRegisterSuccess, setIsRegisterSuccess] = useState(false)
    const onSubmit: SubmitHandler<FormInput> = async (formData) => {
        userRegister(formData)
            .then((result) => {
                if (result.success) {
                    console.log(formData)
                    setIsRegisterSuccess(true)
                    // window.location.href = '../login'
                }
                else {
                    console.warn('something wrong')
                }
            }).catch((result) => {
                console.warn('error found: ', result.message)
            })
    }
    useEffect(() => {
        const textLengthleft = 500 - (watch("address") ?? '').length
        setCountAddressTextLengthLeft(textLengthleft)
    }, [watch("address")])

    useEffect(() => {
        setIsAcceptedChecked(!watch("isAccepted"))
    }, [watch("isAccepted")])

    return (
        <div tw="mt-6 text-slate-700">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div tw="mt-3">
                    <Select {...register("gender", { required: true })}
                        aria-invalid={errors.gender ? "true" : "false"}
                        defaultValue=''>
                        <option value='' disabled>Please select gender</option>
                        <option value={Gender[Gender.female]}>Female</option>
                        <option value={Gender[Gender.male]}>Male</option>
                        <option value={Gender[Gender.preferNotToSay]}>Prefer not to say</option>
                    </Select>
                    <p tw="text-xs select-none">{errors.gender ? <span tw="text-red-500" > Please select gender</span> : <span tw="text-white">-</span>}</p>
                </div>
                <div tw="mt-3">
                    <Input
                        {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
                        aria-invalid={errors.email ? "true" : "false"}
                        placeholder='Email'
                        tw='invalid:ring-red-500 placeholder:text-sm' />
                    <p tw="text-xs select-none">{errors.email ? <span tw="text-red-500" >Please provide a valid Email.</span> : <span tw="text-white">-</span>}</p>
                </div>
                <div tw="mt-3">
                    <Input
                        {...register("firstName", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                        placeholder='First Name'
                        minLength={1}
                        maxLength={100}
                        tw='invalid:ring-red-500 placeholder:text-sm' />
                    <p tw="text-xs select-none">{errors.firstName ? <span tw="text-red-500" >Please provide a valid First Name.</span> : <span tw="text-white">-</span>}</p>
                </div>
                <div tw="mt-3">
                    <Input
                        {...register("lastName", { required: true })}
                        aria-invalid={errors.lastName ? "true" : "false"}
                        placeholder='Last Name'
                        minLength={1}
                        maxLength={100}
                        tw='invalid:ring-red-500 placeholder:text-sm' />
                    <p tw="text-xs select-none">{errors.lastName ? <span tw="text-red-500" > Please provide a valid Last Name.</span> : <span tw="text-white">-</span>}</p>
                </div>
                <div tw="mt-3">
                    <TextArea
                        {...register("address", { required: true })}
                        aria-invalid={errors.address ? "true" : "false"}
                        placeholder='Address'
                        rows={3}
                        minLength={1}
                        maxLength={maxAddressTextLength}
                        cols={maxAddressTextLength}
                        tw='resize-none invalid:ring-red-500 placeholder:text-sm' />
                    <div tw="flex justify-between">
                        <p tw="text-xs select-none">{errors.address ? <span tw="text-red-500" > Please provide a valid Address (Maximum 500 characters)</span> : <span tw="text-white">-</span>}</p>
                        <p tw="text-xs select-none text-right text-slate-500">{`${countAddressTextLengthLeft} characters left.`}</p>
                    </div>
                </div>
                <div tw="mt-3">
                    <Input
                        {...register("postCode", { required: true, pattern: /\d{5}/g })}
                        aria-invalid={errors.postCode ? "true" : "false"}
                        placeholder='TH Postal Code'
                        minLength={5}
                        maxLength={5}
                        tw='invalid:ring-red-500 placeholder:text-sm' />
                    <p tw="text-xs select-none">{errors.postCode ? <span tw="text-red-500" > Please provide a valid Postal code</span> : <span tw="text-white">-</span>}</p>
                </div>
                <div tw="mt-3">
                    <Input
                        {...register("telPhoneNumber", { required: true, pattern: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g })}
                        aria-invalid={errors.telPhoneNumber ? "true" : "false"}
                        placeholder='Phone Number'
                        minLength={1}
                        maxLength={20}
                        tw='invalid:ring-red-500 placeholder:text-sm' />
                    <p tw="text-xs select-none">{errors.telPhoneNumber ? <span tw="text-red-500" > Please provide a valid Telephone number.</span> : <span tw="text-white">-</span>}</p>
                </div>
                <div tw="mt-6">
                    <label tw="select-none"><input type="checkbox" {...register("isAccepted", { required: true })} tw="w-4 h-4" placeholder="Please Accept" /> <span>Please accept terms and conditions</span></label>
                </div>
                <div tw="mt-3">
                    <Button type="submit" disabled={isAcceptedChecked} tw="w-full disabled:bg-slate-300" >Submit</Button>
                </div>
                <div tw="mt-3">
                    <p tw="text-sky-600 font-semibold text-sm text-right"><Link to="../Login">Go to Login page</Link></p>
                </div>
                <div tw="mt-3">
                    {isRegisterSuccess ? <p tw="text-green-500 italic text-lg">Register Success, Please check your Information in console, <span tw="font-bold">Your Initial password is 12345678</span></p> : <p tw="text-lg select-none text-white">-</p>}
                </div>
            </form>
        </div>
    );
}