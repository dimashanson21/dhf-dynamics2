"use client";

import { useEffect, useState } from "react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`fade-in ${show ? "show" : ""}`}>
      {children}
    </div>
  );
}