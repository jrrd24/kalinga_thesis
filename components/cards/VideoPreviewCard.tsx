import React from "react";
import { Play } from "lucide-react"; // npm install lucide-react

export const VideoPreviewCard = ({
  title,
  description,
  link,
  duration,
  thumbnailUrl,
}: {
  title: string;
  description: string;
  link: string;
  duration?: string;
  thumbnailUrl?: string;
}) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
      {/* Thumbnail Section */}
      <div className="relative aspect-video w-full overflow-hidden">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Placeholder state when no image exists */
          <div className="flex h-full w-full items-center justify-center bg-brand-subtext/10">
            <span className="text-brand-subtext text-xs font-medium uppercase tracking-widest">
              No Preview Available
            </span>
          </div>
        )}

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/30">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 text-brand-accent shadow-2xl transition-transform hover:scale-110"
          >
            <Play size={40} fill="currentColor" className="ml-1" />
          </a>
        </div>

        {/* Duration Badge (Optional) */}
        {duration && (
          <div className="absolute bottom-4 right-4 rounded-md bg-black/80 px-2 py-1 text-xs font-bold text-white">
            {duration}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-6">
        <h3 className="text-base md:text-xl font-bold text-body-text leading-tight hover:text-brand transition-colors cursor-pointer">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="mt-3 text-xs md:text-sm text-body-subtext leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
};
