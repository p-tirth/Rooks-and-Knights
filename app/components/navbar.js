import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import king from "../../public/king.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src={king}
                width={50}
                height={50}
                className="rounded-2xl"
                alt="logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:justify-center sm:items-center sm:space-x-8">
              <Link href="/">
                <p className="text-gray-300 hover:text-white cursor-pointer">
                  Home
                </p>
              </Link>
              <Link href="/about">
                <p className="text-gray-300 hover:text-white cursor-pointer">
                  About
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-gray-300 hover:text-white cursor-pointer">
                  Contact
                </p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <Link
                href="/game"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Start
              </Link>
            </div>
          </div>
          {/* Hamburger Menu */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3">
          <Link href="/">
            <p className="block text-gray-300 hover:text-white">Home</p>
          </Link>
          <Link href="/about">
            <p className="block text-gray-300 hover:text-white mt-2">About</p>
          </Link>
          <Link href="/contact">
            <p className="block text-gray-300 hover:text-white mt-2">Contact</p>
          </Link>
        </div>
      )}
    </nav>
  );
}
