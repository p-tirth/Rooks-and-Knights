"use client";
import React from "react";

const GameStatus = ({ opponentName, turn }) => {
  return (
    <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-bold mr-2 shadow-md">
          {opponentName ? opponentName.charAt(0).toUpperCase() : "?"}
        </div>
        <div>
          <p className="font-semibold text-gray-100">
            Playing against <span className="text-blue-300">{opponentName}</span>
          </p>
          <p className="text-xs text-gray-400 mt-0.5">Good luck and have fun!</p>
        </div>
      </div>
      
      <div className="mt-2 sm:mt-0">
        <div className={`
          px-3 py-1 rounded-full text-sm font-medium 
          ${turn 
            ? "bg-green-500/20 text-green-300 border border-green-500/30" 
            : "bg-red-500/20 text-red-300 border border-red-500/30"}
          flex items-center
        `}>
          <span className={`
            w-2 h-2 rounded-full mr-2
            ${turn ? "bg-green-400 animate-pulse" : "bg-red-400"}
          `}></span>
          {turn ? "Your turn" : "Opponent's turn"}
        </div>
      </div>
    </div>
  );
};

export default GameStatus;