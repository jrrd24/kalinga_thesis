import React from "react";
import HeroButton from "../buttons/HeroButton";

type Props = {
  id?: string;
  title?: string;
  description?: string;
  gridClass?: string;
  sectionWrapperClass?: string;
  children?: React.ReactNode;
  topContent?: React.ReactNode;
  href?: string;
};

const SectionWithGrid = ({
  id,
  title,
  description,
  gridClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  sectionWrapperClass = "bg-body-bg",
  children,
  topContent,
  href,
}: Props) => {
  const sectionId = id || title?.toLowerCase().replace(/\s+/g, "-");
  return (
    <section
      id={sectionId}
      className={`w-full py-12 scroll-mt-20 md:py-16 ${sectionWrapperClass}`}
    >
      <div className="section-wrapper flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col md:flex-row gap-2 justify-between w-full">
          <div className="flex flex-col items-start gap-1">
            {title && (
              <h3 className="text-2xl md:text-3xl font-bold text-brand">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm md:text-base text-body-subtext">
                {description}
              </p>
            )}
          </div>
          {href && (
            <HeroButton text="Show All" href={href} showArrow type="solid" />
          )}
        </div>

        {topContent && <div>{topContent}</div>}

        <div className={`${gridClass} auto-rows-fr gap-6 lg:gap-8`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWithGrid;
