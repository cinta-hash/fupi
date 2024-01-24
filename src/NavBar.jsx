import React from "react";

export default function () {
  return (
    <div className="bg-cyan-400 container">
      <h1 className="text-gray-900 text-4xl font-bold mr-6 pl-4 pb-0 pt-5">
        fupisha
      </h1>
      <ul className="flex space-x-6 items-center justify-center">
        <li>
          <button className="text-xl font-bold text-gray-600">Home</button>
        </li>
        <li>
          <button className="text-xl font-bold text-gray-600">About</button>
        </li>
        <li>
          <button className="text-xl font-bold text-gray-600">Features</button>
        </li>
      </ul>
    </div>
  );
}
