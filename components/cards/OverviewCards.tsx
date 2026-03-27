import React from "react";

type Props = {
  icon: string;
  title: string;
  description: string;
};

const OverviewCards = ({ icon, title, description }: Props) => {
  return (
    <div className="hover-3d max-w-80">
      {/* content */}
      <div className="card-content bg-white shadow-xl rounded-2xl p-6 h-full flex flex-col justify-between border border-white/10">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl">{icon}</h2>
          <h2 className="text-body-text text-2xl font-bold">{title}</h2>
          <p className="text-body-subtext mt-2 text-sm">{description}</p>
        </div>
      </div>
      {/* 8 empty divs needed for the 3D effect */}
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
    </div>
  );
};

export default OverviewCards;
