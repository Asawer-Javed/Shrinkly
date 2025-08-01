"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // NEW

  useEffect(() => {
    setIsClient(true); // Marks when we're on the client
  }, []);

  if (!isClient) return null; // Prevent hydration mismatch

  const navItems = [
    { label: "Home", path: "#" },
    { label: "About", path: "#" },
    { label: "Contact", path: "#footer" },
    { label: "Shorten", path: "#shorten" },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-transparent text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide text-orange-500">
          Shrinkly
        </div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="hover:text-orange-500 transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-transparent px-4 py-2 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              onClick={handleNavClick}
              className="block py-2 px-2 rounded hover:bg-gray-700 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
