import React from "react";
import { useNavigate } from 'react-router-dom'

export default function Appbar() {
    const navigate = useNavigate();
  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

     
        <h1 className="text-xl font-bold tracking-wide">
          Task Tracker
        </h1>

      
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-800 transition"
            onClick={() => {
                navigate('/signin');
            }}
          >
            Sign In
          </button>

          <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
            onClick={() => {
                navigate('/signup');
            }}
          >
            Sign Up
          </button>

          <button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
            onClick={() => {
                fetch('http://localhost:4000/api/users/logout').then((resp) => {
                    return resp.json()
                }).then((data) => {
                    console.log(data);
                })
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}