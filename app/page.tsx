"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const baseData = [
    { title: "NATO Joint Exercise", desc: "Integrated air superiority systems.", img: "images/deploy1.jpg" },
    { title: "Desert Strike Ops", desc: "Extreme desert deployment.", img: "images/deploy2.jpg" },
    { title: "Arctic Deployment", desc: "Cold-weather endurance validation.", img: "images/deploy3.jpg" },
    { title: "Carrier Operations", desc: "Naval aviation integration.", img: "images/deploy4.jpg" },
    { title: "Urban Combat Systems", desc: "Close-quarters deployment.", img: "images/deploy5.jpg" },
  ];

  const data = [...baseData, ...baseData, ...baseData];
  const [active, setActive] = useState(baseData.length);

  const scrollToIndex = (index: number, smooth = true) => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.children[index] as HTMLElement;
    if (!card) return;

    const offset =
      card.offsetLeft -
      container.offsetWidth / 2 +
      card.offsetWidth / 2;

    container.scrollTo({
      left: offset,
      behavior: smooth ? "smooth" : "auto",
    });

    setActive(index);
  };

  useEffect(() => {
    scrollToIndex(active, false);
  }, []);

  useEffect(() => {
    if (active >= data.length - baseData.length) {
      setTimeout(() => scrollToIndex(baseData.length, false), 500);
    }
    if (active < baseData.length) {
      setTimeout(() => scrollToIndex(baseData.length * 2 - 1, false), 500);
    }
  }, [active]);

  const next = () => scrollToIndex(active + 1);
  const prev = () => scrollToIndex(active - 1);

  return (
    <main className="text-white">

      {/* HERO — BLACK GRADIENT */}
      <section className="h-screen flex items-center justify-center text-center bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div>
          <img src="/logo.png" className="w-40 md:w-60 mx-auto mb-4" />
          <p className="tracking-widest text-gray-300">
            ENGINEERING SUPERIORITY. SECURING TOMORROW.
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW — MIG IMAGE */}
      <section className="h-screen relative flex items-center">
        <img src="/images/hero.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-10 max-w-xl">
          <h2 className="text-4xl font-bold mb-4">COMPANY OVERVIEW</h2>
          <p className="text-gray-300 leading-relaxed">
            DHF Dynamics is a next-generation defense manufacturer focused on
            aerospace, armored, and advanced weapons systems.
          </p>
        </div>
      </section>

      {/* CAPABILITIES — GRADIENT */}
      <section className="min-h-screen flex flex-col justify-center px-10 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
  <h2 className="text-4xl font-bold mb-10">OUR CAPABILITIES</h2>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      { title: "Aerospace Systems", img: "images/cap1.jpg", link: "/services/aerospace" },
      { title: "Armored Systems", img: "images/cap2.jpg", link: "/services/armored" },
      { title: "Weapon Systems", img: "images/cap3.jpg", link: "/services/weapons" },
    ].map((item) => (
      
      <Link
        key={item.title}
        href={item.link}
        className="relative h-48 rounded-xl overflow-hidden group block"
      >
        <img
          src={item.img}
          className="absolute w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

        <div className="relative z-10 h-full flex items-center justify-center font-semibold">
          {item.title}
        </div>

        {/* glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_0_25px_rgba(255,255,255,0.4)]" />
      </Link>

    ))}
  </div>
</section>

      {/* DEPLOYMENTS — IMAGE */}
      <section className="h-screen relative flex flex-col justify-center items-center">
        <img src="/images/deploy-bg.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full text-center">
          <h2 className="text-4xl font-bold mb-10">OPERATIONAL DEPLOYMENTS</h2>

          <button onClick={prev} className="absolute left-6 z-20 bg-white/20 px-4 py-2 rounded-lg">
            {"<"}
          </button>

          <button onClick={next} className="absolute right-6 z-20 bg-white/20 px-4 py-2 rounded-lg">
            {">"}
          </button>

          <div ref={containerRef} className="flex gap-6 overflow-hidden w-full px-20">
            {data.map((item, index) => (
              <div
                key={index}
                className={`min-w-[300px] h-64 rounded-xl overflow-hidden relative transition-transform duration-500
                ${index === active ? "scale-110 z-10" : "scale-95 opacity-70"}`}
              >
                <img src={item.img} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS — GRADIENT */}
      <section className="min-h-screen flex flex-col justify-center px-10 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <h2 className="text-4xl font-bold mb-10">
          TRUSTED BY GLOBAL DEFENSE PARTNERS
        </h2>

        <div className="flex gap-6 items-center">
          {["images/partner1.png", "images/partner2.jfif", "images/partner3.png"].map((img, i) => (
            <div key={i} className="relative w-40 h-40 rounded-xl overflow-hidden group">
              <img src={img} className="absolute w-full h-full object-contain bg-black p-4" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
            </div>
          ))}

          <button className="ml-6 px-6 py-3 bg-white text-black rounded-lg hover:scale-105 transition">
            See all..
          </button>
        </div>
      </section>

    </main>
  );
}