"use client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export function sendMove(opponentId, currentMove) {
  const data = {
    opponentId: opponentId,
    move: currentMove,
  };
  socket.emit("sendMove", data);
  console.log("Move Sent : ", data.move);
}

export function findMatch(matchQueued, setmatchQueued) {
  if (matchQueued) return;
  console.log("finding match for : ", socket.id);
  socket.emit("findMatch");
  setmatchQueued(true);
}

export function useSocket() {
  const [opponentId, setOpponentId] = useState("");
  const [currentMove, setCurrentMove] = useState("");
  const [opponentMove, setOpponentMove] = useState("");
  const [matchQueued, setmatchQueued] = useState(false);

  useEffect(() => {
    socket.on("matchFound", (data) => {
      console.log("Match Found : ", data);
      setOpponentId(data.opponent);
    });
    socket.on("opponentMove", (data) => {
      console.log("Opponent Move : ", data.move);
      setOpponentMove(data.move);
    });

    return () => {
      // Clean up socket listeners
      socket.off("matchFound");
      socket.off("opponentMove");
    };
  }, []);

  return {
    opponentId,
    currentMove,
    matchQueued,
    setCurrentMove,
    findMatch: () => findMatch(matchQueued, setmatchQueued),
    sendMove: () => sendMove(opponentId, currentMove),
  };
}

export default function Page() {
  const { opponentId, currentMove, matchQueued, setCurrentMove, findMatch } = useSocket();

  return (
    <div>
      <h1>Socket Connection Page</h1>
      <p>Opponent ID: {opponentId}</p>
      <p>Current Move: {currentMove}</p>
      <button onClick={findMatch} disabled={matchQueued}>
        Find Match
      </button>
      <button onClick={() => sendMove(opponentId, currentMove)}>Send Move</button>
    </div>
  );
}
