import React from "react";
import { resourcesData } from "./../../data/resourcesData";
import { VideoPreviewCard } from "../cards/VideoPreviewCard";

type Props = {
  title: string;
  description?: string;
  gridClass?: string;
  sectionWrapperClass?: string;
  children?: React.ReactNode;
};

const SectionWithGrid = ({
  title,
  description,
  gridClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  sectionWrapperClass = "bg-body-bg",
  children,
}: Props) => {
  return (
    <section className={`w-full py-12 md:py-16 ${sectionWrapperClass}`}>
      <div className="section-wrapper flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
          {description && (
            <p className="text-sm md:text-base text-body-subtext">
              {description}
            </p>
          )}
        </div>
        <div className={`${gridClass} gap-6 lg:gap-8`}>{children}</div>
      </div>
    </section>
  );
};

export default SectionWithGrid;
