
import React, { useState } from 'react'
import 'twin.macro'
import Input from './Input'

const InputEmail = (): JSX.Element => {

    return (
        <Input type='email' placeholder="Email" required />
    )
}

export default InputEmail