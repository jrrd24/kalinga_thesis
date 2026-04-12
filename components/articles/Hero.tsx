import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  imageUrl?: string;
};

const Hero = ({ title, description, imageUrl }: Props) => {
  return (
    <section
      className={`relative w-full overflow-hidden ${
        // [clip-path:inset(0)] is the "secret sauce" that contains
        // the fixed background image to only this section
        imageUrl
          ? "text-white [clip-path:inset(0)]"
          : "bg-body-bg-alt text-brand"
      }`}
    >
      {imageUrl && (
        <>
          {/* Parallax Background Layer */}
          <div className="fixed inset-0 z-0 h-full w-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Dark Overlay - Absolute to scroll with the section */}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </>
      )}

      {/* Content Container */}
      <div className="relative z-20 section-wrapper justify-center flex flex-col gap-8 min-h-[50vh]">
        <header className="flex flex-col items-start gap-4 max-w-2xl">
          <h1 className="text-2xl lg:text-3xl font-bold leading-tight drop-shadow-lg">
            {title}
          </h1>
          <p
            className={`text-sm lg:text-base max-w-xl ${
              !imageUrl ? "text-body-subtext" : "text-gray-200 drop-shadow-md"
            }`}
          >
            {description}
          </p>
        </header>
      </div>
    </section>
  );
};

export default Hero;
