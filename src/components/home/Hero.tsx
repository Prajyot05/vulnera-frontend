"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-10">
      <div className="flex text-7xl font-bold items-center justify-center gap-2">
        <h1 className=" text-[#9438FF]">You Hunt.</h1>
        <h1 className="  text-white">We Pay.</h1>
        <h1 className=" text-[#9438FF]">Simple.</h1>
      </div>
      <div>
        <p className="text-center text-xl text-gray-300 max-w-2xl">
          Vulnera turns your bug reports into real bounties — fast, fair, and on-chain.
        </p>
      </div>
      <div className="flex gap-6">
        <button className="px-6 py-2 bg-[#9438FF] text-white rounded-md hover:bg-[#7a2de6] transition-colors duration-300">
          View Bounties
        </button>
        <button className="px-6 py-2  text-white rounded-md border border-white hover:bg-gray-800 transition-colors duration-300">
          Join us as Company/User
        </button>
      </div>
      <Image
        src="/5da65ab32dcd4d7a23daf2db0c55a0d2c24464f3.jpg"
        alt="3D Spline"
        width={1300}
        height={5}
        className="mx-auto"
      />
    </div>
  );
}
