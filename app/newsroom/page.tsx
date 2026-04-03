"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getBlogs, saveBlogs } from "../../lib/blogStore";
import Link from "next/link";

export default function NewsroomPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    try {
      const stored = getBlogs() || [];

      if (!stored || stored.length === 0) {
        const defaultBlogs = [
          {
            id: 1,
            title: "DHF Supports Eurasian Conflict Logistics",
            desc: "DHF Dynamics deployed battlefield coordination systems enhancing allied operational efficiency.",
            img: "/images/war.jpg",
            content: `
DHF Dynamics played a critical role in supporting allied operations during the Eurasian conflict.

Our logistics systems enabled real-time battlefield coordination, allowing units to maintain operational awareness across multiple fronts. Through advanced communication relays and AI-assisted routing systems, supply chains remained uninterrupted despite hostile environments.

Field reports indicate a 37% increase in operational efficiency, significantly improving mission success rates.
            `,
          },
          {
            id: 2,
            title: "KF51 Panther Development Partnership",
            desc: "Our engineers contributed to modular armor systems and targeting enhancements.",
            img: "/images/tank.jpg",
            content: `
DHF Dynamics collaborated with international defense partners in the development of the KF51 Panther.

Our primary contribution focused on modular armor systems designed to adapt dynamically to evolving threats.
            `,
          },
          {
            id: 3,
            title: "IFV Program Cancelled",
            desc: "Strategic reassessment leads to termination of IFV program.",
            img: "/images/puma.jpg",
            content: `
Following a comprehensive strategic review, the joint IFV development program has been officially cancelled.

The decision reflects a broader shift toward autonomous combat systems.
            `,
          },
          {
            id: 4,
            title: "DHF Joins 6th Gen Fighter Initiative",
            desc: "Entering next-generation air dominance development.",
            img: "/images/fighter.jpg",
            content: `
DHF Dynamics has officially joined the international initiative to develop sixth-generation fighter aircraft.

The program focuses on AI integration and stealth dominance.
            `,
          },
        ];

        saveBlogs(defaultBlogs);
        setBlogs(defaultBlogs);
      } else {
        setBlogs(stored);
      }

      setIsAuth(localStorage.getItem("auth") === "true");
    } catch (err) {
      console.error("Blog load error:", err);
      setBlogs([]);
    }
  }, []);

  const handleWrite = () => {
    if (!isAuth) return router.push("/login");
    router.push("/newsroom/write");
  };

  const handleDelete = (id: number) => {
    if (!isAuth) return alert("Unauthorized");

    if (!confirm("Are you sure you want to delete this article?")) return;
    if (!confirm("This action is irreversible. Confirm delete?")) return;

    const updated = blogs.filter((b) => b.id !== id);
    setBlogs(updated);
    saveBlogs(updated);
  };

  return (
    <main className="bg-black text-white min-h-screen pt-28 px-10 pb-20">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-5xl font-bold tracking-wide">NEWSROOM</h1>

        <div className="flex gap-4">
          <button
            onClick={handleWrite}
            className="px-5 py-2 border border-white hover:bg-white hover:text-black transition"
          >
            WRITE
          </button>

          {isAuth && (
            <span className="text-xs text-gray-500 self-center">
              Admin Mode
            </span>
          )}
        </div>
      </div>

      {/* NEWS LIST */}
      <div className="flex flex-col gap-12">

        {blogs.map((item, index) => (
          <div
            key={item.id ?? index}
            className="group flex gap-8 bg-black border border-white/10 rounded-2xl p-6 hover:border-white/30 transition"
          >

            {/* IMAGE */}
            <Link href={`/newsroom/${item.id}`}>
              <div className="w-40 h-40 bg-white rounded-xl overflow-hidden flex-shrink-0 cursor-pointer">
                <img
                  src={item.img || "/images/news/default.jpg"}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </Link>

            {/* TEXT */}
            <div className="flex flex-col justify-center">

              <Link href={`/newsroom/${item.id}`}>
                <h2 className="text-3xl font-bold mb-2 group-hover:text-gray-300 transition cursor-pointer">
                  {item.title}
                </h2>
              </Link>

              <p className="text-gray-400 max-w-2xl">
                {item.desc}
              </p>

              {/* DELETE */}
              {isAuth && (
                <button
                  onClick={() => handleDelete(item.id)}
                  className="mt-4 text-red-500 hover:text-red-400 transition"
                >
                  DELETE
                </button>
              )}

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}