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
    <div className="news-section">
      <h1>Nyheter</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="news-cards">
          {articles.map((article, index) => (
            <NewsCard
              key={article.url ?? index}
              image={article.urlToImage ?? "fallback-image-url-här"}
              title={
                <a
                  href={article.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title ?? "NYHETER"}
                </a>
              }
              category={article.category ?? "Okategoriserad"}
              date={article.publishedAt ?? "datum"}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsSection;
