import React from "react";

export default function Sidebar(props) {
  return (
    <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
      <nav className="space-y-8 text-sm">
        <div className="space-y-2">
          <div className=" text-2xl font-semibold">
            <ul>
              <li>
                <button
                  onClick={() => props.handleType("users")}
                  rel="noopener noreferrer"
                  className="mb-3"
                >
                  Users
                </button>
              </li>
              <li>
                <button
                  onClick={() => props.handleType("products")}
                  rel="noopener noreferrer"
                >
                  Product
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  );
}
