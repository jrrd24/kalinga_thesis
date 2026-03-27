import React from "react";
import { siteOverviewData } from "./../../data/siteOverviewData";
import OverviewCards from "../cards/OverviewCards";

type Props = {};

const SiteOverview = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-150 lg:max-w-250 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 w-full justify-items-center mt-10 mb-10 lg:-mt-12 z-[20]">
        {siteOverviewData.map((item, index) => (
          <OverviewCards key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SiteOverview;
