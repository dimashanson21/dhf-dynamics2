"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getBlogs, saveBlogs } from "@/lib/blogStore";

export default function WritePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // 🔒 PROTECT PAGE
  useEffect(() => {
    if (localStorage.getItem("auth") !== "true") {
      router.push("/login");
    }
  }, [router]);

  // ✍️ HANDLE SUBMIT
  const handleSubmit = () => {
    if (!title || !desc) {
      alert("Fill all fields");
      return;
    }

    const blogs = getBlogs();

    const newBlog = {
      id: Date.now(),
      title,
      desc,
      img: "/images/news/default.jpg",
    };

    const updated = [newBlog, ...blogs];

    saveBlogs(updated);

    router.push("/newsroom");
  };

  return (
    <main className="bg-black text-white min-h-screen pt-28 px-10">

      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-10">
          CREATE ARTICLE
        </h1>

        {/* TITLE */}
        <input
          type="text"
          placeholder="Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-6 p-3 bg-black border border-white/10 focus:outline-none focus:border-white"
        />

        {/* CONTENT */}
        <textarea
          placeholder="Article Content"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full mb-6 p-3 h-40 bg-black border border-white/10 focus:outline-none focus:border-white"
        />

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
        >
          PUBLISH
        </button>
      </div>

    </main>
  );
}