"use client";
// pages/index.js
import { useState } from "react";

import Navbar from "./components/navbar";
import chessCastle from "../public/chessCastle.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
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
          <div className="max-w-screen-lg mx-auto mb-8">
            <Image
              src={chessCastle}
              width={900}
              height={900}
              alt="chess board picture "
            />
          </div>

          {/* Additional Chess Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-10">
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
    </div>
  );
}
