"use client";
import React from "react";
import SectionWithGrid from "../sections/SectionWithGrid";
import { articlesData } from "@/data/articles/articlesData";
import ArticleCard from "../cards/ArticleCard";

type Props = {
  limit?: number;
  showButton?: boolean;
  filter?: number; // ID of the article to exclude from the preview
};

const ArticlesPreview = ({ limit, showButton, filter }: Props) => {
  const sortedArticles = [...articlesData]
    .filter((article) => article.id !== filter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // If limit is provided, take a slice; otherwise, use the whole sorted array
  const displayedArticles = limit
    ? sortedArticles.slice(0, limit)
    : sortedArticles;

  const href = showButton ? "/resources#article-list" : undefined;

  return (
    <SectionWithGrid
      id="article-list"
      title="Articles"
      href={href}
      sectionWrapperClass="bg-body-bg-alt"
    >
      {displayedArticles.map((item, index) => (
        <ArticleCard key={index} {...item} />
      ))}
    </SectionWithGrid>
  );
};

export default ArticlesPreview;
