import React from 'react'
import { Global } from '@emotion/react'
import tw, { css, theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
    body: {
        backgroundColor: theme`colors.white`,
        ...tw`antialiased min-w-full min-h-screen`,
    },
})

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <Global styles={customStyles} />
    </>
)

export default GlobalStyles