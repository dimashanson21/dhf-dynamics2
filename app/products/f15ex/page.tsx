"use client";

import Link from "next/link";

export default function F15Page() {
  return (
    <main className="relative h-screen w-full text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 hover:scale-110 transition duration-[2000ms]"
        style={{
          backgroundImage: "url('/images/f15.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* TOP BAR (LOGO + BACK) */}
      <div className="absolute top-0 w-full flex justify-between items-center px-8 py-6 z-20">

        {/* LOGO (HOME) */}
        <Link href="/">
          <img
            src="/logo.png"
            className="h-10 cursor-pointer transition duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          />
        </Link>

        {/* BACK BUTTON */}
        <Link
          href="/services/aerospace/air-superiority"
          className="text-sm tracking-widest hover:text-gray-300 transition"
        >
          ← BACK
        </Link>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-end px-10 pb-20">
  <div className="max-w-xl">

    <h1 className="text-6xl font-bold mb-4">
      F-15EX
    </h1>

    <p className="text-gray-300 mb-6 leading-relaxed">
      The F-15EX is an advanced air superiority fighter designed to
      deliver unmatched speed, payload capacity, and mission flexibility.
      Built upon decades of combat-proven performance, it represents the
      next evolution of air dominance platforms.
    </p>

    {/* SPECS */}
    <div className="grid grid-cols-2 gap-6 text-sm mb-8">

      <div>
        <p className="text-gray-400">Max Speed</p>
        <p className="font-semibold">Mach 2.5+</p>
      </div>

      <div>
        <p className="text-gray-400">Range</p>
        <p className="font-semibold">3,900 km</p>
      </div>

      <div>
        <p className="text-gray-400">Payload</p>
        <p className="font-semibold">29,500 lbs</p>
      </div>

      <div>
        <p className="text-gray-400">Crew</p>
        <p className="font-semibold">1–2</p>
      </div>

      <div>
        <p className="text-gray-400">Unit Cost</p>
        <p className="font-semibold">$80–95 Million</p>
      </div>

      <div>
        <p className="text-gray-400">Availability</p>
        <p className="font-semibold">Limited</p>
      </div>

    </div>

    {/* ORDER BUTTON */}
    <Link
      href="/order"
      className="inline-block px-8 py-3 border border-white text-white tracking-widest text-sm 
                 transition duration-300 hover:bg-white hover:text-black hover:scale-105"
    >
      REQUEST PROCUREMENT
    </Link>

  </div>
</div>
    </main>
  );
}