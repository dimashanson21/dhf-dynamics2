"use client";

import Link from "next/link";

export default function IFVPage() {
  const vehicles = [
    {
      name: "M2A3 Bradley",
      role: "Infantry fighting vehicle with advanced targeting systems",
      img: "/images/cap2.jpg",
      link: "/products/bradley",
    },
    {
      name: "Puma IFV",
      role: "Next-generation German infantry fighting platform",
      img: "/images/puma.jpg",
      link: "/products/puma",
    },
    {
      name: "BMP-3",
      role: "Amphibious infantry fighting vehicle with heavy armament",
      img: "/images/bmp3.jpg",
      link: "/products/bmp3",
    },
  ];

  return (
    <main className="text-white">

      {/* HERO */}
      <section className="h-[60vh] relative flex items-end px-10 pb-16">
        <img
          src="/images/bmp3.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl font-bold mb-2">
            INFANTRY FIGHTING VEHICLES
          </h1>
          <p className="text-gray-300">
            Armored platforms designed to transport infantry while providing
            direct fire support in frontline combat environments.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="min-h-screen px-10 py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <h2 className="text-4xl font-bold mb-12">
          AVAILABLE PLATFORMS
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {vehicles.map((item) => (
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