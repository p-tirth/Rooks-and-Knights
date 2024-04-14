"use client"

import { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function Home() {
	const chess = new Chess()

	
	while (!chess.isGameOver()) {
	  const moves = chess.moves()
	  const move = moves[Math.floor(Math.random() * moves.length)]
	  chess.move(move)
	}
	console.log(chess.pgn())
}