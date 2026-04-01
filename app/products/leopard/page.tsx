"use client";

import Link from "next/link";

export default function LeopardPage() {
  return (
    <main className="relative h-screen w-full text-white overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/leopard.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute top-0 w-full flex justify-between px-8 py-6 z-20">
        <Link href="/">
          <img src="/logo.png" className="h-10 hover:scale-105 transition" />
        </Link>

        <Link href="/services/armored/mbt">
          ← BACK
        </Link>
      </div>

      <div className="relative z-10 h-full flex items-end px-10 pb-20">
        <div className="max-w-xl">

          <h1 className="text-6xl font-bold mb-4">Leopard 2A7</h1>

          <p className="text-gray-300 mb-6">
            The Leopard 2A7 is a highly advanced German main battle tank known
            for its precision targeting systems, modular armor, and exceptional
            battlefield mobility.
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm mb-8">
            <div><p className="text-gray-400">Top Speed</p><p>68 km/h</p></div>
            <div><p className="text-gray-400">Range</p><p>450 km</p></div>
            <div><p className="text-gray-400">Main Gun</p><p>120mm L55</p></div>
            <div><p className="text-gray-400">Crew</p><p>4</p></div>
            <div><p className="text-gray-400">Unit Cost</p><p>$10–12 Million</p></div>
            <div><p className="text-gray-400">Availability</p><p>Active Export</p></div>
          </div>

          <Link href="/order" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition">
            REQUEST PROCUREMENT
          </Link>

        </div>
      </div>

    </main>
  );
}