"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Chess piece animation */}
        <div className="flex space-x-4">
          {/* Pawn */}
          <div className="animate-bounce" style={{ animationDelay: '0ms' }}>
            <div className="w-5 h-5 bg-white rounded-full"></div>
            <div className="w-3 h-4 mx-auto -mt-1 bg-white rounded-b-sm"></div>
          </div>
          
          {/* Knight */}
          <div className="animate-bounce" style={{ animationDelay: '150ms' }}>
            <div className="w-5 h-5 bg-blue-400 rounded-tr-lg rounded-tl-lg"></div>
            <div className="w-3 h-4 mx-auto -mt-1 bg-blue-400 rounded-b-sm"></div>
          </div>
          
          {/* Bishop */}
          <div className="animate-bounce" style={{ animationDelay: '300ms' }}>
            <div className="w-5 h-5 bg-indigo-400 rounded-full"></div>
            <div className="w-4 h-2 mx-auto -mt-1 bg-indigo-400"></div>
          </div>
        </div>
        
        {/* Shadow */}
        <div className="flex space-x-4 mt-1">
          <div className="w-5 h-[3px] bg-gray-700 rounded-full animate-pulse"></div>
          <div className="w-5 h-[3px] bg-gray-700 rounded-full animate-pulse" 
               style={{ animationDelay: '150ms' }}></div>
          <div className="w-5 h-[3px] bg-gray-700 rounded-full animate-pulse" 
               style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
