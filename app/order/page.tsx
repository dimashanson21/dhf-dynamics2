"use client";

import Link from "next/link";

export default function OrderPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-10 text-white bg-black">

      <div className="max-w-2xl text-center">

        <h1 className="text-4xl font-bold mb-6">
          PROCUREMENT NOTICE
        </h1>

        <p className="text-gray-300 mb-4 leading-relaxed">
          Due to ongoing global operational demands and active defense commitments,
          current production capacity has been fully allocated. As a result,
          immediate procurement of requested systems is temporarily unavailable.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          For future acquisition inquiries, allocation scheduling, and strategic
          procurement discussions, please contact our authorized liaison officer.
        </p>

        {/* CONTACT BLOCK */}
        <div className="border border-white/10 p-6 rounded-lg bg-white/5 mb-6">

          <p className="text-lg font-semibold mb-2">
            Procurement Liaison Officer
          </p>

          <p className="text-gray-400">
            Dimas Hanson
          </p>

          <p className="text-gray-400">
            Email: dhf.procurement@protonmail.com
          </p>

          <p className="text-gray-400">
            Phone: +1 (202) 555-0178
          </p>

        </div>

        {/* BACK */}
        <Link
          href="/"
          className="text-sm tracking-widest hover:text-gray-400 transition"
        >
          ← RETURN TO OPERATIONS
        </Link>

      </div>

    </main>
  );
}