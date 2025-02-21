"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-background">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <FaCode className="text-2xl text-primary" />
          <span className="ml-2 text-xl font-bold">Tech Club</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          {["About Us", "Projects", "Events", "Resources", "Community", "Contact"].map((item, index) => (
            <li key={index}>
              <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="hover:text-primary">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <Link href="/" className="hover:text-primary" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            {["About Us", "Projects", "Events", "Resources", "Community", "Contact"].map((item, index) => (
              <li key={index}>
                <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="hover:text-primary" onClick={() => setIsOpen(false)}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
