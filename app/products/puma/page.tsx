"use client";

import Link from "next/link";

export default function PumaPage() {
  return (
    <main className="relative h-screen w-full text-white overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/puma.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute top-0 w-full flex justify-between px-8 py-6 z-20">
        <Link href="/">
          <img src="/logo.png" className="h-10 hover:scale-105 transition" />
        </Link>

        <Link href="/services/armored/ifv">
          ← BACK
        </Link>
      </div>

      <div className="relative z-10 h-full flex items-end px-10 pb-20">
        <div className="max-w-xl">

          <h1 className="text-6xl font-bold mb-4">Puma IFV</h1>

          <p className="text-gray-300 mb-6">
            The Puma IFV represents next-generation infantry support with
            modular armor, high mobility, and advanced protection systems.
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm mb-8">
            <div><p className="text-gray-400">Top Speed</p><p>70 km/h</p></div>
            <div><p className="text-gray-400">Range</p><p>600 km</p></div>
            <div><p className="text-gray-400">Main Armament</p><p>30mm Cannon</p></div>
            <div><p className="text-gray-400">Crew</p><p>3 + 6 troops</p></div>
            <div><p className="text-gray-400">Unit Cost</p><p>$7–8 Million</p></div>
            <div><p className="text-gray-400">Availability</p><p>Limited Export</p></div>
          </div>

          <Link href="/order" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition">
            REQUEST PROCUREMENT
          </Link>

        </div>
      </div>

    </main>
  );
}