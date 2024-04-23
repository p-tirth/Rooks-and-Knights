"use client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export default function page() {


  
  const [opponentId, setOpponentId] = useState("");
  const [currentMove, setCurrentMove] = useState("");
  const [matchQueued, setmatchQueued] = useState(false);

  const sendMove = async () => {
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
      setOpponentId(data.opponent);
    });
    socket.on("opponentMove", (data) => {
      console.log("Opponent Move : ", data.move);
    });
  }, [socket]);

  return (
    <div>
      <div className="chat-footer">
        {/* <div>i am :  {socket.id}</div> */}
        <input
          type="text"
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMove(event.target.value);
          }}
        />
        <button onClick={sendMove}>Send;</button>
        <button className="border-4 broder-red-300" onClick={findMatch}>
          Find Match
        </button>
      </div>
    </div>
  );
}
