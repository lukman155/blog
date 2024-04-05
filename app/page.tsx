'use client';

import ArticleModal from "./Components/ArticleModel";
import { getCategorisedArticles } from "./dummyData";

const Home = () => {
  const articles = getCategorisedArticles();

  console.log(articles);
  return (
    <section className="container">
      <header className="title">
        <h1>minimal blog</h1>
      </header>
      <section className="article-section">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleModal
              category={article}
              articles={articles[article]}
              key={article}
            />
          ))}
      </section>

      {/* Styled-JSX Styles */}
      <style jsx>{`
        .container {
          margin: 0 auto;
          max-width: 800px;
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
          gap: 4rem;
          margin-bottom: 5rem;
        }
        .title {
          font-weight: 300;
          font-size: 2rem;
          color: #333333;
          text-align: center;
        }
        .article-section {
          padding: 1rem;
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        @media (min-width: 580px) {
          .title {
          font-size: 4rem;
        }
          .article-section {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1080px) {
          .article-section {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
