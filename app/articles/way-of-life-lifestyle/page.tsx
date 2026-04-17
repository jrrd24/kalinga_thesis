import ArticlePage from "@/components/articles/ArticlePage";
import { wayOfLifeContent } from "@/data/articles/wayOfLifeContent";
type Props = {};

const page = (props: Props) => {
  return <ArticlePage id={5} content={wayOfLifeContent} />;
};

export default page;
