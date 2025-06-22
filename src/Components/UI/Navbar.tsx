import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";
export default function Navbars() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark" || !storedTheme;
    setIsDarkMode(isDark);
  }, []);

  // Apply theme to HTML root
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const NavLinks = () => (
    <>
      <Link
        to="/buildCV"
        className="hover:text-blue-500   text-xl  transition my-1"
      >
        📄 CvBuilder{" "}
      </Link>

      <button
        onClick={toggleTheme}
        className="px-2 py-2 mt-3 md:mt-0 md:pb-2 cursor-pointer my-1 md:px-4 md:py-2 border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </>
  );

  return (
    <header className="shadow-lg">
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center bg-white dark:bg-gray-900 px-10 lg:px-28 py-6 ">
        <Link
          to="/"
          className="text-3xl font-nav font-bold text-gray-800 dark:text-gray-100"
        >
          BuildMyCv
        </Link>
        <div className="flex space-x-8 text-lg font-medium text-gray-700 dark:text-gray-200 font-nav">
          <NavLinks />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex justify-between items-center bg-white dark:bg-gray-900 px-6 py-5 ">
        <Link
          to="/"
          className="text-2xl font-nav  font-bold text-gray-800 dark:text-gray-100"
        >
          Build My Cv
        </Link>
        <button
          onClick={toggleMenu}
          className="text-gray-700 dark:text-gray-200 focus:outline-none"
        >
          {isOpen ? (
            <HiOutlineX className="w-8 h-8" />
          ) : (
            <HiOutlineMenu className="w-8 h-8" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden flex flex-col items-center space-y-4  px-4 py-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200  shadow font-nav"
        >
          <NavLinks />
        </motion.div>
      )}
    </header>
  );
}
