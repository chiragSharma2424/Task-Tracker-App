import React, { useEffect, useState } from "react";

export default function TaskTracker() {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ tasks, setTasks ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/task/get').then((resp) => {
            return resp.json()
        }).then((data) => {
            console.log(data);
            setTasks(data.tasks);
        })
    }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">

      
      <h1 className="text-4xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        Task Tracker App <span>✅</span>
      </h1>

    
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Add a Task
        </h2>

        <div className="space-y-5">

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
              placeholder="Enter title"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 outline-none 
              focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              placeholder="Enter description"
               onChange={(e) => {
                setDescription(e.target.value)
               }}
              rows="3"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 outline-none 
              focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            ></textarea>
          </div>

      
          <button type="submit"
           onClick={() => {
            fetch('http://localhost:4000/api/task/create', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    description: description
                })
            }).then((resp) => {
                return resp.json();
            }).then((data) => {
                console.log(data)
            }).catch((err) => {
                console.log(`error in sending request ${err}`);
            })
           }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold 
            hover:bg-blue-700 transition transform hover:scale-[1.01]">
            Add Task
          </button>
        </div>
      </div>

     
      <div className="w-full max-w-2xl mt-12 bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Your Tasks
          {
            tasks.map((task) => {
                return <div>
                    <h2>{task.title}</h2>
                    <h3>{task.description}</h3>
                    <button>Delete</button>
                    <button>Update</button>
                </div>
            })
          }
        </h2>

        <p className="text-center text-gray-500">
          No tasks available. Add some!
        </p>
      </div>
    </div>
  );
}