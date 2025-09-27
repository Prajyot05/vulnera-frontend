"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-muted py-12 px-6 md:px-20 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo + Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start gap-4"
        >
          <Image
            src="/navlogo.png"
            alt="Vulnera Logo"
            width={180}
            height={40}
            priority
            className="object-contain"
          />
          <p className="text-lg font-medium text-muted-foreground">
            You Hunt. We Pay. Simple.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-72 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full bg-muted focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6 text-muted-foreground"
        >
          <a href="#" className="hover:text-purple-500 transition">
            <FaYoutube className="text-2xl" />
          </a>
          <a href="#" className="hover:text-purple-500 transition">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="#" className="hover:text-purple-500 transition">
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a href="#" className="hover:text-purple-500 transition">
            <FaTwitter className="text-2xl" />
          </a>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-sm text-muted-foreground mt-10"
      >
        © {new Date().getFullYear()} Vulnera. All rights reserved.
      </motion.div>
    </footer>
  );
}
