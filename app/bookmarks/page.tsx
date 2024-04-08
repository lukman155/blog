'use client'
import { useEffect, useState } from 'react';
import { ArticleItem } from '../types';
import ArticleCard from '../Components/ArticleCard'; // Assuming ArticleCard is a default export

const BookmarksPage = () => {
  // State to store bookmarks
  const [bookmarks, setBookmarks] = useState({});

  // Effect hook to load bookmarks from localStorage
  useEffect(() => {
    loadBookmarksFromStorage();
  }, []);

  // Function to load bookmarks from localStorage
  const loadBookmarksFromStorage = () => {
    if (typeof window !== 'undefined') {
      const storedBookmarks = localStorage.getItem("bookmarkedArticles");
      const parsedBookmarks = storedBookmarks ? JSON.parse(storedBookmarks) : {};
      setBookmarks(parsedBookmarks);
    }
  };

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
