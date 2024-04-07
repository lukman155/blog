import Link from "next/link";
import type { ArticleItem } from "../types";
import Image from 'next/image'
import { useState } from "react";

interface Props {
  article: ArticleItem[];
  key: number;
}
function formatDateTime(timestamp: string) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });


  return `${formattedHours}:${formattedMinutes}${period} • ${formattedDate}`;
}

function shortenAuthor(author: string) {
  const maxLength = 20;
  if (!author) return 'Unknown';
  return author.length > maxLength ? author.slice(0, maxLength) + '...' : author;
}
const ArticleCard = ({ article, key }: Props) => {

  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div key={key} className="modal">
        <div className='modal-container'>

          <div className="img-wrapper">
          {article.urlToImage ? (
            <Image
              src={article.urlToImage}
              alt={article.title}
              fill={true}
            />
          ) : (
            <Image
              src="/placeholder.jpg"
              alt={article.title}
              fill={true}
            />
          )}
        </div>

        <button onClick={toggleBookmark}>
        {isBookmarked ? "Remove Bookmark" : "Bookmark"}
      </button>

          <p className="date">
            {shortenAuthor(article.author)} • {formatDateTime(article.publishedAt)}
          </p>
          <h3 className="title">{article.title}</h3>
          <p className="desc">{article.description}</p>
        </div>
      <div className="article-links">
        
    
      </div>
      {/* Styled-JSX Styles */}
      <style jsx>{`
        .modal {
          margin: 0 auto;
          max-width: 400px;
        }

        .modal-container {
          display: flex;
          flex-direction: column;
          gap: .5rem;
          height: 100%;
        }

        .img-wrapper {
          position:relative;
          width: 100%;
          height: 220px;
          vertical-align: middle;
          border-radius: 7px;
          overflow: hidden;
        }

        .date {
          font-size: 11px;
          font-weight: 400;
          color: #999;
        }

        .title {
          font-size: 18px;
          color: #222;
          line-height: 1.5;
        }

        .desc {
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.5;
          color: #888;
        }


      `}</style>
    </div>
  );
};

export default ArticleCard;