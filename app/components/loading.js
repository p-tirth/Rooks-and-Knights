import React from "react";
import "@dotlottie/player-component/dist/dotlottie-player.mjs";

function Loading() {
  return (
    <div className="flex flex-col items-center ">
      <div className="bg-white flex justify-center items-center p-3 rounded-full w-fit">
        <div>Loading ....</div>
        <dotlottie-player
          src="https://lottie.host/7d457792-b947-4f3a-b5cf-c6e60b62d662/2agfk3d8Tj.json"
          background="#FFFFFF"
          speed="1"
          style={{ width: "50px", height: "50px" }}
          direction="1"
          playMode="normal"
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
}

export default Loading;
