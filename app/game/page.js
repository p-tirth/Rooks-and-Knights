"use client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export default function page() {
  const [opponentId, setOpponentId] = useState("");
  const [currentMove, setCurrentMove] = useState("");
  const [matchQueued, setmatchQueued] = useState(false);

  const sendMove = async () => {
    const move = {
      opponentId: opponentId,
      move: currentMove,
    };
  };
  const findMatch = () => {
    if(matchQueued) return;
    console.log("finding match for : ",socket.id);
    socket.emit("findMatch");
    setmatchQueued(true);
  }

  return (
    <div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMove(event.target.value);
          }}
        />
        <button onClick={sendMove}>&#9658;</button>
        <button className="border-4 broder-red-300" onClick={findMatch}>Find Match</button>
      </div>
    </div>
  );
}
