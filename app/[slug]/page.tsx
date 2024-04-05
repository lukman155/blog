import Link from "next/link";
import { getArticleById } from "../dummyData";

const Article = async {{params: {slug: string}}} => {
  
  const article = getArticleById(parseInt(slug));
  if (!article) {
    return <div>Article not found</div>;
  }
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}