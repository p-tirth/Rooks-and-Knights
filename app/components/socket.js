"use client";
import { useEffect, useState } from "react";
import socketService from "./SocketService";

export function useSocket(handleOppoMove) {
  // State management
  const [opponentId, setOpponentId] = useState("");
  const [opponentName, setOpponentName] = useState("");
  const [userName, setUserName] = useState("");
  const [turn, setTurn] = useState(false);
  const [userMove, setUserMove] = useState(false);
  const [color, setColor] = useState("");
  const [board, setBoard] = useState(false);
  const [matchQueued, setMatchQueued] = useState(false);
  const [matchFound, setMatchFound] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  const [opponentMsg, setOpponentMsg] = useState("");
  
  useEffect(() => {
    // Get socket instance from our service
    const socket = socketService.getSocket();

    // Set up event listeners
    socket.on("matchFound", (data) => {
      setMatchFound(true);
      console.log("Match Found : ", data);
      setColor(data.side);
      if (data.side === "white") setTurn(true);
      setBoard(true);
      setOpponentId(data.opponent);
      setOpponentName(data.opponentName);
    });
    
    socket.on("opponentMove", (data) => {
      console.log("Opponent Move : ", data.move);
      setTurn(true);
      handleOppoMove(data.move);
    });
    
    socket.on("opponentMsg", (msg) => {
      setOpponentMsg(msg);
      console.log(msg);
    });

    // Clean up event listeners on component unmount
    return () => {
      socket.off("matchFound");
      socket.off("opponentMove");
      socket.off("opponentMsg");
    };
  }, [handleOppoMove]);

  // Function to find a match
  const findMatch = () => {
    try {
      if (matchQueued) return;
      if (userName === "") {
        alert("Please Enter Your Name");
        return;
      }
      
      socketService.findMatch(userName);
      setMatchQueued(true);
    } catch (error) {
      alert(error.message);
    }
  };
  
  // Function to send a move
  const sendMove = (move) => {
    socketService.sendMove(opponentId, move);
  };
  
  // Function to send a chat message
  const sendMsg = (msg) => {
    if (msg.trim() === "") return;
    socketService.sendMessage(opponentId, msg);
    setUserMsg("");
  };

  return {
    opponentId,
    opponentName,
    userName,
    userMove,
    board,
    color,
    matchQueued,
    matchFound,
    turn,
    socket: socketService.getSocket(),
    userMsg,
    opponentMsg,
    setTurn,
    setUserMove,
    setUserMsg,
    setUserName,
    findMatch,
    sendMove,
    sendMsg
  };
}


