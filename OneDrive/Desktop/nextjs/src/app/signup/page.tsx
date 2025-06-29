'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { axios } from 'axios';


export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: '',
        password: '',
        username: '',
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const onSignup = async () => { }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);    
        }
    }, [user]);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr />
                <label htmlFor='username'>Username:</label>
                <hr /><hr />
                <input id='username' type="text" placeholder='Enter your Username' value={user.username} onChange={(e) => setUser({...user,username:e.target.value})} />
                <hr />
                <label htmlFor='email' >Email:</label><hr /><hr />
                <input id='email' type="text" placeholder='Enter your Email' value={user.email} onChange={(e) => setUser({...user,email:e.target.value})}/>
                <hr />
                <label htmlFor='password'>Email:</label><hr /><hr />
                <input id='password' type="password" placeholder='Enter your password' />
                <button onClick={onSignup} className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'>
                    {buttonDisabled ? "No Singup" : "Signup"}
                </button>
                <Link rel="stylesheet" href="/login" >Visit Login Page</Link>
        </div>
    )
}