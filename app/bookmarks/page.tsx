'use client'
import ArticleCard from '../Components/ArticleCard';
import { ArticleItem } from '../types';

interface Props {
  article: ArticleItem;
}

const BookmarksPage = () => {
  // Retrieve bookmarked articles from localStorage
  const storedBookmarks = localStorage.getItem("bookmarkedArticles");
  const bookmarks = storedBookmarks ? JSON.parse(storedBookmarks) : {};

  return (
    <div className="bookmarks-container">
      <h2>Saved Bookmarks</h2>
      <div className="articles-grid">
        {Object.values(bookmarks).map((article, index) => (
          <ArticleCard key={index} article={article} />
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

        @media (min-width: 580px) {

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
