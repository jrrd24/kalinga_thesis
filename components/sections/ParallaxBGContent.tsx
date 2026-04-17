import React from "react";

const ParallaxBGContent = ({
  children,
  backgroundImage,
}: {
  children: React.ReactNode;
  backgroundImage: string;
}) => {
  return (
    <div className="bg-body-bg">
      {/* 1. Parallax Background Section */}
      <div
        className="relative h-[70vh] max-h-180 w-full bg-fixed bg-center bg-no-repeat bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay to make the content pop */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 2. Overlapping Content Container */}
      <div className="relative z-20 flex justify-center px-4">
        <div className=" -mt-56 w-full max-w-4xl rounded-xl bg-body-bg p-8 shadow-2xl min-h-98">
          <div className="prose lg:prose-xl">{children}</div>
        </div>
      </div>

      {/* Bottom padding to allow scrolling past the card */}
      <div className="h-20" />
    </div>
  );
};

export default ParallaxBGContent;
