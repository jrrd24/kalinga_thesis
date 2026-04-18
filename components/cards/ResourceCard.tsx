import React from "react";
import { ExternalLink, FileDown, BookOpen, Presentation } from "lucide-react";
import { Resource, RESOURCE_CONFIG } from "@/data/resourcesData";

const ResourceCard = ({ resource }: { resource: Resource }) => {
  const config = RESOURCE_CONFIG[resource.type] || RESOURCE_CONFIG["article"];
  const Icon = config.icon;
  const BtnIcon = config.btnIcon;

  // Logic to force direct download for Google Slides
  const getProcessedLink = (url: string, type: string) => {
    if (
      type === "learning-material" &&
      url.includes("docs.google.com/presentation")
    ) {
      // Replaces /edit or /view with /export/pptx to trigger a browser download
      return url.replace(/\/edit.*$|\/view.*$/, "/export/pptx");
    }
    return url;
  };

  return (
    <div
      className={`flex flex-col h-full p-6 border rounded-xl bg-white/50 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 ${config.hoverClass} group`}
    >
      {/* Icon & Category */}
      <div className="flex items-center gap-2 mb-4">
        <Icon className={`w-5 h-5 ${config.colorClass}`} />
        <span className="text-xs font-semibold tracking-wider uppercase text-gray-500">
          {resource.type.replace("-", " ")}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl line-clamp-2 font-bold leading-tight">
        {resource.title}
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-1 mb-4">
        {resource.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-brand"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Citation */}
      {resource.citation && (
        <p className="mb-6 text-xs italic text-gray-500 line-clamp-3">
          {resource.citation}
        </p>
      )}

      {/* Action Button */}
      <div className="mt-auto pt-4">
        <a
          href={getProcessedLink(resource.link, resource.type)}
          target={resource.type === "article" ? "_blank" : "_self"}
          rel="noopener noreferrer"
          // The download attribute works for same-origin or direct file links
          download={resource.type === "learning-material" ? true : undefined}
          className={`inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm font-medium text-white transition-colors rounded-lg focus:ring-4 ${config.btnClass}`}
        >
          {config.btnText}
          <BtnIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
