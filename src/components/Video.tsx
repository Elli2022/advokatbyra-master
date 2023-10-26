import React from "react";
import BackgroundVideo from "../videos/BackgroundVideo.mp4";

function Video() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%", // Ersätt med din önskade höjd
        overflow: "hidden",
      }}
    >
      <video
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        autoPlay
        loop
        muted
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0)", // Lätt genomskinlig svart bakgrund för att förbättra textläsbarheten
        }}
      >
        <h1 style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
          Welcome to Our Website
        </h1>
        <p style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
          Your amazing subtitle here
        </p>
      </div>
    </div>
  );
}

export default Video;
