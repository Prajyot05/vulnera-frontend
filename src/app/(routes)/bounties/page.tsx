"use client";

import { useState, useEffect, TouchEvent } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDownIcon,
  FilterIcon,
  CodeIcon,
  PackageIcon,
  LayoutGridIcon,
  SearchIcon,
  SortAscIcon,
} from "lucide-react";

type Bounty = {
  id: string;
  logo: string;
  name: string;
  description: string;
  startedDate: string;
  lastUpdated: string;
  totalBugsFound: number;
  amount: string;
};

type NewsItem = {
  title: string;
  amount: string;
  desc: string;
  img: string;
};

// ---------------------
// News Slider Component
// ---------------------
function NewsSlider({ items }: { items: NewsItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const distance = e.changedTouches[0].clientX - touchStartX;
    if (distance > 50)
      setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    else if (distance < -50) setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  return (
    <div className="mb-8 py-5 bg-black rounded-lg overflow-hidden">
      {/* Header + Dots */}
      <div className="flex items-center justify-between px-10">
        <h2 className="text-3xl ml-4 text-white font-semibold mb-4">News</h2>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div
            key={pageIndex}
            className="min-w-full flex justify-evenly items-center gap-4 px-2"
          >
            {items
              .slice(
                pageIndex * itemsPerPage,
                pageIndex * itemsPerPage + itemsPerPage
              )
              .map((item, idx) => (
                <Card
                  key={idx}
                  className="bg-white dark:bg-gray-900 py-8 w-[48%] px-6 flex-row justify-between items-center transition-colors"
                >
                  <div className="flex flex-col gap-3">
                    <p className="text-gray-600 dark:text-gray-300 text-xl">
                      {item.title}
                    </p>
                    <p className="text-6xl font-bold text-gray-900 dark:text-white">
                      {item.amount}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xl">
                      {item.desc}
                    </p>
                  </div>
                  <Image
                    src={item.img}
                    width={150}
                    height={150}
                    alt={`${item.title} Logo`}
                    className="rounded-full"
                  />
                </Card>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------
// Filter Bar
// ---------------------
function FilterBar() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
      {/* Filters */}
      <div className="flex items-center gap-2">
        {[
          { icon: FilterIcon, label: "Category" },
          { icon: CodeIcon, label: "Language" },
          { icon: PackageIcon, label: "Project Type" },
          { icon: LayoutGridIcon, label: "Platform" },
        ].map(({ icon: Icon, label }) => (
          <DropdownMenu key={label}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-transparent"
              >
                <Icon className="h-4 w-4" />
                {label}
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </div>

      {/* Search */}
      <div className="relative flex-1 w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          type="search"
          placeholder="Search by ID or name"
          className="w-full pl-9"
        />
      </div>

      {/* Sort */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
          >
            <SortAscIcon className="h-4 w-4" />
            Sort by
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Newest</DropdownMenuItem>
          <DropdownMenuItem>Oldest</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

// ---------------------
// Bounty Card
// ---------------------
function BountyCard({ bounty }: { bounty: Bounty }) {
  return (
    <Card className="transition-shadow duration-300 hover:shadow-[0_0_12px_#9438FF]">
      <div className="flex items-center h-16 justify-between w-full">
        {/* Logo + Details */}
        <div className="flex items-center w-1/2 gap-4 px-4">
          <Image
            src={bounty.logo || "/placeholder.svg"}
            width={60}
            height={60}
            alt={`${bounty.name} Logo`}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold">{bounty.name}</h3>
            <p className="text-sm text-gray-500">{bounty.description}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="flex flex-col gap-2 text-xs text-gray-500">
            <span>Started date: {bounty.startedDate}</span>
            <span>Last Updated: {bounty.lastUpdated}</span>
            <span>Total Bugs Found: {bounty.totalBugsFound}</span>
          </div>
          <div className="w-0.5 h-25 bg-gray-300"></div>
          <div className="ml-auto text-lg font-semibold">{bounty.amount}</div>
        </div>
      </div>
    </Card>
  );
}

// ---------------------
// Pagination
// ---------------------
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="flex justify-center gap-2 mt-4">
      <button
        className={`px-4 py-1 rounded-md ${
          currentPage === 1
            ? "border border-gray-200 bg-gray-100 text-gray-400"
            : "text-gray-700 border border-[#9438FF]"
        }`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      <span className="self-center text-sm">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={`px-4 py-1 rounded-md ${
          currentPage === totalPages
            ? "border border-gray-200 bg-gray-100 text-gray-400"
            : "border border-[#9438FF]"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

// ---------------------
// Main Page
// ---------------------
export default function BountiesPage() {
  const bounties: Bounty[] = [
    {
      id: "1",
      logo: "/refrealy-logo.jpg",
      name: "RefRealy",
      description:
        "RefRelay streamlines employee referrals, helping companies hire faster through automated, trackable referral processes.",
      startedDate: "10 May 2021",
      lastUpdated: "15 Sep 2025",
      totalBugsFound: 48,
      amount: "Up to 2000 SOL",
    },
    {
      id: "2",
      logo: "/refrealy-logo.jpg",
      name: "RefRealy",
      description:
        "RefRelay streamlines employee referrals, helping companies hire faster through automated, trackable referral processes.",
      startedDate: "10 May 2021",
      lastUpdated: "15 Sep 2025",
      totalBugsFound: 48,
      amount: "Up to 2000 SOL",
    },
    {
      id: "3",
      logo: "/refrealy-logo.jpg",
      name: "RefRealy",
      description:
        "RefRelay streamlines employee referrals, helping companies hire faster through automated, trackable referral processes.",
      startedDate: "10 May 2021",
      lastUpdated: "15 Sep 2025",
      totalBugsFound: 48,
      amount: "Up to 2000 SOL",
    },
    {
      id: "4",
      logo: "/refrealy-logo.jpg",
      name: "RefRealy",
      description:
        "RefRelay streamlines employee referrals, helping companies hire faster through automated, trackable referral processes.",
      startedDate: "10 May 2021",
      lastUpdated: "15 Sep 2025",
      totalBugsFound: 48,
      amount: "Up to 2000 SOL",
    },
    {
      id: "5",
      logo: "/refrealy-logo.jpg",
      name: "RefRealy",
      description:
        "RefRelay streamlines employee referrals, helping companies hire faster through automated, trackable referral processes.",
      startedDate: "10 May 2021",
      lastUpdated: "15 Sep 2025",
      totalBugsFound: 48,
      amount: "Up to 2000 SOL",
    },
  ];

  const newsItems: NewsItem[] = [
    {
      title: "RefRealy Deposited",
      amount: "20.21 SOL",
      desc: "Bounties of RefRealy are live.",
      img: "/refrealy-logo.jpg",
    },
    {
      title: "PranavRam Earned",
      amount: "2.21 SOL",
      desc: "Bounty from Jobforces.",
      img: "/jpg-example-file-download-500x500.jpg",
    },
    {
      title: "Another Update",
      amount: "5.50 SOL",
      desc: "Biggest bounty payout yet!",
      img: "/companyfundslogo.png",
    },
    {
      title: "New Partner Added",
      amount: "20 SOL",
      desc: "partnership announced.",
      img: "/jpg-example-file-download-500x500.jpg",
    },
    {
      title: "Another Update",
      amount: "5.50 SOL",
      desc: "Biggest bounty !",
      img: "/companyfundslogo.png",
    },
    {
      title: "New Partner Added",
      amount: "20 SOL",
      desc: "partnership announced.",
      img: "/jpg-example-file-download-500x500.jpg",
    },
  ];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(bounties.length / itemsPerPage);
  const currentItems = bounties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-6xl mx-auto py-6 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Bounties</h1>
        <p className="text-gray-500">Welcome back, User/Company</p>
      </div>

      <NewsSlider items={newsItems} />
      <FilterBar />

      <div className="flex flex-col gap-4">
        {currentItems.map((bounty) => (
          <BountyCard key={bounty.id} bounty={bounty} />
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
