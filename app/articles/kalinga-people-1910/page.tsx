import ArticlePage from "@/components/articles/ArticlePage";
import { kalingaPeopleContent } from "@/data/articles/kalingaPeopleContent";
type Props = {};

const page = (props: Props) => {
  return <ArticlePage id={4} content={kalingaPeopleContent} />;
};

export default page;
