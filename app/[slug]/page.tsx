'use client'
import Link from "next/link";
import { getArticleById } from "../dummyData";

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  const article = await getArticleById(params.slug);
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <section className="section">
      <div className="container">
        <Link href="/">
            <svg className="svg-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L14.7071 9.29289C15.0976 9.68342 15.0976 10.3166 14.7071 10.7071L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L12.5858 10H5C4.44772 10 4 9.55228 4 9C4 8.44772 4.44772 8 5 8H12.5858L8.29289 5.70711Z" fill="currentColor" />
            </svg>
            <p>back to home</p>
        </Link>
        <h1>{article.title}</h1>
      </div>
      <article className="article">
        <p>{article.content}</p>
      </article>
      <style jsx>{`
        .section {
          margin: 0 auto;
          max-width: 800px;
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        /* Styles for div element */
        .container {
          justify-content: space-between;
          font-family: 'Poppins', sans-serif;
        }

        /* Styles for a element */
        .link {
          display: flex;
          flex-direction: row;
          gap: 0.25rem;
          align-items: center;
        }

        /* Styles for svg element */
        .svg-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        /* Styles for article element */
        .article {
          /* Define styles for the article */
        }
      `}</style>
    </section>
  );
};

export default ArticlePage;
