import ArticlePage from "@/components/articles/ArticlePage";
import { prehistoricContent } from "@/data/articles/prehistoricContent";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return <ArticlePage id={2} content={prehistoricContent} />;
};

export default page;
