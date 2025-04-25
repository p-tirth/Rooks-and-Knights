"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChessKnight, FaUserFriends, FaLightbulb, FaTrophy } from "react-icons/fa";

// Import images
import chessCastle from "../public/chessCastle.png";
import chessAiArt1 from "../public/chessAiArt-1.png";
import chessAiArt2 from "../public/chessAiArt-2.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/chessWallArt.jpg')] bg-cover bg-center opacity-10"></div>
        
        {/* Hero content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-3 py-1 text-sm font-semibold bg-blue-900/50 text-blue-300 rounded-full mb-4">
                Online Chess Platform
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                <span className="block">Master the Game of</span>
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Rooks & Knights</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Challenge opponents from around the world, improve your skills, and experience the ultimate chess platform built for players of all levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/game" 
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 rounded-lg text-lg font-medium shadow-lg hover:shadow-blue-500/20 transition-all duration-200"
                >
                  Start Playing
                </Link>
                <Link 
                  href="/about" 
                  className="px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg text-lg font-medium transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute -bottom-8 right-16 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                <Image
                  src={chessCastle}
                  width={600}
                  height={600}
                  alt="Chess castle"
                  className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Rooks and Knights?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform offers a seamless chess experience with modern features designed for players of all skill levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                <FaChessKnight className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Gameplay</h3>
              <p className="text-gray-300">
                Experience seamless real-time chess matches with players from around the world using advanced WebSocket technology.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                <FaUserFriends className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Match Finding</h3>
              <p className="text-gray-300">
                Our intelligent matching system connects you with opponents of similar skill level for balanced and competitive games.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                <FaLightbulb className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Interface</h3>
              <p className="text-gray-300">
                Enjoy a responsive and intuitive chess board with smooth piece movement, legal move validation, and game state monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 text-sm font-semibold bg-indigo-900/50 text-indigo-300 rounded-full mb-2">
                  Modern Experience
                </div>
                <h2 className="text-3xl font-bold">Advanced Chess Platform</h2>
                <p className="text-xl text-gray-300">
                  Built with modern web technologies, our platform offers a smooth, responsive chess experience across all devices.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    <span>Real-time game state synchronization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    <span>Integrated chat with opponents</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    <span>Automatic checkmate and stalemate detection</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    <span>Responsive design for all screen sizes</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link 
                    href="/game"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Start playing now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <Image 
                  src={chessAiArt1} 
                  alt="Chess game visualization" 
                  className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                  width={400}
                  height={400}
                />
                <Image 
                  src={chessAiArt2} 
                  alt="Chess strategy illustration" 
                  className="rounded-lg shadow-lg transform translate-y-8 hover:scale-105 transition-transform duration-500"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 md:flex items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold mb-4">Ready to Play Chess?</h2>
                <p className="text-xl text-gray-300 max-w-2xl">
                  Join our online chess platform now and challenge players from around the world. It's free and no registration required!
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/game"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-blue-900 hover:bg-gray-100 transition-colors font-medium text-lg"
                >
                  <FaTrophy className="mr-2" />
                  Play Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
