"use client";

import Link from "next/link";

export default function PatriotPage() {
  return (
    <main className="relative h-screen w-full text-white overflow-hidden">

      <div className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/patriot.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute top-0 w-full flex justify-between px-8 py-6 z-20">
        <Link href="/"><img src="/logo.png" className="h-10" /></Link>
        <Link href="/services/weapons/intercept">← BACK</Link>
      </div>

      <div className="relative z-10 h-full flex items-end px-10 pb-20">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-4">MIM-104 Patriot</h1>

          <p className="text-gray-300 mb-6">
            Advanced surface-to-air missile system designed to detect, track,
            and intercept aircraft, cruise missiles, and ballistic threats.
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm mb-8">
            <div><p>Type</p><p>SAM System</p></div>
            <div><p>Range</p><p>~160 km</p></div>
            <div><p>Role</p><p>Air Defense</p></div>
            <div><p>Guidance</p><p>Radar-guided</p></div>
            <div><p>Mobility</p><p>Mobile Launchers</p></div>
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