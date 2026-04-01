"use client";

import Link from "next/link";

export default function AbramsPage() {
  return (
    <main className="relative h-screen w-full text-white overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/abrams.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      {/* TOP BAR */}
      <div className="absolute top-0 w-full flex justify-between px-8 py-6 z-20">
        <Link href="/">
          <img src="/logo.png" className="h-10 hover:scale-105 transition" />
        </Link>

        <Link href="/services/armored/mbt">
          ← BACK
        </Link>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-end px-10 pb-20">
        <div className="max-w-xl">

          <h1 className="text-6xl font-bold mb-4">M1A2 Abrams</h1>

          <p className="text-gray-300 mb-6">
            The M1A2 Abrams is a battle-proven main battle tank featuring
            advanced composite armor, superior fire control systems, and
            unmatched battlefield survivability.
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm mb-8">
            <div><p className="text-gray-400">Top Speed</p><p>67 km/h</p></div>
            <div><p className="text-gray-400">Range</p><p>425 km</p></div>
            <div><p className="text-gray-400">Main Gun</p><p>120mm Smoothbore</p></div>
            <div><p className="text-gray-400">Crew</p><p>4</p></div>
            <div><p className="text-gray-400">Unit Cost</p><p>$8–10 Million</p></div>
            <div><p className="text-gray-400">Availability</p><p>Active Service</p></div>
          </div>

          <Link href="/order" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition">
            REQUEST PROCUREMENT
          </Link>

        </div>
      </div>

    </main>
  );
}