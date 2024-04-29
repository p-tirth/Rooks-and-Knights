"use client";
import React, { useState } from "react";
import Chessboard from "chessboardjsx";
// const { Chess } = require("chess.js");
import { Chess } from "chess.js";
import io from "socket.io-client";
import { useSocket } from "../components/socket";


const App = () => {
  const handleOppoMove = (move,socket) => {
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
    socket,
    userMsg,
    setTurn,
    setUserMove,
    sendMsg,
    setUserMsg,
    findMatch,
    sendMove,
  } = useSocket(handleOppoMove);

  const [chess] = useState(
    new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  );
  const [fen, setFen] = useState(chess.fen());

  const handleMove = (move,socket) => {
    if (chess.move(move)) {
      setFen(chess.fen());
    }
    console.log("move handled")
    setUserMove(move);
    setTurn(false);
    sendMove(move,socket);
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
  // const Chessboard = React.lazy(() => import("chessboardjsx"));
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
    value={userMsg}
    onChange={(e) => setUserMsg(e.target.value)}
  />
  <button
    className={`ml-2 px-4 py-2 rounded-md focus:outline-none ${
      color ? 'bg-green-500 text-white' : 'bg-red-500 text-white hover:bg-red-600 focus:bg-red-600'
    }`}
    onClick={color ? sendMsg(userMsg) : findMatch(socket)}
  >
    {color ? 'Send' : 'Find Match'}
  </button>
</div>

    </div>
  );
};
export default App;
