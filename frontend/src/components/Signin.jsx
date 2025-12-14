import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function Signin() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="bg-gray-800/60 backdrop-blur-xl shadow-xl rounded-2xl w-full max-w-md p-8 border border-gray-700">

        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-white">Welcome Back</h1>
          <p className="text-sm text-gray-300 mt-2">Sign in to continue tracking your tasks</p>
        </div>

        <div className="space-y-5">

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Email</label>
            <input
              id="email"
               onChange={(e) => {
                setEmail(e.target.value);
               }}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-700/50 placeholder-gray-400 text-white outline-none border border-gray-600 focus:border-gray-300 focus:ring-2 focus:ring-gray-400/20 transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-1">Password</label>
            <input
              id="password"
               onChange={(e) => {
                setPassword(e.target.value);
               }}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-gray-700/50 placeholder-gray-400 text-white outline-none border border-gray-600 focus:border-gray-300 focus:ring-2 focus:ring-gray-400/20 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-gray-900 font-semibold py-3 rounded-lg hover:scale-[1.02] transform transition shadow-md">
            Sign In
          </button>

          <div className="text-center text-gray-300 text-sm mt-3">
            Don't have an account? <div onClick={() => {
              navigate('/signup');
            }}className="text-white font-medium underline">Sign up</div>
          </div>
        </div>

      </div>
    </div>
  );
}
