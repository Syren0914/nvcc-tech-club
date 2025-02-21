"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import { motion } from "motion/react"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-background">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-card p-4 rounded shadow-md flex flex-col items-center"
          >
        <div className="flex items-center">
          <FaCode className="text-2xl text-primary" />
          <span className="ml-2 text-xl font-bold">NVCC Tech Club</span>
        </div>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          
            initial={{ opacity: 0, y: -20}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-card p-4 rounded shadow-md flex flex-col items-center"
          >
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
        </motion.div>

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
