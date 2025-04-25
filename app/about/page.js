"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/chessWallArt.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              About Rooks and Knights
            </h1>
            <p className="text-xl text-gray-300 mt-6">
              An open-source online chess platform showcasing modern web development techniques 
              and real-time multiplayer gaming
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 md:py-16 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 text-sm font-semibold bg-blue-900/50 text-blue-300 rounded-full mb-2">
                Open Source Project
              </div>
              <h2 className="text-3xl font-bold text-white">Modern Chess Platform</h2>
              <p className="text-gray-300 text-lg">
                Rooks and Knights is an open-source project designed to demonstrate 
                skills in modern web technologies, particularly real-time applications 
                and interactive gaming. The platform enables users to play chess 
                against each other in real-time with a clean, intuitive interface.
              </p>
              <p className="text-gray-300 text-lg">
                This project was built to showcase technical proficiency in full-stack 
                development, from responsive UI design to backend socket connections 
                for real-time gameplay.
              </p>
              <div className="pt-4">
                <Link 
                  href="http://github.com/p-tirth/rooks-and-Knights/" 
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image 
                src="/arch.png" 
                alt="Project Architecture" 
                width={800} 
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Technology Stack</h2>
            <p className="text-gray-300 text-lg">
              Built with modern technologies for optimal performance and real-time capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Frontend Stack */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Frontend</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span><span className="font-medium">React.js</span> - UI components and state management</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span><span className="font-medium">Next.js</span> - Framework for server-side rendering</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span><span className="font-medium">Tailwind CSS</span> - Utility-first styling</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span><span className="font-medium">Socket.io Client</span> - Real-time communication</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span><span className="font-medium">React Chessboard</span> - Chess UI component</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span><span className="font-medium">Chess.js</span> - Chess game logic</span>
                </li>
              </ul>
            </div>

            {/* Backend Stack */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-4">Backend</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span><span className="font-medium">Node.js</span> - JavaScript runtime</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span><span className="font-medium">Express.js</span> - Web application framework</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span><span className="font-medium">Socket.io</span> - WebSocket implementation</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span><span className="font-medium">Cors</span> - Cross-origin resource sharing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 md:py-20 bg-gradient-to-t from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              <div className="md:col-span-1">
                <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-blue-500/30">
                  <Image
                    src="/main.jpeg"
                    alt="Developer"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h2 className="text-3xl font-bold">About the Developer</h2>
                <p className="text-gray-300 text-lg">
                  I'm a passionate full-stack developer with expertise in building interactive 
                  web applications. Rooks and Knights is one of my projects that demonstrates 
                  my capabilities in creating responsive, real-time applications with modern 
                  web technologies.
                </p>
                <p className="text-gray-300 text-lg">
                  I enjoy tackling complex problems and creating elegant, user-friendly 
                  solutions. Feel free to reach out if you'd like to collaborate or discuss 
                  potential projects.
                </p>
                <div className="pt-4 flex space-x-4">
                  <Link 
                    href="https://github.com/p-tirth"
                    target="_blank" 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
                  >
                    <FaGithub size={22} />
                  </Link>
                  <Link 
                    href="https://www.linkedin.com/in/p-tirth-/" 
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
                  >
                    <FaLinkedin size={22} />
                  </Link>
                  <Link 
                    href="https://x.com/_P_tirth_"
                    target="_blank" 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
                  >
                    <FaTwitter size={22} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Play?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Challenge your friends or find a random opponent for a game of chess.
              </p>
              <Link
                href="/game"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-900 hover:bg-gray-100 transition-colors font-medium text-lg shadow-lg"
              >
                Start Playing
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}