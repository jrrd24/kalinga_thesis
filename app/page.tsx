import React from "react";
import FullPageHero from "./../components/sections/FullPageHero";
import SiteOverview from "@/components/sections/SiteOverview";
import SectionWithGrid from "@/components/sections/SectionWithGrid";
import { resourcesData } from "@/data/resourcesData";
import { VideoPreviewCard } from "@/components/cards/VideoPreviewCard";
import { articlesData } from "../data/articles/articlesData";
import ArticleCard from "@/components/cards/ArticleCard";
import CallToAction from "@/components/cards/CallToAction";

const page = () => {
  return (
    <div className="flex flex-col">
      <FullPageHero
        imgSrc="/assets/home-header.jpg"
        title="The Local History and Rich Cultural Heritage of Rizal Province of Kalinga"
        subtitle="An innovative educational platform dedicated to preserving and sharing the indigenous traditions, history, and cultural heritage of the Kalinga people through multimedia resources."
        buttons={[
          {
            text: "Explore Resources",
            href: "/resources",
            type: "solid",
            showArrow: true,
          },
          {
            text: "Learn More",
            href: "/about",
            type: "outline",
          },
        ]}
      />
      <SiteOverview />
      <SectionWithGrid
        title="Featured Videos"
        description=" Watch and learn about Kalinga culture through multimedia
            presentations"
        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
      >
        {resourcesData
          .filter((item) => item.type === "video" && item.isFeatured)
          .sort((a, b) => b.order - a.order)
          .map((item, index) => (
            <VideoPreviewCard key={index} {...item} />
          ))}
      </SectionWithGrid>
      <SectionWithGrid
        title="Latest Updates"
        sectionWrapperClass="bg-body-bg-alt"
      >
        {articlesData
          .sort((a, b) => {
            // Convert string dates to timestamps (milliseconds)
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            return dateB - dateA;
          })
          .map((item, index) => (
            <ArticleCard key={index} {...item} />
          ))}
      </SectionWithGrid>

      <CallToAction />
    </div>
  );
};

export default page;
