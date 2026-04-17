import ArticlesPreview from "@/components/articles/ArticlesPreview";
import PageHeader from "@/components/sections/PageHeader";
import SectionWithGrid from "@/components/sections/SectionWithGrid";
import { resourcesData } from "@/data/resourcesData";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div className="section-wrapper py-16 flex flex-col gap-8 w-full">
        <PageHeader
          title="Educational Resources"
          description="Access a comprehensive collection of teaching materials, multimedia presentations, and cultural archives designed to enhance learning about Kalinga heritage and history."
        />
      </div>

      {/** Resources list */}
      <SectionWithGrid sectionWrapperClass="!pt-0">
        {resourcesData.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </SectionWithGrid>

      <ArticlesPreview />
    </div>
  );
};

export default page;
