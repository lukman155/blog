
import type { ArticleItem } from "../types";
import Image from 'next/image'
import { useState } from "react";
import { shortenAuthor, formatDateTime } from "../helpers";
import ArticleModal from './ArticleModal';
interface Props {
  article: ArticleItem;
  index: number;
}

const ArticleCard = ({ article, index }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [isBookmarked, setIsBookmarked] = useState(() => {
    const storedBookmarks = localStorage.getItem("bookmarkedArticles");
    const bookmarks = storedBookmarks ? JSON.parse(storedBookmarks) : {};
    return !!bookmarks[article.url];
  });

  const toggleBookmark = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsBookmarked(prevIsBookmarked => {
      const newBookmarkStatus = !prevIsBookmarked;
      const storedBookmarks = localStorage.getItem("bookmarkedArticles");
      let bookmarks = storedBookmarks ? JSON.parse(storedBookmarks) : {};

      if (newBookmarkStatus) {
        bookmarks[article.url] = article;
      } else {
        delete bookmarks[article.url];
      }

      localStorage.setItem("bookmarkedArticles", JSON.stringify(bookmarks));
      return newBookmarkStatus;
    });
  };

  return (
    <div key={index} className="card" onClick={toggleModal}>
      <div className='card-container'>
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

        <div className="card-content">
          <div className='card-text'>
          <p className="date">
            <b>{shortenAuthor(article.author)}</b> • {formatDateTime(article.publishedAt)}
          </p>
          <h3 className="title">{article.title}</h3>
          <p className="desc">{article.description}</p>
          </div>
          <div className="btn-con">
            <button onClick={toggleBookmark} className="bookmark-button">
              {isBookmarked ? 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="black" d="M11.0699,0.0001 C13.7799,0.0001 15.9699,1.0701 15.9999,3.7901 L15.9999,3.7901 L15.9999,18.9701 C15.9999,19.1401 15.9599,19.3101 15.8799,19.4601 C15.7499,19.7001 15.5299,19.8801 15.2599,19.9601 C14.9999,20.0401 14.7099,20.0001 14.4699,19.8601 L14.4699,19.8601 L7.9899,16.6201 L1.4999,19.8601 C1.3509,19.9391 1.1799,19.9901 1.0099,19.9901 C0.4499,19.9901 -0.0001,19.5301 -0.0001,18.9701 L-0.0001,18.9701 L-0.0001,3.7901 C-0.0001,1.0701 2.1999,0.0001 4.8999,0.0001 L4.8999,0.0001 Z M11.7499,6.0401 L4.2199,6.0401 C3.7899,6.0401 3.4399,6.3901 3.4399,6.8301 C3.4399,7.2691 3.7899,7.6201 4.2199,7.6201 L4.2199,7.6201 L11.7499,7.6201 C12.1799,7.6201 12.5299,7.2691 12.5299,6.8301 C12.5299,6.3901 12.1799,6.0401 11.7499,6.0401 L11.7499,6.0401 Z" transform="translate(4 2)"></path></svg>
              :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><g fill="none" stroke="black" transform="translate(3.5 2)" ><path d="M8.16475977,16.631579 L2.23340962,19.881007 C1.75983818,20.1271252 1.17640846,19.9529066 0.915331812,19.4874143 L0.915331812,19.4874143 C0.839799009,19.3432192 0.79904873,19.1833528 0.796338677,19.0205951 L0.796338677,19.0205951 L0.796338677,4.62242565 C0.796338677,1.87643022 2.67276889,0.778032041 5.37299774,0.778032041 L11.7162472,0.778032041 C14.3340962,0.778032041 16.2929063,1.80320367 16.2929063,4.43935929 L16.2929063,19.0205951 C16.2929063,19.2803494 16.1897192,19.5294649 16.0060452,19.713139 C15.8223711,19.8968131 15.5732556,20.0000001 15.3135012,20.0000001 C15.1478164,19.9973723 14.9849578,19.9566576 14.8375287,19.881007 L8.86956526,16.631579 C8.64965001,16.5127732 8.38467502,16.5127732 8.16475977,16.631579 Z" fill="white"></path><line x1="4.87" x2="12.165" y1="7.323" y2="7.323"></line></g></svg>
              }
            </button>
            <span className="tooltip-text">{isBookmarked ? 'Remove from Bookmark' : 'Add to Bookmark'}</span>
          </div>
        </div>
      </div>
      {isModalOpen && <ArticleModal article={article} onClose={toggleModal} />}
      {/* Styled-JSX Styles */}
      <style jsx>{`
        .card {
          margin: 0 auto;
          display: flex;
          max-width: 400px;
          border-radius: 10px;
          cursor: pointer;
          transition: .2s;
          position:relative;
          top: 0;
        }

        .card:hover {
          top:-5px;
          box-shadow:
            0 1px 1px hsl(0deg 0% 0% / 0.075),
            0 2px 2px hsl(0deg 0% 0% / 0.075),
            0 4px 4px hsl(0deg 0% 0% / 0.075),
            0 8px 8px hsl(0deg 0% 0% / 0.075),
            0 16px 16px hsl(0deg 0% 0% / 0.075)
          ;
        }

        .card-content {
          padding:0 10px;
        }

        .card-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
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

        .card-content {
          display:flex;
          flex-direction: column;
          justify-content: space-between;
          height: 50%;
          gap: .4rem;
          margin: 0 0 1rem 0;
        }

        .btn-con {
          position: relative;
          width:100%;
        }

        .tooltip-text {
          position: absolute;
          font-size: 8px;
          color: #ddd;
          background-color: #333;
          padding: .2rem .5rem;
          border-radius: 20px;
          opacity: 0;
        }

        button {
          cursor: pointer;
          border: none;
          background-color: transparent;
        }

        .bookmark-button:hover + .tooltip-text {
          opacity: .8;
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