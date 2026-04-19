"use client"; // Required for state
import React, { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

type ImageVariant = "gallery" | "square" | "full" | "original";

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
  const [isOpen, setIsOpen] = useState(false);

  const aspectRatios = {
    gallery: "aspect-video",
    square: "aspect-square",
    full: "aspect-[3/4]",
    original: "aspect-auto",
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <figure
        className={`flex flex-col gap-3 ${
          variant === "full" || variant === "original" ? "" : "max-h-100"
        } ${className}`}
      >
        <div
          onClick={() => setIsOpen(true)}
          className={`relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 cursor-zoom-in group ${aspectRatios[variant]}`}
        >
          {/* Zoom Overlay Hint */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
            <ZoomIn className="text-white w-8 h-8" />
          </div>

          <img
            src={src}
            alt={caption || "Archaeological find"}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
              <span className="block text-[10px] tracking-wider text-body-subtext/50 mt-1 break-all whitespace-normal leading-tight">
                Source: {source}
              </span>
            )}
          </figcaption>
        )}
      </figure>

      {/* Fullscreen Preview Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10000 flex flex-col items-center justify-center bg-black/95 p-4 md:p-10 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative max-w-5xl w-full h-[80vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full rounded-lg">
              <Image
                src={src}
                alt={caption || "Preview"}
                fill
                className="object-contain rounded-lg shadow-2xl"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {caption && (
                <p className="text-white text-center text-sm md:text-base italic max-w-2xl">
                  {caption}
                </p>
              )}
              {source && (
                <span className="block text-[8px] md:text-[10px] tracking-wider text-center text-white/75 break-all whitespace-normal leading-tight">
                  Source: {source}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleImage;
