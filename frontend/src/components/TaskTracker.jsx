import React, { useEffect, useState } from "react";
import UserMenu from "./UserMenu";
import { updateTask } from "../../../backend/controllers/task-controller";

export default function TaskTracker() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleDelete = (taskId) => {
  fetch(`http://localhost:4000/api/task/delete/${taskId}`, {
    method: "DELETE",
    credentials: "include",
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Failed to delete task");
      }
      return resp.json();
    })
    .then(() => {
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task._id !== taskId)
      );
    }).catch((err) => {
      console.log("delete error", err.message);
    });
};


const handleUpdate = (task) => {
  const newTitle = prompt("Update title", task.title);
  const newDescription = prompt("Update description", task.description);

  if (!newTitle || !newDescription) return;

  fetch(`http://localhost:4000/api/task/update/${task._id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: newTitle,
      description: newDescription,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      // ✅ UI update
      setTasks((prevTasks) =>
        prevTasks.map((t) =>
          t._id === task._id ? data.task : t
        )
      );
    })
    .catch((err) => console.log("update error", err));
};



  const fetchTasks = () => {
    fetch("http://localhost:4000/api/task/get", {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => setTasks(data.tasks || []))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 AppBar */}
      <div className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Task Tracker</h1>
        <UserMenu />
      </div>

      {/* 🔹 Page Content */}
      <div className="flex flex-col items-center py-10 px-4">

        {/* Add Task */}
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Add a Task
          </h2>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border outline-none"
            />

            <textarea
              rows="3"
              placeholder="Enter description"
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border outline-none"
            />

            <button
              type="button"
              onClick={() => {
                fetch("http://localhost:4000/api/task/create", {
                  method: "POST",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({ 
                    title, 
                    description
                  }),
                }).then((resp) => {
                  return resp.json();
                }).then(() => {
                    setTitle("")
                    setDescription("")
                    fetchTasks()
                  });
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
              Add Task
            </button>
          </div>
        </div>

        <div className="w-full max-w-2xl mt-12 bg-white shadow-xl rounded-2xl p-8 border">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Your Tasks
          </h2>

          {tasks.length === 0 ? (
            <p className="text-center text-gray-500">
              No tasks available. Add some!
            </p>
          ) : (
            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task._id}
                  className="p-4 border rounded-lg flex justify-between"
                >
                  <div>
                    <h3 className="font-semibold">{task.title}</h3>
                    <p className="text-gray-600">{task.description}</p>
                  </div>

                  <div className="flex gap-3">
                    <button className="text-red-600" onClick={() => {
                      handleDelete(task._id)
                    }}>Delete</button>
                    <button className="text-blue-600" onClick={() => {
                      updateTask(task)
                    }}>Update</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
