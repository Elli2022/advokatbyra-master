import React from "react";
import NewsCard from "./NewsCard";

export function NewsSection() {
  // Här definierar jag data för nyhetsartiklarna. Detta skulle kunna hämtas från en API i framtiden.
  const newsData = [
    {
      image: "/path/to/image1.jpg",
      title:
        "CapMan investerar i projekt för logistikanläggning i LogPoint South",
      category: "FASTIGHETSRÄTT",
      date: "11 OKTOBER 2023",
    },
    // Lägger till fler nyhetsartiklar här när jag har dem
  ];

  return (
    <div className="news-section">
      {/* Grundläggande rubrik för nyhetssektionen */}
      <h1>Nyheter</h1>

      {/* Här mappar jag över varje nyhetsartikel och renderar en NewsCard för varje */}
      <div className="news-cards">
        {newsData.map((newsItem, index) => (
          <NewsCard key={index} {...newsItem} />
        ))}
      </div>
    </div>
  );
}

export default { NewsSection };
