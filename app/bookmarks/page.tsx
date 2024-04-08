'use client'
import dynamic from 'next/dynamic'
import { ArticleItem } from '../types';
import { useEffect, useState } from 'react';

const ArticleCard = dynamic(() => import('../Components/ArticleCard'), { ssr: false })



const BookmarksPage = () => {
  // Initialize bookmarks state with an empty object
  const [bookmarks, setBookmarks] = useState({});

  // Use useEffect to retrieve bookmarked articles from localStorage
  useEffect(() => {
    // Check if window is defined (i.e., if the code is running in the browser environment)
    if (typeof window !== 'undefined') {
      const storedBookmarks = localStorage.getItem("bookmarkedArticles");
      const parsedBookmarks = storedBookmarks ? JSON.parse(storedBookmarks) : {};
      setBookmarks(parsedBookmarks);
    }
  }, []);

  return (
    <div className="bookmarks-container">
      <h2>Saved Bookmarks</h2>
      <div className="articles-grid">
        {Object.values(bookmarks).map((article, index) => (
          <ArticleCard key={index} index={index} article={article as ArticleItem} />
        ))}
      </div>
      <style jsx>{`
        .bookmarks-container {
          margin: 0 auto;
          padding: 1.5rem;
        }

        h2 {
          text-align: center;
          padding: 0 0 1rem 0;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 3rem;
        }

        @media (min-width: 680px) {

        .title {
          font-size: 2rem;
        }
          .articles-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1080px) {

          .bookmarks-container {
            padding: 0 4rem;
          }

          .articles-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default BookmarksPage;
