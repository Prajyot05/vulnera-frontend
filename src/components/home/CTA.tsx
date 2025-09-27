import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative py-32 text-center">
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Coffee in hand. Eyes on the prize. <br />
          <span className="text-purple-500">Hunt. Report. Earn.</span>
        </h1>
        <button className="px-8 py-3 text-lg rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition">
          Register Now
        </button>
      </div>

      {/* Background Image */}
      <Image
        src="/Screenshot 2025-09-25 025851.png"
        alt="Background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
    </section>
  );
}
