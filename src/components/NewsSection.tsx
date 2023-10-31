import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import "whatwg-fetch";

const API_KEY = "d83b8fc981ee4157944ca434e8a4c295";
const BASE_URL =
  "https://newsapi.org/v2/everything?q=juridik&top-headlines?country=se"; // Använder top-headlines för att få de senaste nyheterna
const SEARCH_TERMS = [
  "finans",
  "juridik",
  "fastighetsrätt",
  "familjerätt",
  "skatterätt",
  "bank",
];

type Article = {
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  category?: string;
};

interface NewsCardProps {
  image?: string;
  title: JSX.Element | string; // Uppdaterad prop typ
  category: string;
  date?: string;
}

export function NewsSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Fetching articles...");
    fetchArticles();
  }, []);

  function fetchArticles() {
    const url = `${BASE_URL}&apiKey=${API_KEY}`;

    fetch(url)
      .then(status)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        if (data.articles && Array.isArray(data.articles)) {
          setArticles(data.articles);
        } else {
          setError("Inga artiklar hittades.");
        }
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setError(
          "Det uppstod ett fel när vi försökte hämta artiklar. Försök igen senare."
        );
      });
  }

  function status(res: Response) {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res;
  }

  return (
    <div className="wrapper">
      <h2
        className="section-title"
        style={{
          color: "white",
          fontFamily: "Caslon224Std-Book,times,georgia,serif",
          fontWeight: 300,
          lineHeight: 1.2,
          fontSize: "34px",
          padding: "21px",
        }}
      >
        Nyheter
      </h2>
      <div className="news-section">
        {error ? (
          <p>{error}</p>
        ) : (
          <div className="news-grid">
            {articles.map((article, index) => (
              <div className="news-card" key={article.url ?? index}>
                <img
                  src={article.urlToImage ?? "fallback-image-url-här"}
                  alt={article.title}
                />
                <h2>
                  <a
                    href={article.url ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title ?? "NYHETER"}
                  </a>
                </h2>
                <p>
                  {article.category ?? "Okategoriserad"} •{" "}
                  {article.publishedAt ?? "datum"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsSection;
