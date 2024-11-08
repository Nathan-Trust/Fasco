import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Importing both Menu and X icons
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import { Fasco_Routes } from "../../store/routes";

const menuData = [
  { title: "Home", url: Fasco_Routes.home },
  { title: "Deals", url: Fasco_Routes.about },
  { title: "New Arrivals", url: "/services" },
  { title: "Packages", url: "/packages" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".menu-icon")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Animation variants for the overlay
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
    exit: { opacity: 0 },
  };

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  // Scroll listener to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 100); // Change the value to match the height of your hero section
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full ${
          scrolled && "shadow-lg"
        } z-50 p-4 bg-white transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between screen-max-width mx-auto items-center">
          {/* Logo or Brand Name */}
          <div className="text-lg flex flex-col items-center font-bold text-black">
            <p>FASCO</p>
          </div>

          {/* Menu Icon for smaller screens */}
          <div className="md:hidden menu-icon">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X size={28} className="text-gray-800" />
              ) : (
                <Menu size={28} className="text-gray-800" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex space-x-8 items-center">
              {menuData.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className={`font-normal text-sm group hover:text-gray-500 relative ${
                      location.pathname === item.url
                        ? "text-black"
                        : "text-gray-300"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="px-4 py-2 bg-[#000000] text-white rounded hover:bg-[#000000]/50 transition">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 top-16 bg-black z-40"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.ul
              ref={menuRef}
              className="fixed top-16 left-0 w-full px-4 bg-white shadow-md z-40 flex flex-col items-center py-6 space-y-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              {menuData.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className={`font-semibold text-lg hover:text-green-500`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <button className="px-4 py-2 w-full bg-[#000000] text-white rounded hover:bg-[#000000]/50 transition">
                Sign up
              </button>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
