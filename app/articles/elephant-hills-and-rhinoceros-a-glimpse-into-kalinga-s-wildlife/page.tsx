import ArticlePage from "@/components/articles/ArticlePage";
import React from "react";
import { elephantHillsContent } from "./../../../data/articles/elephantHillsContent";

type Props = {};

const page = (props: Props) => {
  return <ArticlePage id={1} content={elephantHillsContent} />;
};

export default page;
