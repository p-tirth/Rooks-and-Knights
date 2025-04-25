"use client";
import React, { useEffect, useState } from "react";
import { useSocket } from "./socket";
import ChessboardComponent from "./ChessboardComponent";
import GameStatus from "./GameStatus";
import ChatComponent from "./ChatComponent";
import MatchFinder from "./MatchFinder";

const Gamefile = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate chessboard size based on screen width
  const getBoardSize = () => {
    if (windowWidth < 640) return Math.min(windowWidth - 40, 320); // Small screens
    if (windowWidth < 1024) return 400; // Medium screens
    return 480; // Large screens
  };

  const {
    opponentId,
    opponentName,
    userName,
    board,
    color,
    matchQueued,
    matchFound,
    turn,
    socket,
    userMsg,
    opponentMsg,
    setTurn,
    setUserMove,
    sendMsg,
    setUserMsg,
    setUserName,
    findMatch,
    sendMove,
  } = useSocket((move) => {
    if (chessboardRef.current) {
      chessboardRef.current.handleOpponentMove(move);
    }
  });

  const chessboardRef = React.useRef(null);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Game card container with shadow and rounded corners */}
      <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden w-full max-w-6xl transition-all duration-300  hover:shadow-blue-500/20">
        {/* Game header area */}
        <div className="p-4 md:p-6 bg-gradient-to-r from-blue-900 to-purple-900 border-b border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {matchFound ? "Game in Progress" : "Online Chess"}
          </h2>
          
          {/* Game Status Component */}
          {opponentName && (
            <GameStatus opponentName={opponentName} turn={turn} />
          )}
        </div>

        {/* Main Game Area - Responsive Layout */}
        <div className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-center p-4 md:p-6 gap-6">
          {/* Chess Board Section */}
          <div className="flex justify-center w-full lg:w-auto">
            {board ? (
              <div className="transition-all duration-300">
                <ChessboardComponent
                  ref={chessboardRef}
                  color={color}
                  turn={turn}
                  sendMove={sendMove}
                  setTurn={setTurn}
                  setUserMove={setUserMove}
                  boardSize={getBoardSize()}
                />
              </div>
            ) : (
              <div className="bg-gray-700/50 rounded-xl w-full max-w-md h-80 sm:h-96 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="text-2xl font-semibold mb-4">Welcome to Rooks and Knights</div>
                  <p className="text-gray-300">Enter your name and click &quot;Find Match&quot; to start playing.</p>
                </div>
              </div>
            )}
          </div>

          {/* Chat and Game Info Section */}
          <div className="w-full lg:w-80 flex flex-col space-y-4">
            {color ? (
              <div className="h-full flex flex-col">
                <ChatComponent
                  userMsg={userMsg}
                  opponentMsg={opponentMsg}
                  setUserMsg={setUserMsg}
                  sendMsg={sendMsg}
                  matchQueued={matchQueued}
                  color={color}
                />
              </div>
            ) : (
              <div className="bg-gray-700/30 rounded-xl p-4 h-full min-h-[240px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-medium mb-2">Chat will appear during the game</div>
                  <p className="text-gray-400 text-sm">Connect with an opponent first</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Match Finding Area */}
        <div className="p-4 md:p-6 bg-gray-900/50">
          {!color ? (
            <MatchFinder
              userName={userName}
              setUserName={setUserName}
              findMatch={() => findMatch(socket)}
              matchQueued={matchQueued}
              matchFound={matchFound}
            />
          ) : (
            <div className="text-center py-2 text-sm text-blue-300">
              <p>You are playing as {color}</p>
              {turn ? 
                <span className="inline-flex items-center bg-green-900/40 text-green-400 px-2 py-1 rounded-full text-xs mt-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                  Your turn
                </span> : 
                <span className="inline-flex items-center bg-red-900/40 text-red-400 px-2 py-1 rounded-full text-xs mt-1">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-1"></span>
                  Opponent&apos;s turn
                </span>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gamefile;
