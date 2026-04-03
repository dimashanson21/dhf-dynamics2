"use client";

import Link from "next/link";

export default function PatriotRadarPage() {
  return (
    <main className="relative h-screen w-full text-white overflow-hidden">

      <div className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/patriot-radar.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute top-0 w-full flex justify-between px-8 py-6 z-20">
        <Link href="/"><img src="/logo.png" className="h-10" /></Link>
        <Link href="/services/weapons/radar">← BACK</Link>
      </div>

      <div className="relative z-10 h-full flex items-end px-10 pb-20">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-4">AN/MPQ-65 Radar</h1>

          <p className="text-gray-300 mb-6">
            Phased-array radar system providing target detection, tracking,
            and missile guidance for Patriot air defense operations.
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm mb-8">
            <div><p>Type</p><p>Phased Array Radar</p></div>
            <div><p>Function</p><p>Detection & Tracking</p></div>
            <div><p>Targets</p><p>100+ simultaneous</p></div>
            <div><p>Range</p><p>Long-range tracking</p></div>
            <div><p>Integration</p><p>Patriot System</p></div>
            <div><p>Status</p><p>Operational</p></div>
          </div>

          <Link href="/order" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition">
            REQUEST PROCUREMENT
          </Link>
        </div>
      </div>

    </main>
  );
}