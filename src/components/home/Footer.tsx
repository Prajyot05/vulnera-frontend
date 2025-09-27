import Image from "next/image";
import { FaYoutube, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white flex items-center justify-between px-40 w-full ">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src="/navlogo.png"
          alt="Vulnera Logo"
          width={200}
          height={40}
          priority
          className="object-contain"
        />

        <p className="text-2xl">You Hunt. We Pay. Simple</p>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-72 px-4 py-2 border bg-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 text-gray-600">
        <a href="#" className="hover:text-purple-500 ">
          <FaYoutube className="text-3xl " />
        </a>
        <a href="#" className="hover:text-purple-500">
          <FaFacebookF className="text-3xl" />
        </a>
        <a href="#" className="hover:text-purple-500">
          <FaLinkedinIn className="text-3xl" />
        </a>
        <a href="#" className="hover:text-purple-500">
          <FaTwitter className="text-3xl" />
        </a>
      </div>
    </div>
  );
}
