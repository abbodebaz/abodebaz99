"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Intro from "@/components/Intro";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";

const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Journey = dynamic(() => import("@/components/sections/Journey"), { ssr: false });
const Systems = dynamic(() => import("@/components/sections/Systems"), { ssr: false });
const WorkGallery = dynamic(() => import("@/components/sections/WorkGallery"), { ssr: false });
const Impact = dynamic(() => import("@/components/sections/Impact"), { ssr: false });
const Framework = dynamic(() => import("@/components/sections/Framework"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntro") === "true";
    if (hasSeenIntro) {
      setIntroComplete(true);
    }
    setMounted(true);
  }, []);

  const handleIntroComplete = () => {
    setIntroComplete(true);
    localStorage.setItem("hasSeenIntro", "true");
  };

  if (!mounted) return null;

  return (
    <>
      {!introComplete && <Intro onComplete={handleIntroComplete} />}
      <main
        style={{
          opacity: introComplete ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Journey />
        <Systems />
        <WorkGallery />
        <Impact />
        <Framework />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
