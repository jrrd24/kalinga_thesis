import CallToAction from "@/components/cards/CallToAction";
import AboutBento from "@/components/sections/AboutBento";
import ScrollSection from "@/components/sections/ScrollSection";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col">
      <AboutBento />

      <ScrollSection />

      <CallToAction />
    </div>
  );
};

export default page;
