"use client";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import Chessboard from "chessboardjsx";
import { Chess } from "chess.js";

const ChessboardComponent = forwardRef(({ color, turn, sendMove, setTurn, setUserMove, boardSize = 400 }, ref) => {
  const [chess] = useState(
    new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  );
  const [fen, setFen] = useState(chess.fen());

  // Expose methods to parent component via ref
  useImperativeHandle(ref, () => ({
    handleOpponentMove: (move) => {
      if (chess.move(move)) {
        setFen(chess.fen());
      } else {
        console.log("Invalid Move");
      }
      checkGameStatus(chess, color, turn);
    }
  }));

  const checkGameStatus = (chess, color) => {
    // check all game end conditions
    if (chess.isCheckmate()) {
      alert("Checkmate");
      if (turn) {
        alert("You Win");
      } else {
        alert("You Loose");
      }
    } else if (chess.isDraw()) {
      alert("Stalemate");
    } else if (chess.inCheck()) {
      alert("Check");
    }
  };

  const handleMove = (move) => {
    try {
      const result = chess.move(move);
      if (result === null) {
        throw new Error("Invalid Move");
      } else {
        setFen(chess.fen());
      }
      console.log("move handled");
      setUserMove(move);
      setTurn(false);
      sendMove(move);
      checkGameStatus(chess, color);
    } catch (error) {
      alert("Invalid Move");
    }
  };

  // Enhanced styling for the chessboard
  const boardStyle = {
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease",
  };

  return (
    <div className="rounded-xl overflow-hidden" style={{ width: boardSize, height: boardSize }}>
      <Chessboard
        width={boardSize}
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
        boardStyle={boardStyle}
        lightSquareStyle={{ backgroundColor: "#f0d9b5" }}
        darkSquareStyle={{ backgroundColor: "#b58863" }}
      />
    </div>
  );
});

ChessboardComponent.displayName = "ChessboardComponent";

export default ChessboardComponent;