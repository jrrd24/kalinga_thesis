import ArticlesPreview from "@/components/articles/ArticlesPreview";
import { VideoPreviewCard } from "@/components/cards/VideoPreviewCard";
import PageHeader from "@/components/sections/PageHeader";
import ResourcesList from "@/components/sections/ResourcesList";
import SectionWithGrid from "@/components/sections/SectionWithGrid";
import { VIDEOS_DATA } from "@/data/resourcesData";

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
      <SectionWithGrid
        title="Featured Videos"
        sectionWrapperClass="!pt-0"
        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
      >
        {VIDEOS_DATA.map((item, index) => (
          <VideoPreviewCard key={index} {...item} />
        ))}
      </SectionWithGrid>

      <ArticlesPreview />

      <ResourcesList />
    </div>
  );
};

export default page;
