"use client";

import Link from "next/link";

export default function BradleyPage() {
  return (
    <main className="relative h-screen w-full text-white overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/bradley.jpg')" }}
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

          <h1 className="text-6xl font-bold mb-4">M2A3 Bradley</h1>

          <p className="text-gray-300 mb-6">
            The M2A3 Bradley is a modern infantry fighting vehicle equipped
            with advanced targeting systems and anti-armor capabilities.
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm mb-8">
            <div><p className="text-gray-400">Top Speed</p><p>56 km/h</p></div>
            <div><p className="text-gray-400">Range</p><p>400 km</p></div>
            <div><p className="text-gray-400">Main Armament</p><p>25mm Chain Gun</p></div>
            <div><p className="text-gray-400">Crew</p><p>3 + 6 troops</p></div>
            <div><p className="text-gray-400">Unit Cost</p><p>$3–4 Million</p></div>
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