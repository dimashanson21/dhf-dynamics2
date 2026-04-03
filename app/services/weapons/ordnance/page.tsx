"use client";

import Link from "next/link";

export default function OrdnancePage() {
  const systems = [
    {
      name: "JDAM",
      role: "GPS-guided kit converting unguided bombs into precision weapons",
      img: "/images/ordnance.jfif",
      link: "/products/jdam",
    },
  ];

  return (
    <main className="text-white">

      <section className="h-[60vh] relative flex items-end px-10 pb-16">
        <img src="/images/ordnance-hero.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl font-bold mb-2">
            ORDNANCE SYSTEMS
          </h1>
          <p className="text-gray-300">
            Precision-guided munitions and advanced strike payloads.
          </p>
        </div>
      </section>

      <section className="min-h-screen px-10 py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <h2 className="text-4xl font-bold mb-12">
          AVAILABLE SYSTEMS
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {systems.map((item) => (
            <Link key={item.name} href={item.link}
              className="group relative h-64 rounded-xl overflow-hidden"
            >
              <img src={item.img} className="absolute w-full h-full object-cover group-hover:scale-110 transition" />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-sm text-gray-300">{item.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}