import React from "react";
import Appbar from "./Appbar";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center text-center mt-32 px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
          Welcome to Task Tracker App
        </h2>
        <p className="text-lg text-gray-600 max-w-xl">
          You can manage your tasks here. Add, update, or track your daily tasks easily.
        </p>
      </div>

    </div>
  );
}

export default HomePage;