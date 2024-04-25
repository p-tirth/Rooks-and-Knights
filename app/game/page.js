"use client";
import React, { useState } from "react";
import Chessboard from "chessboardjsx";
const { Chess } = require("chess.js");
import io from "socket.io-client";
import { useSocket } from "../components/socket";

const socket = io.connect("http://localhost:3001");

const App = () => {
  const handleOppoMove = (move) => {
    if (chess.move(move)) {
      setFen(chess.fen());
    } else {
      console.log("Invalid Move");
    }
  };
  const {
    opponentId,
    board,
    color,
    matchQueued,
    turn,
    setTurn,
    setUserMove,
    sendMsg,
    findMatch,
    sendMove,
  } = useSocket(handleOppoMove);

  const [chess] = useState(
    new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  );
  const [fen, setFen] = useState(chess.fen());

  const handleMove = (move) => {
    if (chess.move(move)) {
      setFen(chess.fen());
    }
    setUserMove(move);
    setTurn(false);
    sendMove(move);
  };

  // const RandomMove = () => {
  //   const moves = chess.moves();
  //   if (moves.length > 0) {
  //     const computerMove = moves[Math.floor(Math.random() * moves.length)];
  //     console.log("computer move : ", computerMove);
  //     chess.move(computerMove);
  //     setFen(chess.fen());
  //   }
  // };

  return (
    <div className="flex-center">
      <div>opponentId : {opponentId}</div>
      {board && (
        <Chessboard
          width={400}
          position={fen}
          onDrop={(move) =>
            handleMove({
              from: move.sourceSquare,
              to: move.targetSquare,
              promotion: "q",
            })
          }
          orientation={color}
          dropOffBoard={"snapback"}
          draggable={turn}
        />
      )}
<div className="flex items-center justify-between p-4 border-t border-gray-200">
  <input
    type="text"
    placeholder="Hey..."
    className="w-full p-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    value={msg}
    onChange={(e) => setMsg(e.target.value)}
  />
  <button
    className={`ml-2 px-4 py-2 rounded-md focus:outline-none ${
      color ? 'bg-green-500 text-white' : 'bg-red-500 text-white hover:bg-red-600 focus:bg-red-600'
    }`}
    onClick={color ? sendMsg(msg) : findMatch}
  >
    {color ? 'Send' : 'Find Match'}
  </button>
</div>

    </div>
  );
};
export default App;
