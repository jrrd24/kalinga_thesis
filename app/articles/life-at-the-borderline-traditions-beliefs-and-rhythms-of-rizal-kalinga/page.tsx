import ArticlePage from "@/components/articles/ArticlePage";
import React from "react";
import { lifeAtContent } from "./../../../data/articles/lifeAtContent";

type Props = {};

const page = (props: Props) => {
  return <ArticlePage id={2} content={lifeAtContent} />;
};

export default page;
