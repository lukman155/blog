'use client';
import { useEffect, useState } from "react";
import ArticleModal from "./Components/ArticleCard";
import useSWR from 'swr'
import Link from "next/link";


const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=be73dd1873b24f07a80978fce1435ec0";

const fetcher = async() => {
  const response = await fetch(url);
  const data = await response.json();
  return data
};

const Home = () => {
  const { data, error } = useSWR('homepage', fetcher);
  
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <section className="container">
        <div className="article-container">
          {data.articles.map((article, index) => (
            <ArticleModal article={article} key={index} />
          ))}
      </div>

      {/* Styled-JSX Styles */}
      <style jsx>{`
        .container {
          margin: 0 auto;
          padding: 1rem;
          max-width: 1200px;
        }

        .article-container {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 2rem;
        }

        @media (min-width: 580px) {
        .title {
          font-size: 2rem;
        }
          .article-container {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1080px) {
          .article-container {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
