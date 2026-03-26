"use client";

import { useRef, useEffect, useState } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const baseData = [
    { title: "NATO Joint Exercise", desc: "Integrated air superiority systems.", img: "/deploy1.jpg" },
    { title: "Desert Strike Ops", desc: "Extreme desert armored deployment.", img: "/deploy2.jpg" },
    { title: "Arctic Deployment", desc: "Cold-weather endurance validation.", img: "/deploy3.jpg" },
    { title: "Carrier Operations", desc: "Naval aviation integration.", img: "/deploy4.jpg" },
    { title: "Urban Combat Systems", desc: "Close-quarters deployment.", img: "/deploy5.jpg" },
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

      {/* -hero (image dock)- */}
      <section className="h-screen relative flex items-center justify-center text-center">
        <img src="/hero.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10">
          <img src="/logo.png" className="w-40 md:w-60 mx-auto mb-4" />
          <p className="tracking-widest text-gray-300">
            ENGINEERING SUPERIORITY. SECURING TOMORROW.
          </p>
        </div>
      </section>

      {/* -company overview (image dock)- */}
      <section className="h-screen relative flex items-center">
        <img src="/jet2.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-10 max-w-xl">
          <h2 className="text-4xl font-bold mb-4">COMPANY OVERVIEW</h2>
          <p className="text-gray-300 leading-relaxed">
            DHF Dynamics is a next-generation defense manufacturer focused on
            aerospace, armored, and advanced weapons systems.
            <br /><br />
            Our mission is to ensure global security through technological superiority.
          </p>
        </div>
      </section>

      {/* -capabilities- */}
      <section className="h-screen bg-gray-600 flex flex-col justify-center px-10">
        <h2 className="text-4xl font-bold mb-10">OUR CAPABILITIES</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Aerospace Systems", "Armored Systems", "Weapon Systems"].map((item) => (
            <div
              key={item}
              className="bg-white/90 text-black rounded-xl h-40 flex items-center justify-center
              transition duration-300 hover:scale-105 hover:bg-white
              hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* -deployments (infinite carousel)- */}
      <section className="h-screen bg-gray-600 flex flex-col justify-center items-center relative">
        <h2 className="text-4xl font-bold mb-10">OPERATIONAL DEPLOYMENTS</h2>

        <button onClick={prev} className="absolute left-6 z-20 bg-white/30 px-4 py-2 rounded-lg hover:bg-white/60">
          {"<"}
        </button>

        <button onClick={next} className="absolute right-6 z-20 bg-white/30 px-4 py-2 rounded-lg hover:bg-white/60">
          {">"}
        </button>

        <div ref={containerRef} className="flex gap-6 overflow-hidden w-full px-20">
          {data.map((item, index) => (
            <div
              key={index}
              className={`min-w-[300px] h-64 rounded-xl overflow-hidden relative transition-all duration-500
              ${index === active ? "scale-110 z-10" : "scale-90 opacity-60"}`}
            >
              <img src={item.img} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 transition duration-300
                hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              />

              <div className="absolute bottom-4 left-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -partners- */}
      <section className="h-screen bg-gray-600 flex flex-col justify-center px-10">
        <h2 className="text-4xl font-bold mb-10 max-w-md">
          TRUSTED BY GLOBAL DEFENSE PARTNERS
        </h2>

        <div className="flex gap-6 items-center">

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-40 h-40 bg-white/90 rounded-xl transition duration-300
              hover:scale-105 hover:bg-white
              hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
            />
          ))}

          {/* same effect as cards */}
          <button
            className="ml-6 px-6 py-3 bg-white text-black rounded-lg transition duration-300
            hover:scale-105 hover:bg-white
            hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
          >
            SEE ALL..
          </button>

        </div>
      </section>

      {/* -footer- */}
      <footer className="bg-black text-gray-400 py-6 px-10 flex justify-between items-center text-sm">
        <p>© 2026 DHF Dynamics. All rights reserved.</p>

        <div className="flex gap-6">
          <span className="cursor-pointer hover:text-white">Privacy</span>
          <span className="cursor-pointer hover:text-white">Cookies</span>
          <span className="cursor-pointer hover:text-white">Terms</span>
        </div>
      </footer>

    </main>
  );
}