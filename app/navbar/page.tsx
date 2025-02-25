'use client'

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import Header from '@/components/ui/Header';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-background fixed w-full top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold flex gap-4">
            <Image src={'/nighthawk.png'} alt={''} width={40} height={40}></Image>
          Tech Club
        </Link>
        {/* <Header></Header> */}
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <FaBars className="text-2xl" />
          </button>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/aboutus">About Us</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/resources">Resources</Link></li>
          <li><Link href="/community">Community</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          
        </ul>
      </nav>
      
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="fixed top-0 right-0 w-2/3 h-full bg-background shadow-lg flex flex-col items-center py-10 space-y-6 z-50"
        >
          <button className="absolute top-4 right-6 text-2xl" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/aboutus" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/events" onClick={() => setIsOpen(false)}>Events</Link>
          <Link href="/resources" onClick={() => setIsOpen(false)}>Resources</Link>
          <Link href="/community" onClick={() => setIsOpen(false)}>Community</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </motion.div>
      )}
    </header>
  );
}
