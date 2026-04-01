"use client";

import Link from "next/link";

export default function FA18Page() {
  return (
    <main className="relative h-screen w-full text-white overflow-hidden">

      <div className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/fa18.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute top-0 w-full flex justify-between px-8 py-6 z-20">
        <Link href="/"><img src="/logo.png" className="h-10" /></Link>
        <Link href="/services/aerospace/multirole">← BACK</Link>
      </div>

      <div className="relative z-10 h-full flex items-end px-10 pb-20">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-4">F/A-18 Super Hornet</h1>

          <p className="text-gray-300 mb-6">
            A carrier-capable multirole fighter designed for both air superiority
            and precision strike missions.
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm mb-8">
            <div><p>Max Speed</p><p>Mach 1.8</p></div>
            <div><p>Range</p><p>2,300 km</p></div>
            <div><p>Payload</p><p>17,750 lbs</p></div>
            <div><p>Crew</p><p>1–2</p></div>
            <div><p>Cost</p><p>$70M</p></div>
            <div><p>Status</p><p>Active Service</p></div>
          </div>

          <Link href="/order" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition">
            REQUEST PROCUREMENT
          </Link>
        </div>
      </div>

    </main>
  );
}