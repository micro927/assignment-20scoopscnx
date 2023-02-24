import React from 'react'
import { findMaxByAge } from "./utils/findMaxbyAge";

function Test() {
    const input = [
        {
            name: 'John',
            age: 60
        },
        {
            name: 'Doe',
            age: 20
        },
        {
            name: 'Will',
            age: 40
        },
        {
            name: 'Smith',
            age: 69
        },
        {
            name: 'Mayer',
            age: 56
        }
    ]

    console.log(findMaxByAge(input))
    return (<>
    </>);
}

export default Test;