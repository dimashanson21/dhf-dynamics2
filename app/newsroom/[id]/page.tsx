"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getBlogs } from "../../../lib/blogStore";

export default function BlogPage() {
  const params = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const blogs = getBlogs();

    // ✅ FIX: handle string vs number id
    const found = blogs.find(
      (b: any) => String(b.id) === String(params.id)
    );

    setBlog(found);
  }, [params.id]);

  // ❌ NOT FOUND
  if (!blog) {
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-lg">Article not found</p>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen pt-28 px-10 pb-20">

      {/* IMAGE */}
      <div className="w-full h-[400px] mb-12 rounded-xl overflow-hidden">
        <img
          src={blog.img}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TITLE */}
      <h1 className="text-5xl font-bold mb-6 tracking-wide">
        {blog.title}
      </h1>

      {/* META (optional but nice) */}
      <p className="text-sm text-gray-500 mb-8">
        DHF Dynamics • Operational Briefing
      </p>

      {/* CONTENT */}
      <p className="text-gray-300 max-w-3xl leading-relaxed whitespace-pre-line text-lg">
        {blog.content || blog.desc}
      </p>

    </main>
  );
}