import React from "react";

function Navbar() {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <a class="btn btn-ghost normal-case text-xl">Todo</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a href="#">Home</a>
            </li>
            <li tabindex="0">
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a href="#" class="btn">
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
