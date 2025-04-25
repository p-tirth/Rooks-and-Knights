"use client";
import dynamic from 'next/dynamic';
import React from 'react';
import Head from 'next/head';

const DynamicGamefile = dynamic(() => import('../components/gamefile'), {
  ssr: false
});

export default function GamePage() {
  return (
    <>
      <Head>
        <title>Rooks and Knights - Game</title>
        <meta name="description" content="Play chess online with Rooks and Knights" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="sr-only">Rooks and Knights Chess Game</h1>
          <DynamicGamefile />
        </main>
      </div>
    </>
  );
}
