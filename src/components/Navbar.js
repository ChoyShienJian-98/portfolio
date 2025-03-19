import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">My Portfolio</Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-black">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-black">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
