'use client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { axios } from 'axios';


export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    });

    const onLogin = async () => { }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />
                <label htmlFor='email' >Email:</label><hr /><hr />
                <input id='email' type="text" placeholder='Enter your Email' value={user.email} onChange={(e) => setUser({...user,email:e.target.value})}/>
                <hr />
                <label htmlFor='password'>Email:</label><hr /><hr />
                <input id='password' type="password" placeholder='Enter your password' />
                <button onClick={onLogin} className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'>
                    Login here
                </button>
                <Link rel="stylesheet" href="/signup" >Visit Signup Page</Link>
        </div>
    )
}