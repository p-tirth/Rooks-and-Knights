"use client";
import React, { useState, useEffect } from "react";
import Chessboard from "chessboardjsx";
const { Chess } = require("chess.js");
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const App = () => {

	const [opponentId, setOpponentId] = useState("");
	const [matchQueued, setmatchQueued] = useState(false);
	const [color, setcolor] = useState("");
	const [board, setboard] = useState(false);
  
	const sendMove = async (currentMove) => {
	  const data = {
		opponentId: opponentId,
		move: currentMove,
	  };
	  socket.emit("sendMove", data);
	  console.log("Move Sent : ", data.move);
	};
	const findMatch = () => {
	  if (matchQueued) return;
	  console.log("finding match for : ", socket.id);
	  socket.emit("findMatch");
	  setmatchQueued(true);
	};
	useEffect(() => {
	  socket.on("matchFound", (data) => {
		console.log("Match Found : ", data);
		console.log(data)
    setcolor(data.side)
    setboard(true)
		setOpponentId(data.opponent);
	  });
	  socket.on("opponentMove", (data) => {
		console.log("Opponent Move : ", data.move);
		handleOpponentMove(data.move);
	  });
	}, [socket]);
  

  const [chess] = useState(
    new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  );
  const [fen, setFen] = useState(chess.fen());

  const handleOpponentMove = (move) => {
	console.log("move made by opponent : ", move);
    if (chess.move(move)) {
      setFen(chess.fen());
    }
    console.log("possible moves by user : ", chess.moves());
  }
  const handleMove = (move) => {
    console.log("move made by user : ", move);
    if (chess.move(move)) {
      setFen(chess.fen());
    }
    console.log("possible moves by opponent : ", chess.moves());
	// setCurrentMove(move);
	sendMove(move);
  };
  const RandomMove = () => {
    const moves = chess.moves();
    if (moves.length > 0) {
      const computerMove = moves[Math.floor(Math.random() * moves.length)];
      console.log("computer move : ", computerMove);
      chess.move(computerMove);
      setFen(chess.fen());
    }
  };

  return (
    <div className="flex-center">
      <div>
        <div className="chat-footer">
          <input
            type="text"
            placeholder="Hey..."
            onChange={(event) => {
              setCurrentMove(event.target.value);
            }}
          />
          <button onClick={()=>{console.log(color)}}> show color </button>
          {/* <button onClick={sendMove}>Send;</button> */}
          <button className="border-4 broder-red-300" onClick={findMatch}>
            Find Match
          </button>
        </div>
      </div>
      <h1>Random Chess</h1>
      {board && <Chessboard
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
      />}
    </div>
  );
};

export default App;
