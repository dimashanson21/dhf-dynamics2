"use client";

import Link from "next/link";

export default function WeaponsPage() {
  const categories = [
    {
      title: "Ordnance Systems",
      desc: "Precision-guided munitions and advanced strike payloads.",
      link: "/services/weapons/ordnance",
      img: "/images/ordnance.jpg",
    },
    {
      title: "Air Intercept Systems",
      desc: "Missile defense and aerial interception technologies.",
      link: "/services/weapons/intercept",
      img: "/images/intercept.jpg",
    },
    {
      title: "Radar & Sensor Systems",
      desc: "Advanced detection, tracking, and battlefield awareness systems.",
      link: "/services/weapons/radar",
      img: "/images/radar.jpg",
    },
  ];

  return (
    <main className="text-white">

      {/* HERO */}
      <section className="h-screen relative flex items-end px-10 pb-16">
        <img
          src="/images/weapons-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl font-bold mb-4">
            WEAPON SYSTEMS
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Our weapons division delivers precision strike capabilities,
            advanced interception systems, and integrated sensor networks
            designed for modern warfare environments.
          </p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="min-h-[60vh] flex items-center px-10 bg-gradient-to-b from-black via-[#050505] to-[#0a0a0a]">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            What We Deliver
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            DHF Dynamics develops advanced weapons systems that enhance
            battlefield effectiveness through precision, reliability, and
            adaptability. Our solutions are engineered to operate in complex
            and high-threat environments.
          </p>
          <p className="text-gray-300 leading-relaxed">
            From precision-guided ordnance to integrated sensor networks,
            our technologies provide superior targeting, interception, and
            situational awareness across all operational domains.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="min-h-screen flex flex-col justify-center px-10 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-black">
        <h2 className="text-4xl font-bold mb-10">
          SYSTEM CATEGORIES
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="relative h-64 rounded-xl overflow-hidden group block"
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
                <h3 className="text-xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {item.desc}
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