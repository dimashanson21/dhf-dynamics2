"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/80 backdrop-blur-md text-white">
      <div className="flex items-center justify-between px-6 py-4">

        {/* -logo- */}
        <div>
          <img
            src="/logo.png"
            alt="DHF Dynamics"
            className="h-15 object-contain"
          />
        </div>

        {/* -menu desktop- */}
        <div className="hidden md:flex gap-6 items-center tracking-widest text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          {/* -services dropdown- */}
          <div className="relative group">
            <span className="cursor-pointer">Services</span>

            <div className="absolute right-0 hidden group-hover:block bg-black mt-2 p-4 rounded shadow-lg">
              <Link href="/services/aerospace" className="block py-1">
                Aerospace Systems
              </Link>
              <Link href="/services/armored" className="block py-1">
                Armored Systems
              </Link>
              <Link href="/services/weapons" className="block py-1">
                Weapon Systems
              </Link>
            </div>
          </div>

          <Link href="/partners">Partners</Link>
          <Link href="/newsroom">Newsroom</Link>
        </div>

        {/* -mobile toggle- */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ⋮
        </button>
      </div>

      {/* -menu mobile- */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/newsroom">Newsroom</Link>
        </div>
      )}
    </nav>
  );
}