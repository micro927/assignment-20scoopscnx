
import React, { useState } from 'react'
import 'twin.macro'
import Input from './Input'
type InputType = 'password' | 'text'

const InputPassword = (): JSX.Element => {
    const [inputType, setInputType] = useState<InputType>('password')
    const Icon = {
        'password': 'S',
        'text': 'H',
    }

    function clickInputTypeChange(): void {
        setInputType(prevType => {
            return prevType === 'password' ? 'text' : 'password'
        })
    }

    return (
        <div tw='relative'>
            <div tw='absolute right-5 top-1 cursor-pointer select-none' onClick={() => clickInputTypeChange()}>{Icon[inputType]}</div>
            <Input type={inputType} placeholder="Password" minLength={8} maxLength={20} required />
        </div>
    )
}

export default InputPassword