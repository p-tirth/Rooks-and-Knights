"use client";

import React from "react";
import Chessboard from "chessboardjsx";
import { Chess } from "chess.js";

export default function Home() {
	const [position, setPosition] = React.useState(
		"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
	);
	const chess = new Chess(position);

	const handleClick = (square) => {
		const move = chess.move({
			from: square,
			to: square,
		});

		if (move) {
			setPosition(chess.fen());
		}
	};

	return (
		<div>
			<Chessboard position={position} onClick={handleClick} />
		</div>
	);
}
