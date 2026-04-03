"use client";

import Link from "next/link";

export default function MBTPage() {
  const tanks = [
    {
      name: "M1A2 Abrams",
      role: "Advanced main battle tank with superior firepower and armor",
      img: "/images/abrams.jpg",
      link: "/products/abrams",
    },
    {
      name: "Leopard 2A7",
      role: "High-precision German main battle platform",
      img: "/images/leopard.jpg",
      link: "/products/leopard",
    },
    {
      name: "T-80U",
      role: "Gas turbine-powered rapid deployment tank",
      img: "/images/t80.jpg",
      link: "/products/t80",
    },
  ];

  return (
    <main className="text-white">

      {/* HERO */}
      <section className="h-[60vh] relative flex items-end px-10 pb-16">
        <img
          src="/images/abrams.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl font-bold mb-2">
            MAIN BATTLE TANKS
          </h1>
          <p className="text-gray-300">
            Heavily armored platforms engineered for frontline dominance,
            combining firepower, mobility, and survivability.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="min-h-screen px-10 py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <h2 className="text-4xl font-bold mb-12">
          AVAILABLE PLATFORMS
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {tanks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="group relative h-64 rounded-xl overflow-hidden block"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                className="absolute w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

              {/* TEXT */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-300">
                  {item.role}
                </p>
              </div>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)]" />
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}