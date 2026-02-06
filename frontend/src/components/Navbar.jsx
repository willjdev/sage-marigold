import { memo, useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/project_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <nav className="relative flex justify-between items-center py-4 px-8 bg-[#f5f5f5] shadow-md">
      <h1 className="text-2xl font-bold">
        <img src={logoImage} alt="Sage Marigold Logo" className="h-12 w-12 inline mr-2" />
        <Link className="text-emerald-700 font-cursive! hover:text-gray-600" to="/">
          HELPING HANDS
        </Link>
      </h1>
      <div className="hidden md:flex flex-1 mx-8 gap-2">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-2xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
        <button className="bg-black text-white px-6 py-2 text-sm font-semibold hover:bg-gray-800">
          Search
        </button>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1 cursor-pointer"
      >
        <span className={`w-6 h-0.5 transition-all duration-200 bg-black ${isOpen ? "rotate-45 translate-y-1" : ""}`}></span>
        <span className={`w-6 h-0.5 transition-all duration-200 bg-black ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`w-6 h-0.5 transition-all duration-200 bg-black ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}></span>
      </button>
      <ul className="hidden md:flex gap-6 items-center">
        <li className="hover:border-b-2 hover:border-emerald-700">
          <Link to="/Donate" className="text-black hover:text-gray-600">
            Donate
          </Link>
        </li>
        <li className="hover:border-b-2 hover:border-emerald-700">
          <Link to="/About" className="text-black hover:text-gray-600">
            About
          </Link>
        </li>
        <li className="hover:border-b-2 hover:border-emerald-700">
          <Link to="/Login" className="text-black hover:text-gray-600">
            Login
          </Link>
        </li>
      </ul>
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-center text-xl gap-4 p-4 md:hidden z-10 shadow-lg">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-black hover:border-b-2 hover:border-emerald-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              onClick={() => setIsOpen(false)}
              className="text-black hover:border-b-2 hover:border-emerald-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Donate"
              onClick={() => setIsOpen(false)}
              className="text-black hover:border-b-2 hover:border-emerald-700"
            >
              Donate
            </Link>
          </li>
          <li>
            <Link
              to="/Explore"
              onClick={() => setIsOpen(false)}
              className="text-black hover:border-b-2 hover:border-emerald-700"
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              to="/Login"
              onClick={() => setIsOpen(false)}
              className="text-black hover:border-b-2 hover:border-emerald-700 "
            >
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default memo(Navbar);
