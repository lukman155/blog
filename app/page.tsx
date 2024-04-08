'use client';
// import ArticleCard from "./Components/ArticleCard";
import { ArticleItem } from "./types/index";
import useSWR from 'swr';
import dynamic from 'next/dynamic'

// Server Component:
const ArticleCard = dynamic(() => import('./Components/ArticleCard'), { ssr: false})


const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=be73dd1873b24f07a80978fce1435ec0";

const fetcher = async() => {
  const response = await fetch(url);
  const data = await response.json();
  return data
};

const Home = () => {
  const { data, error, mutate } = useSWR('homepage', fetcher);

  const handleReload = () => {
    mutate();
  };

  if (error) return (
    <div className="error-container">
      <div className="error-wrapper">
        <div className="error">Failed to load</div>
      </div>
      <button onClick={handleReload}>Reload</button>
      <style jsx>{`

        .error-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center; /* Horizontally center */
          align-items: center; /* Vertically center */
          height: 70vh;
        }

        .error {
          font-size: 30px;
        }

        button {
          background-color: white;
          padding: .5rem 2.5rem;
          border-radius: 20px;
          border: none;
          outline: 2px solid #333;
          outline-offset: 0px;
          font-size: 15px;
        }

        button:hover {
          outline-offset: 8px;
        }

      `}</style>
    </div>
  );

  if (!data) return (
    <div className="loading-container">
      <span className="loader"></span>
    </div>
  );

  // Filter out removed articles
  const filteredArticles = data.articles.filter((article: { source: { name: string; }; }) => article.source.name !== '[Removed]');

  return (
    <section className="container">
      <div className="article-container">
        {filteredArticles.map((article: ArticleItem , index: number) => (
          <ArticleCard key={index} index={index} article={article} />
        ))}
      </div>

      <style jsx>{`
        .container {
          margin: 0 auto;
          padding: 1rem;
          max-width: 1200px;
          position: relative
        }

        .article-container {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 2rem;
        }

        @media (min-width: 680px) {
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
