"use client";

import Link from "next/link";

export default function F16Page() {
  return (
    <main className="relative h-screen w-full text-white overflow-hidden">

      <div className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/multirole-hero.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute top-0 w-full flex justify-between px-8 py-6 z-20">
        <Link href="/"><img src="/logo.png" className="h-10" /></Link>
        <Link href="/services/aerospace/multirole">← BACK</Link>
      </div>

      <div className="relative z-10 h-full flex items-end px-10 pb-20">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-4">F-16 Fighting Falcon</h1>

          <p className="text-gray-300 mb-6">
            A highly versatile multirole fighter known for agility, cost-efficiency,
            and proven combat performance worldwide.
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm mb-8">
            <div><p>Max Speed</p><p>Mach 2.0</p></div>
            <div><p>Range</p><p>4,200 km</p></div>
            <div><p>Payload</p><p>17,000 lbs</p></div>
            <div><p>Crew</p><p>1</p></div>
            <div><p>Cost</p><p>$60–70M</p></div>
            <div><p>Status</p><p>Active Export</p></div>
          </div>

          <Link href="/order" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition">
            REQUEST PROCUREMENT
          </Link>
        </div>
      </div>

    </main>
  );
}