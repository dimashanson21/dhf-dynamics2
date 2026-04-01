"use client";

import Link from "next/link";

export default function AerospacePage() {
  const categories = [
    {
      title: "Air Superiority",
      desc: "Dominance of the skies through advanced air superiority fighters.",
      link: "/services/aerospace/air-superiority",
      img: "/images/air-superiority.jpg",
    },
    {
      title: "Multirole",
      desc: "Versatile aircraft capable of executing multiple mission profiles.",
      link: "/services/aerospace/multirole",
      img: "/images/multirole.jpg",
    },
    {
      title: "Force Multipliers",
      desc: "AWACS, tankers, and support systems that enhance operational reach.",
      link: "/services/aerospace/force-multipliers",
      img: "/images/awacs.jpg",
    },
  ];

  return (
    <main className="text-white">

      {/* HERO */}
      <section className="h-screen relative flex items-center px-10">
        <img
          src="/images/aero-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl font-bold mb-4">
            AEROSPACE SYSTEMS
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Our aerospace division delivers cutting-edge air dominance platforms,
            multirole capabilities, and strategic force multipliers designed to
            operate in the most demanding environments.
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
                    DHF Dynamics develops aerospace systems that ensure operational
                    superiority across multiple domains. From air dominance fighters
                    to mission-flexible multirole aircraft, our systems are engineered
                    for precision, adaptability, and survivability.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    Our force multiplier platforms extend the reach and effectiveness
                    of allied forces, enabling real-time intelligence, aerial refueling,
                    and enhanced coordination across the battlefield.
                </p>
        </div>
</section>


      {/* CATEGORY CARDS */}
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
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}