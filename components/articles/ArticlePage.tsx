import NotFound from "@/app/not-found";
import { articlesData } from "@/data/articles/articlesData";
import React from "react";
import Hero from "./Hero";

type Props = {
  id: number;
  content: ArticleContent;
};

type ArticleContent = {
  title: string;
  description: string;
  imageUrl?: string;
};

const ArticlePage = ({ id, content }: Props) => {
  const currentArticle = articlesData.find((article) => article.id === id);

  if (!currentArticle) {
    return <NotFound />;
  }

  return (
    <div>
      <Hero
        title={currentArticle?.title}
        description={currentArticle?.description}
        imageUrl={currentArticle?.imageUrl}
      />
    </div>
  );
};

export default ArticlePage;
