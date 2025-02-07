import React from 'react';
import { Link } from 'react-router-dom';
import Fav from "./Fav";
import Home from "./Home";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white p-4">
      <div className="text-xl font-bold">Hollywap</div>

      <div className="flex items-center space-x-5">
        <div className="text-lg cursor-pointer transition hover:text-red-500">
          <Link to="/Home">Home</Link>
        </div>

        <div className="text-lg cursor-pointer transition hover:text-red-500">
          <Link to="/fav">My Favorites</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
