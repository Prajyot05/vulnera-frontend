"use client";
import Image from "next/image";
import ThemeToggle from "../theme-toggle";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 flex flex-col items-center text-center gap-10">
      {/* Theme Toggle top-right */}
      {/* <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div> */}

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        <span className="text-purple-500">You Hunt.</span>{" "}
        <span className="text-foreground">We Pay.</span>{" "}
        <span className="text-purple-500">Simple.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl max-w-2xl text-muted-foreground">
        Vulnera turns your bug reports into real bounties — fast, fair, and
        on-chain.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <button className="px-6 py-3 text-lg rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition">
          View Bounties
        </button>
        <button className="px-6 py-3 text-lg rounded-xl border font-semibold text-foreground hover:bg-muted transition">
          Join as Company / User
        </button>
      </div>

      {/* Background Image */}
      <Image
        src="/5da65ab32dcd4d7a23daf2db0c55a0d2c24464f3.jpg"
        alt="3D Spline"
        width={1200}
        height={600}
        className="rounded-2xl shadow-2xl mt-12"
      />
    </section>
  );
}
