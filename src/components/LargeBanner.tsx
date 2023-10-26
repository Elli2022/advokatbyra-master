import React from "react";
import lawFirmBanner from "../images/lawFirmBanner.jpg";
import TextInsideBanner from "./TextInsideBanner";
import { Link } from "react-router-dom";

function LargeBanner() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={lawFirmBanner}
        alt="Stor bannerbild"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "40%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "left",
          backgroundColor: "rgba(0, 0, 0, 0)", // Lätt genomskinlig svart bakgrund för att förbättra textläsbarheten
        }}
      >
        <h2
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            color: "white",
            display: "flex",
            fontFamily: "adobe-caslon-pro,times,georgia,serif",
            fontSize: "calc(56px + 0.5vw)", // Exempel på responsiv fontstorlek
            maxWidth: "800px", // Maxbredd för textbehållaren
            lineHeight: "1.6", // Optimal line-height för läsbarhet
            margin: "26px auto", // Centrera behållaren horisontellt med 'auto'
            padding: "10px", // Utrymme runt texten
          }}
        >
          Welcome to Our Website
        </h2>
        <div style={{ backgroundColor: "transparent" }}>
          <Link to="/about" className="buttonStyle">
            Om oss
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LargeBanner;
