import React from 'react';
import { ArticleItem } from '../types';
import { formatDateTime, shortenAuthor } from '../helpers';

interface ModalProps {
  article: ArticleItem;
  onClose: () => void;
}

const ArticleModal: React.FC<ModalProps> = ({ article, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="article-details">
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt={article.title} />
          <a href={article.url} target="_blank" rel="noopener noreferrer">Source  🔗 </a>
          <p>{article.content}</p>
          <p>Author: {shortenAuthor(article.author)}</p>
          <p>Published: {formatDateTime(article.publishedAt)}</p>
          {/* Add more details as needed */}
        </div>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 3;
        }

        .modal-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          width: 80%;
          max-width: 800px;
          max-height: 90%;
          overflow-y: auto;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .article-details {
          margin-top: 20px;
        }

        img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }

        h2 {
          margin-top: 10px;
        }

        p {
          margin-top: 5px;
        }

        a {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default ArticleModal;
