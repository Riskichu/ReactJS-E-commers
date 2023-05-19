import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="shadow-lg py-2 bg-white px-12 sticky top-0">
      <nav class="mx-auto max-w-7xl flex justify-center">
        <ul class="flex items-center gap-8 text-cyan-500 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/Table'>Table</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar