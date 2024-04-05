'use client';

import ArticleItemList from "@/components/ArticleListItem";
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
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article}
            />
          ))}
      </section>

      {/* Styled-JSX Styles */}
      <style jsx>{`
        .container {
          margin-left: auto;
          margin-right: auto;
          width: 91.666667%;
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
          gap: 4rem;
          margin-bottom: 5rem;
        }
        .title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 4rem;
          color: #333333;
          text-align: center;
        }
        .article-section {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .article-section > :not([hidden]) ~ :not([hidden]) {
          margin-top: 0;
        }
      `}</style>
    </section>
  );
};

export default Home;
