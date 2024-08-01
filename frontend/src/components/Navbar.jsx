import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogOut, Menu, Search, X } from "lucide-react";
import { useAuthStore } from "./../store/authUser";
import { useContentStore } from "./../store/content";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const { contentType, setContentType } = useContentStore();

  return (
    <header className="max-w-[1250px] mx-auto flex flex-wrap items-center justify-between p-4 h-20">
      <div className="flex items-center gap-10 z-50">
        <Link to="/">
          <img
            src="/netflix-logo.png"
            alt="Netflix Logo"
            className="w-32 sm:w-40"
          />
        </Link>

        {/* desktop navbar items */}
        <div className="hidden sm:flex gap-4 items-center">
          <Link
            to="/"
            className={`hover:underline ${
              contentType == "movie" && location.pathname == "/"
                ? "text-red-600"
                : "text-white"
            }`}
            onClick={() => setContentType("movie")}
          >
            Movies
          </Link>
          <Link
            to="/"
            className={`hover:underline ${
              contentType == "tv" && location.pathname == "/"
                ? "text-red-600"
                : "text-white"
            }`}
            onClick={() => setContentType("tv")}
          >
            Tv Shows
          </Link>
          <Link
            to="/history"
            className={`hover:underline ${
              location.pathname == "/history" ? "text-red-600" : "text-white"
            }`}
          >
            Search History
          </Link>
        </div>
      </div>

      <div className="flex gap-3 items-center z-50">
        <Link to={"/search"}>
          <Search className="size-6 cursor-pointer hover:scale-[1.01]" />
        </Link>
        <div className="relative">
          <img
            src={user.image}
            alt="Avatar"
            className="h-8 rounded cursor-pointer"
          />
        </div>
        <LogOut
          className="size-6 cursor-pointer hover:scale-[1.01]"
          onClick={logout}
        />
        <div className="sm:hidden">
          {isMobileMenuOpen ? (
            <X className="size-6 cursor-pointer" onClick={toggleMobileMenu} />
          ) : (
            <Menu
              className="size-6 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
      </div>

      {/* mobile navbar items */}
      {isMobileMenuOpen && (
        <div className=" mt-4 w-screen p-2 flex flex-col gap-3 sm:hidden z-50 bg-black border rounded border-gray-800">
          <Link
            to={"/"}
            className={`block hover:underline ${
              contentType == "movie" && location.pathname == "/"
                ? "text-red-600"
                : "text-white"
            }`}
            onClick={() => setContentType("movie")}
          >
            Movies
          </Link>
          <Link
            to={"/"}
            className={`block hover:underline ${
              contentType == "tv" && location.pathname == "/"
                ? "text-red-600"
                : "text-white"
            }`}
            onClick={() => setContentType("tv")}
          >
            Tv Shows
          </Link>
          <Link
            to={"/history"}
            className={`block hover:underline ${
              location.pathname == "/history" ? "text-red-600" : "text-white"
            }`}
            onClick={toggleMobileMenu}
          >
            Search History
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
