"use client";

import { useEffect, useState } from "react";
import styles from "./about.module.css";
import Image from "next/image";

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className={`${styles.page} ${loaded ? styles.fadeIn : ""}`}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <Image
          src="/images/office.jpg"
          alt="Hero"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className={styles.heroContent}>
          <h1>DHF DYNAMICS</h1>
          <p>
            Engineering next-generation defense systems to protect and empower
            the future.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Company Overview</h2>
          <p>
            DHF Dynamics is a next-generation defense manufacturer specializing
            in aerospace systems, armored platforms, and advanced military
            technologies. We develop integrated solutions designed to enhance
            operational capability, strengthen national security, and ensure
            readiness in an evolving global landscape.
          </p>
        </div>
      </section>

      {/* SPLIT */}
      <section className={styles.split}>
        <div className={styles.splitImage}>
          <Image
            src="/images/ourbelieves.jpg"
            alt="Operations"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.splitContent}>
          <h2>Our Beliefs</h2>

          <p>
            We believe that security is the foundation of progress. Every system
            we engineer is built with a clear purpose—to protect not only the
            present, but the generations that follow.
          </p>

          <p>
            Our technologies are designed to perform under the most demanding
            conditions. Reliability, precision, and discipline are not features—
            they are requirements.
          </p>

          <p>
            By continuously advancing our capabilities, we ensure that our
            partners remain prepared, resilient, and ready for the challenges of
            tomorrow.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver advanced defense systems that redefine
            modern security. Through innovation, engineering excellence, and
            strategic collaboration, we aim to protect nations, support global
            stability, and build technologies that endure.
          </p>
        </div>
      </section>

    </main>
  );
}