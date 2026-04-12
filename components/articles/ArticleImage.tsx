import React from "react";

type ImageVariant = "gallery" | "side" | "full";

type ArticleImageProps = {
  src: string;
  caption?: string | null;
  source?: string | null;
  variant?: ImageVariant;
  className?: string;
};

const ArticleImage = ({
  src,
  caption,
  source,
  variant = "gallery",
  className = "",
}: ArticleImageProps) => {
  // Define aspect ratios based on use case
  const aspectRatios = {
    gallery: "aspect-video", // Good for landscape/site shots
    side: "aspect-square", // Good for vertical fossil/artifact shots
    full: "aspect-auto", // Natural height
  };

  return (
    <figure className={`flex flex-col gap-3 max-h-100 ${className}`}>
      <div
        className={`relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 ${aspectRatios[variant]}`}
      >
        <img
          src={src}
          alt={caption || "Archaeological find"}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {(caption || source) && (
        <figcaption className="px-2 text-center md:text-left">
          {caption && (
            <span className="block text-sm italic text-body-subtext">
              {caption}
            </span>
          )}
          {source && (
            <span className="block text-[10px] tracking-wider text-body-subtext/50 mt-1">
              Source: {source}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};

export default ArticleImage;
