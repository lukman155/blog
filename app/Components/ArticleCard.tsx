import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
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
  const maxLength = 15;
  if (!author) return 'Unknown Author';
  return author.length > maxLength ? author.slice(0, maxLength) + '...' : author;
}
const ArticleCard = ({ article, key }: Props) => {

  const [isBookmarked, setIsBookmarked] = useState(() => {
    const storedBookmarks = localStorage.getItem("bookmarkedArticles");
    const bookmarks = storedBookmarks ? JSON.parse(storedBookmarks) : {};
    return !!bookmarks[article.url];
  });

  const toggleBookmark = () => {
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
        <div className="btn-con">
          <button onClick={toggleBookmark} className="bookmark-button">
            {isBookmarked ? 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="black" d="M11.0699,0.0001 C13.7799,0.0001 15.9699,1.0701 15.9999,3.7901 L15.9999,3.7901 L15.9999,18.9701 C15.9999,19.1401 15.9599,19.3101 15.8799,19.4601 C15.7499,19.7001 15.5299,19.8801 15.2599,19.9601 C14.9999,20.0401 14.7099,20.0001 14.4699,19.8601 L14.4699,19.8601 L7.9899,16.6201 L1.4999,19.8601 C1.3509,19.9391 1.1799,19.9901 1.0099,19.9901 C0.4499,19.9901 -0.0001,19.5301 -0.0001,18.9701 L-0.0001,18.9701 L-0.0001,3.7901 C-0.0001,1.0701 2.1999,0.0001 4.8999,0.0001 L4.8999,0.0001 Z M11.7499,6.0401 L4.2199,6.0401 C3.7899,6.0401 3.4399,6.3901 3.4399,6.8301 C3.4399,7.2691 3.7899,7.6201 4.2199,7.6201 L4.2199,7.6201 L11.7499,7.6201 C12.1799,7.6201 12.5299,7.2691 12.5299,6.8301 C12.5299,6.3901 12.1799,6.0401 11.7499,6.0401 L11.7499,6.0401 Z" transform="translate(4 2)" class="color200E32 svgShape"></path></svg>
            : 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><g fill="none" fill-rule="evenodd" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(3.5 2)" class="colorStroke200E32 svgStroke"><path d="M8.16475977,16.631579 L2.23340962,19.881007 C1.75983818,20.1271252 1.17640846,19.9529066 0.915331812,19.4874143 L0.915331812,19.4874143 C0.839799009,19.3432192 0.79904873,19.1833528 0.796338677,19.0205951 L0.796338677,19.0205951 L0.796338677,4.62242565 C0.796338677,1.87643022 2.67276889,0.778032041 5.37299774,0.778032041 L11.7162472,0.778032041 C14.3340962,0.778032041 16.2929063,1.80320367 16.2929063,4.43935929 L16.2929063,19.0205951 C16.2929063,19.2803494 16.1897192,19.5294649 16.0060452,19.713139 C15.8223711,19.8968131 15.5732556,20.0000001 15.3135012,20.0000001 C15.1478164,19.9973723 14.9849578,19.9566576 14.8375287,19.881007 L8.86956526,16.631579 C8.64965001,16.5127732 8.38467502,16.5127732 8.16475977,16.631579 Z" fill="white"></path><line x1="4.87" x2="12.165" y1="7.323" y2="7.323"></line></g></svg>
            }
          </button>
          <span className="tooltip-text">{isBookmarked ? 'Remove from Bookmark' : 'Add to Bookmark'}</span>
        </div>
        
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
          gap: .6rem;
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

        .btn-con {
          position: relative;
          width:100%;
        }

        .tooltip-text {
          position: absolute;
          right: 32px;
          font-size: 8px;
          color: #ddd;
          background-color: #333;
          padding: .2rem .5rem;
          border-radius: 20px;
          opacity: 0;
        }

        button {
          cursor: pointer;
          position: absolute;
          right: 0;
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