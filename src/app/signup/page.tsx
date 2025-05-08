'use client';
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import  { toast} from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [user , setUser] = React.useState({
    name: '',
    email: '',
    username: '',
    password: '',
  })
  const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(false);
  const [loding , setLoding] = React.useState<boolean>(false);
  const onSignup = async () => {
    try {
      setLoding(true); 
      const response = await axios.post('/api/users/signup', user);
      console.log(response.data);
      setLoding(false);
      setUser({
        name: '',
        email: '',
        username: '',
        password: '',
      })
      router.push('/login');
      toast.success('User created successfully');
    } catch (error) {
       console.log(error)
       toast.error('something went wrong');
       setLoding(false);
    }
  }
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.name.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user])


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">Create Account</h1>
        <p className="mt-2 text-sm text-gray-600">Sign up to get started</p>
      </div>
      
      <div className="mt-8 space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="johndoe123"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
        </div>

        <div>
          <button
            type="button"
            disabled={buttonDisabled}
            onClick={onSignup}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ${buttonDisabled ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            {loding ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Sign Up'
            )}
          </button>
        </div>
        
        <div className="text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);
}

