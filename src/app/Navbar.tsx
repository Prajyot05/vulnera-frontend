"use client";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/bounties", label: "Bounties" },
];

const Navbar = (): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative top-6 bg-[#000000] z-50 w-full backdrop-blur">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-around">
                    {/* Logo and Brand */}
                    <Image
                        src="/navlogo.png"
                        alt="Vulnera Logo"
                        width={150}
                        height={40}
                        priority
                        className="object-contain"
                    />

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-14">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative text-md font-medium text-gray-500 transition-colors duration-300 group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <IoMenu className="text-white h-8 w-8" />
                        <CgProfile className="text-white h-8 w-8" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
