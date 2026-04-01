"use client";

import Link from "next/link";

export default function Mig29Page() {
  return (
    <main className="relative h-screen w-full text-white overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/mig29.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      {/* TOP BAR */}
      <div className="absolute top-0 w-full flex justify-between items-center px-8 py-6 z-20">
        <Link href="/">
          <img src="/logo.png"
            className="h-10 cursor-pointer transition hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          />
        </Link>

        <Link href="/services/aerospace/air-superiority" className="text-sm tracking-widest hover:text-gray-300">
          ← BACK
        </Link>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-end px-10 pb-20">
        <div className="max-w-xl">

          <h1 className="text-6xl font-bold mb-4">MiG-29</h1>

          <p className="text-gray-300 mb-6">
            The MiG-29 is a highly agile air superiority fighter designed for
            close-range engagements and high maneuverability combat scenarios.
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm mb-8">
            <div><p className="text-gray-400">Max Speed</p><p>Mach 2.25</p></div>
            <div><p className="text-gray-400">Range</p><p>1,430 km</p></div>
            <div><p className="text-gray-400">Payload</p><p>13,000 lbs</p></div>
            <div><p className="text-gray-400">Crew</p><p>1</p></div>
            <div><p className="text-gray-400">Unit Cost</p><p>$22–30 Million</p></div>
            <div><p className="text-gray-400">Availability</p><p>Export Available</p></div>
          </div>

          <Link href="/order" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition">
            REQUEST PROCUREMENT
          </Link>

        </div>
      </div>

    </main>
  );
}