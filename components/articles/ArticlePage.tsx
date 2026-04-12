import NotFound from "@/app/not-found";
import { articlesData } from "@/data/articles/articlesData";
import React from "react";
import Hero from "./Hero";
import CallToAction from "../cards/CallToAction";
import SectionWithGrid from "../sections/SectionWithGrid";
import ArticleCard from "../cards/ArticleCard";
import renderBlocks from "./RenderBlocks";
import ArticlesPreview from "./ArticlesPreview";

type Props = {
  id: number;
  content: ArticleContent[];
};

export type ArticleContent = {
  type:
    | "section-title"
    | "paragraph"
    | "image"
    | "paragraph-image"
    | "sources"
    | "divider"
    | "list"
    | "group"
    | "sub-section-title";
  text?: string[] | string;
  items?: ListItem[];
  title?: string;
  imageUrl?: { src: string; caption: string | null; source: string | null }[];
  imageLocation?: "left" | "right";
  content?: ArticleContent[];
  addIndent?: boolean;
  imageVariant?: "gallery" | "square" | "full" | "original";
};

export type ListItem = {
  text: string;
  items?: ListItem[];
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

      {/* Article Content */}
      <article className="section-wrapper py-16 max-w-4xl mx-auto">
        <div className="flex flex-col gap-16">{renderBlocks(content)}</div>
      </article>

      <ArticlesPreview limit={3} filter={currentArticle?.id} showButton />

      <CallToAction />
    </div>
  );
};

export default ArticlePage;
