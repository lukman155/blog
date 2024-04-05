import Link from "next/link";
import type { ArticleItem } from "../types";

interface Props {
  category: string;
  articles: ArticleItem[];
}

const ArticleModal = ({ category, articles }: Props) => {
  return (
    <div className="container">
      <h2 className="title">{category}</h2>
      <div className="article-links">
        {articles.map((article, id) => (
          <Link href={`/${article.id}`} key={id}>
            <span className="article-link">{article.title}</span>
          </Link>
        ))}
      </div>
      {/* Styled-JSX Styles */}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          color: #333333;
        }
        .article-links {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
        .article-link {
          font-family: 'Poppins', sans-serif;
          font-size: 1.25rem;
          color: #333333;
          transition: color 0.15s ease-in-out;
        }
        .article-link:hover {
          color: #ffad1f; /* Amber color */
        }
      `}</style>
    </div>
  );
};

export default ArticleModal;