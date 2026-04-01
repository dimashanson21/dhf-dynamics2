"use client";

import Link from "next/link";

export default function ArmoredPage() {
  const categories = [
    {
      title: "Main Battle Tanks (MBT)",
      link: "/services/armored/mbt",
      img: "/images/mbt.jpg",
    },
    {
      title: "Infantry Fighting Vehicles (IFV)",
      link: "/services/armored/ifv",
      img: "/images/ifv.jpg",
    },
    {
      title: "Armored Personnel Carriers (APC)",
      link: "/services/armored/apc",
      img: "/images/apc.jpg",
    },
    {
      title: "Self-Propelled Guns (SPG)",
      link: "/services/armored/spg",
      img: "/images/spg.jpg",
    },
  ];

  return (
    <main className="text-white">

      {/* HERO */}
      <section className="h-screen relative flex items-end px-10 pb-16">
        <img src="/images/armored-hero.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl font-bold mb-4">ARMORED SYSTEMS</h1>
          <p className="text-gray-300">
            Advanced ground platforms designed for battlefield dominance,
            survivability, and tactical superiority.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="min-h-screen px-10 py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <h2 className="text-4xl font-bold mb-10">SYSTEM CATEGORIES</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((item) => (
            <Link key={item.title} href={item.link}
              className="relative h-56 rounded-xl overflow-hidden group"
            >
              <img src={item.img} className="absolute w-full h-full object-cover group-hover:scale-110 transition" />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

              <div className="relative z-10 h-full flex items-center justify-center font-semibold text-lg">
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}