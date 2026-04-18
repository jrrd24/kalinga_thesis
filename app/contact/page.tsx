import PageHeader from "@/components/sections/PageHeader";
import SectionWithGrid from "@/components/sections/SectionWithGrid";
import React from "react";
import { researchersData } from "./../../data/researchersData";
import ProfileCard from "@/components/cards/ProfileCard";
import ParallaxBGContent from "@/components/sections/ParallaxBGContent";
import { Calendar, GraduationCap, MapPin, School } from "lucide-react";

const RESEARCH_OBJECTIVES = [
  "Preserve and document the rich cultural heritage of Rizal, Kalinga",
  "Develop comprehensive multimedia resources for teaching indigenous history",
  "Create an accessible digital archive of Kalinga historical materials and traditions",
  "Design culturally appropriate interactive presentations and educational games",
  "Support educators with ready-to-use teaching materials about indigenous culture",
  "Promote respect and appreciation for Kalinga traditions among younger generations",
];

const UNIVERSITY_AFFILIATION = [
  {
    label: "Department",
    value: "School of Education, Criminology, Arts and Psychology",
    Icon: School,
  },
  {
    label: "Program",
    value: "Bachelor of Secondary Education Major in Social Studies",
    Icon: GraduationCap,
  },
  { label: "Year", value: "2025-2026", Icon: Calendar },
  {
    label: "Location",
    value: "Bartolome Street, Leonarda, Tuguegarao City, Cagayan",
    Icon: MapPin,
  },
];

const page = () => {
  return (
    <div>
      <div className="section-wrapper py-16 flex flex-col gap-8 w-full">
        <PageHeader
          title="Contact the Research Team"
          description="Get in touch with our research team for inquiries, collaborations, or feedback about this multimedia local history educational project on Rizal, Kalinga."
        />
      </div>

      <SectionWithGrid
        sectionWrapperClass="!pt-0"
        title="Meet the Researchers"
        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        {researchersData.map((researcher, index) => (
          <ProfileCard key={index} {...researcher} />
        ))}
      </SectionWithGrid>

      {/** About this Research */}
      <ParallaxBGContent backgroundImage="/assets/contact-about-research.jpg">
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-brand">
            About This Research Project
          </h3>

          <p className="text-sm md:text-base text-body-subtext">
            This thesis project, titled{" "}
            <b>
              "The Local History and Rich Cultural Heritage of Rizal Province of
              Kalinga"
            </b>
            , aims to preserve and promote the indigenous traditions, customs,
            and historical narratives of the Kalinga people. By leveraging
            modern multimedia technologies and culturally sensitive
            instructional design, we have created an accessible, engaging
            platform that honors and celebrates Kalinga heritage.
          </p>

          {/** Research Objectives */}
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-brand-secondary">
              Research Objectives:
            </h4>

            <ul className="list-disc list-inside text-sm md:text-base text-body-subtext">
              {RESEARCH_OBJECTIVES.map((objective, index) => (
                <li className="ml-4 my-1" key={index}>
                  {objective}
                </li>
              ))}
            </ul>
          </div>

          {/** Methodology */}
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-brand-secondary">
              Methodology:
            </h4>

            <p className="text-sm md:text-base text-body-subtext">
              Our research combines indigenous oral history collection, archival
              research, and multimedia production. We conducted extensive
              interviews with community elders, documented traditional practices
              with proper cultural protocols, and collaborated with local
              cultural bearers. This data was then transformed into various
              multimedia formats including PowerPoint presentations, video
              documentaries, and informative articles, all created with cultural
              sensitivity and community input.
            </p>
          </div>

          {/** Impact and Applications */}
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-brand-secondary">
              Impact and Applications:
            </h4>

            <p className="text-sm md:text-base text-body-subtext">
              The resources developed through this project are designed for
              immediate classroom use while serving as a model for indigenous
              heritage preservation. Teachers can download and utilize
              presentations, videos, and supporting materials to enhance their
              social studies curriculum. The platform also serves the Kalinga
              community by providing accessible documentation of their rich
              cultural heritage for future generations.
            </p>
          </div>
        </div>
      </ParallaxBGContent>

      {/** Institutional Affiliation */}
      <section className="section-wrapper pb-16 ">
        <div className="relative overflow-hidden rounded-2xl  max-w-4xl mx-auto bg-white p-8 text-white shadow-xl">
          <div className="absolute inset-0 opacity-5 pointer-events-none " />

          {/* Content */}
          <div className="relative space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-brand">
              Institutional Affiliation
            </h3>
            <div>
              <h4 className="text-lg font-bold text-brand-secondary">
                University of Saint Louis Tuguegarao
              </h4>
              <ul className="space-y-2 mt-2 text-sm text-body-subtext">
                <ul className="space-y-6 md:space-y-4 mt-4 text-sm text-body-subtext">
                  {UNIVERSITY_AFFILIATION.map((item, index) => (
                    <li
                      key={index}
                      className="grid grid-cols-[24px_1fr] md:grid-cols-[24px_100px_1fr] gap-x-2 md:gap-x-3 items-start ml-2 md:ml-4"
                    >
                      <item.Icon
                        className="w-5 h-5 text-brand-secondary mt-0.5 shrink-0"
                        strokeWidth={2}
                      />

                      <span className="font-bold text-brand/80">
                        {item.label}:
                      </span>

                      <span className="col-start-1 col-span-2 md:col-start-3 md:col-span-1 leading-relaxed text-gray-700 md:text-inherit pl-[33px] md:pl-0">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
