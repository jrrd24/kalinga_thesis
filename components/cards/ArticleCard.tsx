import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  date: string;
  imageUrl?: string;
}

const ArticleCard = ({
  title,
  description,
  tags,
  link,
  date,
  imageUrl,
}: ArticleCardProps) => {
  return (
    <div className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white shadow-sm shadow-brand-subtext border border-gray-100 transition-all duration-300 hover:shadow-xl">
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Placeholder state when no image exists */
          <div className="flex h-full w-full items-center justify-center bg-brand-subtext/10">
            <span className="text-body-subtext text-xs font-medium uppercase tracking-widest">
              No Preview Available
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col grow p-6">
        {/* Badge & Date */}
        <div className="flex items-center gap-4 mb-4">
          <span className="rounded-full bg-[#f0f4e1] px-4 py-1 text-sm font-medium text-brand">
            {tags[0]}
          </span>
          <div className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
            <Calendar size={16} className="text-brand" />
            <span>{date}</span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold leading-tight text-body-text group-hover:text-brand transition-colors">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-600 line-clamp-4">
            {description}
          </p>
        </div>

        <div className="mt-auto pt-6">
          <Link
            href={link}
            className="inline-flex items-center gap-2 text-base font-bold text-brand transition-all hover:gap-3"
          >
            Read More
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
