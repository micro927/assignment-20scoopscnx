import React from 'react';
import { Link } from "react-router-dom";
import 'twin.macro'
import Button from './components/Button';
function NotFound() {
    return (
        <>
            <div tw='flex flex-col min-h-screen justify-center items-center'>
                <p tw='text-9xl text-red-800'>404 Not Found</p>
                <div tw='mt-8'>
                    <Link to='/'><Button>Back to Home</Button></Link>
                </div>
            </div>
        </>
    );
}

export default NotFound;