"use client";
// pages/index.js

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="/logo.svg"
                  alt="Logo"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="/logo.svg"
                  alt="Logo"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:justify-center sm:items-center sm:space-x-8 ">
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
              <div className="sm:flex sm:justify-center sm:items-center">
                <Link href="/game" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Start
                </Link>
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
              <p className="block text-gray-300 hover:text-white mt-2">
                Contact
              </p>
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Play Chess Online</h1>
            <p className="text-lg mb-8">
              Challenge opponents, improve your skills, and have fun!
            </p>
          </div>

          {/* Chess Board Illustration */}
          <div className="max-w-lg mx-auto mb-8">
            <img src="/chessboard.svg" alt="Chess Board" className="mx-auto" />
          </div>

          {/* Additional Chess Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-800 shadow-md p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Learn Chess Strategies</h2>
              <p className="text-gray-300">
                Explore various strategies, openings, and tactics to improve
                your game.
              </p>
            </div>
            <div className="bg-gray-800 shadow-md p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Join Tournaments</h2>
              <p className="text-gray-300">
                Compete against players from around the world in exciting
                tournaments.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 ChessMaster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
