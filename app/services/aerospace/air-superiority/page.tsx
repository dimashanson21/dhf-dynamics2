"use client";

import Link from "next/link";

export default function AirSuperiorityPage() {
  const products = [
    {
      name: "F-15EX",
      role: "Advanced air superiority fighter",
      img: "/images/f15.jpg",
      link: "/products/f15ex",
    },
    {
      name: "MiG-29",
      role: "High agility frontline fighter",
      img: "/images/mig29.jpg",
      link: "/products/mig29",
    },
    {
      name: "F-22 Raptor",
      role: "Stealth air dominance platform",
      img: "/images/f22.jpg",
      link: "/products/f22",
    },
  ];

  return (
    <main className="text-white">

      {/* HERO */}
      <section className="h-[60vh] relative flex items-end px-10 pb-16">
        <img
          src="/images/air-superiority-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-2">
            AIR SUPERIORITY
          </h1>
          <p className="text-gray-300 max-w-lg">
            Platforms designed to dominate contested airspace and ensure
            complete aerial control.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="min-h-screen px-10 py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <h2 className="text-4xl font-bold mb-12">
          AVAILABLE PLATFORMS
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((item) => (
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