import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative bg-black text-white">
      {/* Hero content */}
      <div className="flex flex-col items-center justify-center text-center py-32 gap-8 px-4">
        <h1 className="text-3xl md:text-7xl font-semibold leading-tight mb-6">
          Coffee in hand. Eyes on the prize. <br />
          Hunt, report, earn your bounty.
        </h1>
        <button className="px-8 py-3 text-xl bg-[#9438FF] text-white rounded-md hover:bg-[#7a2de6] transition-colors duration-300">
          Register Now
        </button>
      </div>
      <Image
        src="/Screenshot 2025-09-25 025851.png"
        alt="Background"
        width={1920}
        height={1080}
        className=" relative  w-screen  "
      />
    </section>
  );
}
