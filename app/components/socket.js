"use client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

// const socket = io.connect("https://rooks-and-knights-socket-server-uw5a.onrender.com");

export function useSocket(handleOppoMove) {
  const [socket,setSocket] = useState(io.connect("https://rooks-and-knights-socket-server-uw5a.onrender.com") )
  const [opponentId, setOpponentId] = useState("");
  const [turn, setTurn] = useState(false);
  const [userMove, setUserMove] = useState("false");
  const [color, setcolor] = useState("");
  const [board, setboard] = useState(false);
  const [matchQueued, setmatchQueued] = useState(false);
  const [userMsg,setUserMsg] = useState("")
  const [opponentMsg,setOpponentMsg] = useState("")
  
  const sendMsg = (userMsg,socket) => {
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
    socket,
    userMsg,
    setTurn,
    setUserMove,
    setUserMsg,
    //setOpponentMove,
    sendMsg:() => sendMsg(userMsg,socket),
    findMatch: () => findMatch(matchQueued, setmatchQueued,socket),
    sendMove: (move) => sendMove(opponentId, move,socket),
  };
}

export function sendMove(opponentId, move,socket) {
  const data = {
    opponentId: opponentId,
    move: move,
  };
  socket.emit("sendMove", data);
  console.log("Move Sent : ", data.move);
}

export function findMatch(matchQueued, setmatchQueued,socket) {
  if (matchQueued) return;
  console.log("finding match for : ", socket.id);
  socket.emit("findMatch");
  setmatchQueued(true);
}


