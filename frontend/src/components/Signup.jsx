import { useState } from "react";
import  { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 border border-gray-300">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Welcome to Task Tracker App</h1>
          <p className="text-sm text-gray-500 mt-2">Create an account to start tracking your tasks ✨</p>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name: </label>
            <input
              id="name"
              name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 placeholder-gray-400 text-gray-900 outline-none border border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
              aria-label="Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email: </label>
            <input
              id="email"
              name="email"
               onChange={(e) => {
                setEmail(e.target.value);
               }}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 placeholder-gray-400 text-gray-900 outline-none border border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
              aria-label="Email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password: </label>
            <input
              id="password"
              name="password"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              type="password"
              placeholder="Create a strong password"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 placeholder-gray-400 text-gray-900 outline-none border border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
              aria-label="Password"
            />
          </div>

          <button
            type="submit"
            onClick={() => {
              fetch('http://localhost:4000/api/users/signup', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  name: name,
                  email: email,
                  password: password
                })
              }).then((resp) => {
                return resp.json();
              }).then((data) => {
                console.log(data)
                navigate('/task')
              }).catch((err) => {
                console.log(`error in sending request ${err}`);
              })
            }}
            className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold py-3 rounded-lg hover:scale-[1.02] transform transition shadow-sm">
            Sign Up
          </button>

          <div className="text-center text-gray-500 text-sm mt-3 cursor-pointer">
            Already have an account? <div onClick={() => {
              navigate('/signin');
            }} className="text-gray-900 font-medium underline">Log in</div>
          </div>
        </div>
      </div>
    </div>
  );
}