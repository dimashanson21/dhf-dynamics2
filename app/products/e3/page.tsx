"use client";

import Link from "next/link";

export default function E3Page() {
  return (
    <main className="relative h-screen w-full text-white overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/awacs.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      {/* TOP BAR */}
      <div className="absolute top-0 w-full flex justify-between px-8 py-6 z-20">
        <Link href="/">
          <img src="/logo.png" className="h-10 hover:scale-105 transition" />
        </Link>

        <Link href="/services/aerospace/force-multipliers">
          ← BACK
        </Link>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-end px-10 pb-20">
        <div className="max-w-xl">

          <h1 className="text-6xl font-bold mb-4">
            E-3 Sentry (AWACS)
          </h1>

          <p className="text-gray-300 mb-6">
            The E-3 Sentry is an airborne early warning and control system
            designed to provide real-time battlefield surveillance,
            command coordination, and threat detection.
          </p>

          {/* SPECS */}
          <div className="grid grid-cols-2 gap-6 text-sm mb-8">

            <div>
              <p className="text-gray-400">Range</p>
              <p>8,000 km</p>
            </div>

            <div>
              <p className="text-gray-400">Endurance</p>
              <p>8+ hours</p>
            </div>

            <div>
              <p className="text-gray-400">Radar Coverage</p>
              <p>400 km+</p>
            </div>

            <div>
              <p className="text-gray-400">Crew</p>
              <p>18–22</p>
            </div>

            <div>
              <p className="text-gray-400">Role</p>
              <p>Airborne Command & Control</p>
            </div>

            <div>
              <p className="text-gray-400">Availability</p>
              <p>Operational</p>
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