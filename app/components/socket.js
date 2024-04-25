"use client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export function sendMove(opponentId, move) {
  const data = {
    opponentId: opponentId,
    move: move,
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

export function useSocket(handleOppoMove) {
  const [opponentId, setOpponentId] = useState("");
  const [turn, setTurn] = useState(false);
  const [userMove, setUserMove] = useState("false");
  const [color, setcolor] = useState("");
  const [board, setboard] = useState(false);
  const [matchQueued, setmatchQueued] = useState(false);
  const [userMsg,setUserMsg] = useState("")
  const [opponentMsg,setOpponentMsg] = useState("")
  
  const sendMsg = (userMsg) => {
    socket.emit("sendMsg",userMsg)
  }

  useEffect(() => {
    socket.on("matchFound", (data) => {
      console.log("Match Found : ", data);
      setcolor(data.side);
      if (data.side === "white") setTurn(true);
      setboard(true);
      setOpponentId(data.opponent);
    });
    socket.on("opponentMove", (data) => {
      console.log("Opponent Move : ", data.move);
      setTurn(true)
      handleOppoMove(data.move);
    });
    socket.on("userMsg",(data) => {
      setUserMsg(data)
    })

    return () => {
      // Clean up socket listeners
      socket.off("matchFound");
      socket.off("opponentMove");
    };
  }, []);

  return {
    opponentId,
    userMove,
    //opponentMove,
    board,
    color,
    matchQueued,
    turn,
    setTurn,
    setUserMove,
    //setOpponentMove,
    sendMsg:() => sendMsg(userMsg),
    findMatch: () => findMatch(matchQueued, setmatchQueued),
    sendMove: (move) => sendMove(opponentId, move),
  };
}