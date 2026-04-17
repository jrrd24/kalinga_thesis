import ArticlePage from "@/components/articles/ArticlePage";
import { reframingContent } from "@/data/articles/reframingContent";
type Props = {};

const page = (props: Props) => {
  return <ArticlePage id={3} content={reframingContent} />;
};

export default page;
