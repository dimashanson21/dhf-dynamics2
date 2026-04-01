import "./globals.css";
import Navbar from "@/components/Navbar";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} bg-black text-white`}>

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN WRAPPER */}
        <main className="bg-gradient-to-b from-black via-[#0a0a0a] to-black min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}