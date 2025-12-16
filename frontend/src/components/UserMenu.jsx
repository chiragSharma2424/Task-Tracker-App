import React, { useState } from "react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* User Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600 transition"
      >
        👤
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
          <div className="px-4 py-3 border-b">
            <p className="text-sm text-gray-500">Signed in as</p>
            <p className="text-sm font-medium text-gray-800 truncate">
              user@email.com
            </p>
          </div>

          <button className="w-full text-left px-4 py-3 text-red-600 hover:bg-gray-100 rounded-b-xl">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
