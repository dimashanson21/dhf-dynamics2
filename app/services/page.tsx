"use client";

import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Aerospace Systems",
      desc: "Air dominance, multirole platforms, and force multipliers.",
      link: "/services/aerospace",
      img: "/images/aero.jpg",
    },
    {
      title: "Armored Systems",
      desc: "Ground superiority through advanced armored vehicles.",
      link: "/services/armored",
      img: "/images/armored.jpg",
    },
    {
      title: "Weapon Systems",
      desc: "Precision strike, interception, and sensor systems.",
      link: "/services/weapons",
      img: "/images/weapons.jpg",
    },
  ];

  return (
    <main className="text-white h-screen overflow-hidden">

      {/* FULLSCREEN SLIDES */}
      <div className="flex h-full w-full">

        {services.map((service, i) => (
          <Link
            key={i}
            href={service.link}
            className="relative w-1/3 h-full group overflow-hidden"
          >
            {/* BACKGROUND */}
            <img
              src={service.img}
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-end p-10">
              <h2 className="text-3xl font-bold mb-2">
                {service.title}
              </h2>
              <p className="text-gray-300 text-sm max-w-xs">
                {service.desc}
              </p>
            </div>

            {/* HOVER GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 shadow-[inset_0_0_60px_rgba(255,255,255,0.2)]" />
          </Link>
        ))}

      </div>

    </main>
  );
}