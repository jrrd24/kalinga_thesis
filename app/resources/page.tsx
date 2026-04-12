import ArticlesPreview from "@/components/articles/ArticlesPreview";
import ArticleCard from "@/components/cards/ArticleCard";
import SectionWithGrid from "@/components/sections/SectionWithGrid";
import { articlesData } from "@/data/articles/articlesData";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div className="section-wrapper py-16 flex flex-col gap-8 w-full">
        <header className="flex flex-col items-start gap-1 max-w-3xl">
          <h3 className="text-2xl lg:text-3xl font-bold">
            Educational Resources
          </h3>
          <p className="text-sm lg:text-base text-body-subtext">
            Access a comprehensive collection of teaching materials, multimedia
            presentations, and cultural archives designed to enhance learning
            about Kalinga heritage and history.
          </p>
        </header>
      </div>

      {/** Resources list */}
      <div>resources</div>

      <ArticlesPreview />
    </div>
  );
};

export default page;
