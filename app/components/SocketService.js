"use client";
import io from "socket.io-client";

// A singleton service to manage socket connections
class SocketService {
  constructor() {
    this.socket = null;
  }

  // Get the socket instance, creating it if it doesn't exist
  getSocket() {
    if (!this.socket) {
    //   this.socket = io.connect("https://rooks-and-knights-socket-server-uw5a.onrender.com");
      // For local development:
      this.socket = io.connect("http://localhost:3001/");
    }
    return this.socket;
  }

  // Send a move to the opponent
  sendMove(opponentId, move) {
    const data = {
      opponentId: opponentId,
      move: move,
    };
    this.getSocket().emit("sendMove", data);
    console.log("Move Sent: ", data.move);
  }

  // Send a chat message to the opponent
  sendMessage(opponentId, msg) {
    const data = {
      opponentId: opponentId,
      msg: msg,
    };
    this.getSocket().emit("sendMsg", data);
  }

  // Request to find a match
  findMatch(name) {
    if (!name || name.trim() === "") {
      throw new Error("Please enter a name");
    }
    console.log("Finding match for: ", this.getSocket().id);
    this.getSocket().emit("findMatch", name);
  }

  // Disconnect socket
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

// Export as singleton
const socketService = new SocketService();
export default socketService;