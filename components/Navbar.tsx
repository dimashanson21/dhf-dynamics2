"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/70 backdrop-blur-md text-white border-b border-white/10">
      
      <div className="flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="DHF Dynamics"
            className="h-12 cursor-pointer transition duration-300 
                       hover:scale-105 
                       hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center tracking-widest text-sm">

          <Link className="hover:text-gray-300 transition" href="/">Home</Link>
          <Link className="hover:text-gray-300 transition" href="/about">About</Link>

          {/* SERVICES DROPDOWN */}
            <div className="relative group">
            <span className="cursor-pointer hover:text-gray-300 transition">
              Services
            </span>

          {/* invisible hover bridge */}
            <div className="absolute top-full left-0 w-full h-3"></div>

            <div className="absolute right-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200
                  bg-black/90 backdrop-blur-md border border-white/10 
                  p-4 rounded-lg shadow-lg min-w-[180px] z-50">

            <Link href="/services/aerospace" className="block py-1 hover:text-gray-300 transition">
              Aerospace Systems
            </Link>

            <Link href="/services/armored" className="block py-1 hover:text-gray-300 transition">
              Armored Systems
            </Link>

            <Link href="/services/weapons" className="block py-1 hover:text-gray-300 transition">
              Weapon Systems
            </Link>

            </div>
          </div>

          <Link className="hover:text-gray-300 transition" href="/partners">Partners</Link>
          <Link className="hover:text-gray-300 transition" href="/newsroom">Newsroom</Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-3 bg-black/90 backdrop-blur-md border-t border-white/10">

          <Link onClick={() => setOpen(false)} href="/" className="block hover:text-gray-300">
            Home
          </Link>

          <Link onClick={() => setOpen(false)} href="/about" className="block hover:text-gray-300">
            About
          </Link>

          <Link onClick={() => setOpen(false)} href="/services" className="block hover:text-gray-300">
            Services
          </Link>

          <Link onClick={() => setOpen(false)} href="/partners" className="block hover:text-gray-300">
            Partners
          </Link>

          <Link onClick={() => setOpen(false)} href="/newsroom" className="block hover:text-gray-300">
            Newsroom
          </Link>
        </div>
      )}
    </nav>
  );
}