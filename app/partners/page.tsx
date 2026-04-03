"use client";

import { partners } from "@/data/partners";

export default function PartnersPage() {
  return (
    <main className="text-white">

      {/* HERO */}
      <section className="h-[60vh] relative flex items-end px-10 pb-16">
        <img src="/images/partner-bg.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl font-bold mb-2">
            STRATEGIC PARTNERS
          </h1>
          <p className="text-gray-300">
            Collaborating with global leaders in defense, aerospace, and advanced systems.
          </p>
        </div>
      </section>

      {/* PARTNERS GRID */}
      <section className="min-h-screen px-10 py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">

        <h2 className="text-4xl font-bold mb-12">
          GLOBAL NETWORK
        </h2>

        {/* 🔥 UPDATED GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">

          {partners.map((p) => (
            <div
              key={p.name}
              className="group relative h-40 rounded-xl overflow-hidden border border-white/10 bg-black"
            >

              {/* WHITE LOGO BOX */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-md transition duration-300 group-hover:scale-105">
                  <img
                    src={p.img}
                    className="w-16 h-16 object-contain opacity-90 group-hover:opacity-100 transition"
                  />
                </div>
              </div>

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

              {/* TEXT (smaller + tighter) */}
              <div className="absolute bottom-0 w-full px-3 pb-3 z-10">
                <h3 className="text-xs font-semibold leading-tight">
                  {p.name}
                </h3>
              </div>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]" />

              {/* HUD GRID */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px]" />
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}