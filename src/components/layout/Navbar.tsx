"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const navLinks = [
  { name: "Features", href: "#home" },
  { name: "Pricing", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Contact Us", href: "/contactus" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Karyavaar
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 transition hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 rounded-full border px-4 py-2 md:flex">
          <Link href="/" className="text-[#006DDF]">
            Check Eligibility
          </Link>
          <Link href="/login">
            <Button variant="primary" className="rounded-full">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Buttons */}
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/" className="text-grey-700">
                Check Eligibility
              </Link>
              <Link href="/login">
                <Button variant="primary" className="w-full rounded-full">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
