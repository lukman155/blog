'use client';
import ArticleCard from "./Components/ArticleCard";
import useSWR from 'swr'

const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=be73dd1873b24f07a80978fce1435ec0";

const fetcher = async() => {
  const response = await fetch(url);
  const data = await response.json();
  return data
};

const Home = () => {
  const { data, error, mutate } = useSWR('homepage', fetcher);

  const handleReload = () => {
    mutate(); // Trigger data reload
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
        div {
          font-size: 30px;
        }

        .error-wrapper {
          position:relative;
        }

        .error:before, .error:after {
          width:100%;
          position: absolute;
          content: "Failed to load";
          transform: translate(-50%, -50%);
          z-index: -2;
        }
        .error:before {
          top: 49%;
          left: 49%;
          color: rgba(233, 30, 99, 0.8);
          animation: distort1 300ms linear infinite;
          z-index: -1;
        }
        .error:after {
          top: 51%;
          left: 51%;
          color: rgba(3, 169, 244, 0.8);
          animation: distort2 300ms linear infinite;
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

        @keyframes distort1 {
          0% {
            top: 49%;
            left: 49%;
          }
          12.5% {
            top: 49%;
            left: 50%;
          }
          25% {
            top: 49%;
            left: 51%;
          }
          37.5% {
            top: 50%;
            left: 51%;
          }
          50% {
            top: 51%;
            left: 51%;
          }
          62.5% {
            top: 51%;
            left: 50%;
          }
          75% {
            top: 51%;
            left: 49%;
          }
          87.5% {
            top: 50%;
            left: 49%;
          }
          100% {
            top: 49%;
            left: 49%;
          }
        }
        @keyframes distort2 {
          0% {
            top: 51%;
            left: 51%;
          }
          12.5% {
            top: 50%;
            left: 51%;
          }
          25% {
            top: 49%;
            left: 51%;
          }
          37.5% {
            top: 49%;
            left: 50%;
          }
          50% {
            top: 49%;
            left: 49%;
          }
          62.5% {
            top: 50%;
            left: 49%;
          }
          75% {
            top: 51%;
            left: 49%;
          }
          87.5% {
            top: 51%;
            left: 50%;
          }
          100% {
            top: 51%;
            left: 51%;
          }
        }
      `}</style>
    </div>
  );

  if (!data) return (
    <div className="loading-container">
      <span className="loader"></span>
      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center; /* Horizontally center */
          align-items: center; /* Vertically center */
          height: 100vh;
        }
        .loader {
          width: 48px;
          height: 48px;
          border: 5px solid #FFF;
          border-bottom-color: transparent;
          border-radius: 50%;
          display: inline-block;
          box-sizing: border-box;
          animation: rotation 1s linear infinite;
        }

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        } 
      `}</style>
    </div>
  );

  // Filter out removed articles
  const filteredArticles = data.articles.filter(article => article.source.name !== '[Removed]');

  return (
    <section className="container">
      <div className="article-container">
        {filteredArticles.map((article, index) => (
          <ArticleCard article={article} key={index} />
        ))}
      </div>

      <style jsx>{`
        .container {
          margin: 0 auto;
          padding: 0 1rem;
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
