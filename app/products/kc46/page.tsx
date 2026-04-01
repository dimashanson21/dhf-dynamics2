"use client";

import Link from "next/link";

export default function KC46Page() {
  return (
    <main className="relative h-screen w-full text-white overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/kc46.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute top-0 w-full flex justify-between px-8 py-6 z-20">
        <Link href="/">
          <img src="/logo.png" className="h-10 hover:scale-105 transition" />
        </Link>

        <Link href="/services/aerospace/force-multipliers">
          ← BACK
        </Link>
      </div>

      <div className="relative z-10 h-full flex items-end px-10 pb-20">
        <div className="max-w-xl">

          <h1 className="text-6xl font-bold mb-4">
            KC-46 Pegasus
          </h1>

          <p className="text-gray-300 mb-6">
            The KC-46 Pegasus is a next-generation tanker aircraft providing
            aerial refueling, cargo transport, and medical evacuation capabilities.
          </p>

          {/* SPECS */}
          <div className="grid grid-cols-2 gap-6 text-sm mb-8">

            <div>
              <p className="text-gray-400">Range</p>
              <p>12,200 km</p>
            </div>

            <div>
              <p className="text-gray-400">Fuel Capacity</p>
              <p>96,300 kg</p>
            </div>

            <div>
              <p className="text-gray-400">Cruise Speed</p>
              <p>Mach 0.86</p>
            </div>

            <div>
              <p className="text-gray-400">Crew</p>
              <p>3</p>
            </div>

            <div>
              <p className="text-gray-400">Role</p>
              <p>Multi-role Tanker</p>
            </div>

            <div>
              <p className="text-gray-400">Availability</p>
              <p>Active Production</p>
            </div>

          </div>

          <Link
            href="/order"
            className="px-8 py-3 border border-white hover:bg-white hover:text-black transition"
          >
            REQUEST PROCUREMENT
          </Link>

        </div>
      </div>

    </main>
  );
}