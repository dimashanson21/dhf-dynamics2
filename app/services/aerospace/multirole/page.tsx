"use client";

import Link from "next/link";

export default function MultirolePage() {
  const products = [
    {
      name: "F-16 Fighting Falcon",
      role: "Lightweight multirole fighter",
      img: "/images/f16.jpg",
      link: "/products/f16",
    },
    {
      name: "F/A-18 Super Hornet",
      role: "Carrier-capable multirole platform",
      img: "/images/fa18.jpg",
      link: "/products/fa18",
    },
    {
      name: "Rafale",
      role: "Omnirole combat aircraft",
      img: "/images/rafale.jpg",
      link: "/products/rafale",
    },
  ];

  return (
    <main className="text-white">

      {/* HERO */}
      <section className="h-[60vh] relative flex items-end px-10 pb-16">
        <img src="/images/multirole-hero.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-2">
            MULTIROLE
          </h1>
          <p className="text-gray-300 max-w-lg">
            Flexible platforms capable of executing air-to-air, air-to-ground,
            and reconnaissance missions within a single system.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
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
              <img src={item.img} className="absolute w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-sm text-gray-300">{item.role}</p>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)]" />
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}