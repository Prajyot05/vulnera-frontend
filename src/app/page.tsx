"use client";

import Navbar from "./Navbar";
import Hero from "@/components/home/Hero";
import WhyVulnera from "@/components/home/WhyVulnera";
import HowItWorks from "@/components/home/HowItWorks";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#000000]">
        <Navbar />
        <Hero />
        <WhyVulnera />
        <HowItWorks />
        <CTA />
        <Footer />
      </div>
    </>
  );
}