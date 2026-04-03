"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    if (!username || !password) {
      alert("Fill all fields");
      return;
    }

    if (mode === "signup") {
      // SAVE USER
      const user = { username, password };
      localStorage.setItem("user", JSON.stringify(user));

      alert("Account created. Please login.");
      setMode("login");
    } else {
      // LOGIN
      const stored = localStorage.getItem("user");

      if (!stored) {
        alert("No account found. Please sign up.");
        return;
      }

      const user = JSON.parse(stored);

      if (user.username === username && user.password === password) {
        localStorage.setItem("auth", "true");
        router.push("/newsroom");
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <main className="h-screen flex items-center justify-center bg-black text-white">

      <div className="border border-white/20 p-10 rounded-xl w-[350px]">

        <h1 className="text-2xl mb-6 text-center">
          {mode === "login" ? "LOGIN" : "SIGN UP"}
        </h1>

        {/* USERNAME */}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 bg-black border border-white/20"
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-black border border-white/20"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button
          onClick={handleAuth}
          className="w-full py-3 border border-white hover:bg-white hover:text-black transition"
        >
          {mode === "login" ? "LOGIN" : "CREATE ACCOUNT"}
        </button>

        {/* SWITCH MODE */}
        <p
          onClick={() =>
            setMode(mode === "login" ? "signup" : "login")
          }
          className="mt-4 text-center text-gray-400 cursor-pointer hover:text-white"
        >
          {mode === "login"
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </p>

      </div>

    </main>
  );
}