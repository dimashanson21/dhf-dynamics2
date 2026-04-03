"use client";

import Link from "next/link";

export default function JDAMPage() {
  return (
    <main className="relative h-screen w-full text-white overflow-hidden">

      <div className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/ordnance.jfif')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute top-0 w-full flex justify-between px-8 py-6 z-20">
        <Link href="/"><img src="/logo.png" className="h-10" /></Link>
        <Link href="/services/weapons/ordnance">← BACK</Link>
      </div>

      <div className="relative z-10 h-full flex items-end px-10 pb-20">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-4">JDAM</h1>

          <p className="text-gray-300 mb-6">
            Joint Direct Attack Munition – a guidance kit that converts unguided bombs
            into precision-guided weapons capable of all-weather operations.
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm mb-8">
            <div><p>Guidance</p><p>GPS / INS</p></div>
            <div><p>Range</p><p>Up to 28 km</p></div>
            <div><p>Accuracy</p><p>~5m CEP</p></div>
            <div><p>Platform</p><p>Air-Launched</p></div>
            <div><p>Payload</p><p>500–2000 lb bombs</p></div>
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