'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

export default function VerifyEmail() {
  // Extract token from the dynamic route using useParams from next/navigation
  const { token } = useParams();
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (token) {
      axios
        .post('/api/users/verifyemail', { token })
        .then(() => setVerified(true))
        .catch((err) => {
          setError(err.response?.data?.message || 'Error verifying email. Please try again.');
        });
    }
  }, [token]);

  return (
    <div className="flex flex-col justify-center items-center h-screen py-2">
      <h1 className="text-3xl font-bold">Email Verification</h1>
      <h2 className="text-xl font-semibold mt-4">
        {token ? `Token: ${token}` : 'No token found'}
      </h2>
      {verified && (
        <div>
          <h2>Email verified successfully</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
      {error && (
        <div>
          <h2>{error}</h2>
          <Link href="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
}