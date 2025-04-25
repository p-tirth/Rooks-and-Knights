"use client";
import React from "react";
import Loading from "./loading";

const MatchFinder = ({ 
  userName, 
  setUserName, 
  findMatch, 
  matchQueued, 
  matchFound 
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && userName.trim() !== '') {
      findMatch();
    }
  };

  return (
    <div className="w-full">
      {!matchQueued ? (
        <div className="flex flex-col">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-blue-300 mb-2">Ready to play?</h3>
            <p className="text-sm text-gray-300 mb-4">Enter your name and find an opponent to start playing.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-3 pr-10 bg-gray-700/70 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              {userName && (
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  onClick={() => setUserName("")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
            <button
              disabled={!userName.trim()}
              className={`px-6 py-3 rounded-lg font-medium text-white flex items-center justify-center transition-all whitespace-nowrap ${
                userName.trim() 
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-blue-500/20" 
                  : "bg-gray-600 cursor-not-allowed opacity-70"
              }`}
              onClick={findMatch}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Find Match
            </button>
          </div>
        </div>
      ) : !matchFound ? (
        <div className="w-full flex flex-col items-center py-6">
          <Loading />
          <div className="text-blue-300 font-medium mt-4 flex flex-col items-center">
            <div className="text-xl">Finding an opponent</div>
            <div className="text-gray-400 text-sm mt-2">Searching for players as <span className="text-white font-semibold">{userName}</span></div>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <div className="bg-blue-500 animate-pulse w-2 h-2 rounded-full"></div>
              <div className="bg-blue-500 animate-pulse w-2 h-2 rounded-full" style={{ animationDelay: '0.2s' }}></div>
              <div className="bg-blue-500 animate-pulse w-2 h-2 rounded-full" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MatchFinder;