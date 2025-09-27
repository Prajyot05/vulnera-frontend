"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming an Input component exists
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Assuming Select components exist
import { cn } from "@/lib/utils";

// Sample data for user submissions
const submissions = [
  {
    company: "RefRelay",
    vulnerability: "Buffer Overflow",
    status: "In Process",
    bounty: "NULL",
  },
  {
    company: "Jobforces",
    vulnerability: "UI Error",
    status: "In Process",
    bounty: "NULL",
  },
  {
    company: "Jobforces",
    vulnerability: "UI Error",
    status: "In Process",
    bounty: "NULL",
  },
  {
    company: "TechBang",
    vulnerability: "Cross-Site Scripting",
    status: "Approved",
    bounty: "5 SOL",
  },
  {
    company: "TechBang",
    vulnerability: "Buffer Overflow",
    status: "Approved",
    bounty: "5 SOL",
  },
  {
    company: "Cybersect",
    vulnerability: "UI Error",
    status: "Rejected",
    bounty: "NULL",
  },
  {
    company: "Cybersect",
    vulnerability: "SQL Injection",
    status: "Rejected",
    bounty: "NULL",
  },
];

// Helper function to get status badge variant
const getStatusVariant = (status: string) => {
  switch (status) {
    case "Approved":
      return "success";
    case "In Process":
      return "outline";
    case "Rejected":
      return "destructive";
    default:
      return "default";
  }
};

// Define the UserDashboard component
export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to show per page

  // Use useMemo to filter and search the submissions data
  const filteredSubmissions = useMemo(() => {
    return submissions.filter((submission) => {
      // Status filter logic
      const statusMatch =
        statusFilter === "All" || submission.status === statusFilter;

      // Search term logic (case-insensitive search across company and vulnerability)
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const searchMatch =
        submission.company.toLowerCase().includes(lowerCaseSearchTerm) ||
        submission.vulnerability.toLowerCase().includes(lowerCaseSearchTerm);

      return statusMatch && searchMatch;
    });
  }, [searchTerm, statusFilter]); // Re-run the calculation when these states change

  // Calculate pagination
  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);
  const paginatedSubmissions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredSubmissions.slice(startIndex, endIndex);
  }, [filteredSubmissions, currentPage]);

  // Get unique statuses for the filter dropdown
  const uniqueStatuses = useMemo(() => {
    const statuses = submissions.map((s) => s.status);
    return ["All", ...Array.from(new Set(statuses))];
  }, []);
  0;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back, User</p>
      </div>

      <div className="space-y-2">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Funds Management</h2>
          <Card className="w-1/2">
            <CardContent className="space-y-0.5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-10px font-medium text-gray-500">
                    Solana Balance
                  </p>
                  <div className="text-3xl font-bold">20.21334 SOL</div>
                </div>
                {/* NOTE: You will need to ensure '/companyfundslogo.png' exists for this to work */}
                <Image
                  src="/companyfundslogo.png"
                  alt="Solana Logo"
                  width={125}
                  height={100}
                  className="rounded-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* --- */}

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Submissions</h2>

        {/* Filter and Search Controls */}
        <div className="flex gap-4">
          {/* Search Input */}
          <Input
            placeholder="Search company or vulnerability..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />

          {/* Status Filter Dropdown */}
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              {uniqueStatuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Submissions Table */}
        <div className="rounded-md border border-border bg-card">
          <Table className="rounded-md h-60">
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="text-center text-foreground">
                  Company
                </TableHead>
                <TableHead className="text-center text-foreground">
                  Vulnerability
                </TableHead>
                <TableHead className="text-center text-foreground">
                  Status
                </TableHead>
                <TableHead className="text-center text-foreground">
                  Bounty
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedSubmissions.length > 0 ? (
                paginatedSubmissions.map((submission, index) => (
                  <TableRow
                    key={index}
                    className="cursor-pointer hover:bg-muted/70 transition-colors"
                    onClick={() =>
                      (window.location.href = `/dashboard/submission/${index}`)
                    }
                  >
                    <TableCell className="font-medium text-center text-foreground">
                      {submission.company}
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      {submission.vulnerability}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant={getStatusVariant(submission.status)}>
                        {submission.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center text-foreground">
                      {submission.bounty}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="h-24 text-center text-muted-foreground"
                  >
                    No submissions found matching your criteria.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination Controls */}
          {filteredSubmissions.length > 0 && (
            <div className="my-4 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className={cn(
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      )}
                    />
                  </PaginationItem>

                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i + 1}>
                      <PaginationLink
                        onClick={() => setCurrentPage(i + 1)}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      className={cn(
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      )}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
