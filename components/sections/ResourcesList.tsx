"use client";
import React, { useState, useMemo } from "react";
import SectionWithGrid from "./SectionWithGrid";
import { OTHER_RESOURCES, RESOURCE_CONFIG } from "@/data/resourcesData";
import ResourceCard from "../cards/ResourceCard";
import { Search, FilterX } from "lucide-react";

const ResourcesList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const categories = ["all", ...Object.keys(RESOURCE_CONFIG)];

  const filteredResources = useMemo(() => {
    return [...OTHER_RESOURCES]
      .filter((item) => {
        const matchesSearch = item.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesType =
          selectedType === "all" || item.type === selectedType;
        return matchesSearch && matchesType;
      })
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [searchQuery, selectedType]);

  return (
    <SectionWithGrid
      id="article-list"
      title="Other Resources"
      topContent={
        <div className="col-span-full mb-10 flex flex-col -mt-6 md:flex-row gap-6 items-center justify-start md:justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand transition-colors" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-1 focus:ring-brand/20 focus:border-brand outline-none bg-white/50 backdrop-blur-sm transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Themed Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const isAll = cat === "all";
              const config = !isAll ? RESOURCE_CONFIG[cat] : null;
              const Icon = config?.icon;
              const isActive = selectedType === cat;

              // Determine border and text colors based on config
              const activeClass = isAll
                ? "bg-gray-900 border-gray-900 text-white shadow-lg shadow-gray-200"
                : `${config?.btnClass} text-white border-transparent shadow-lg shadow-brand/10`;

              const inactiveClass =
                "bg-white border-gray-200 text-gray-600 hover:border-gray-400";

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedType(cat)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                    isActive ? activeClass : inactiveClass
                  }`}
                >
                  {Icon && (
                    <Icon
                      className={`w-4 h-4 ${isActive ? "text-white" : config?.colorClass}`}
                    />
                  )}
                  {cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")}
                </button>
              );
            })}
          </div>
        </div>
      }
    >
      {/* Grid Results */}
      {filteredResources.length > 0 ? (
        filteredResources.map((item, index) => (
          <ResourceCard key={index} resource={item} />
        ))
      ) : (
        <div className="col-span-full py-24 text-center bg-gray-50/50 rounded-3xl border-2 border-dashed border-gray-200">
          <FilterX className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900">No results found</h3>
          <p className="text-gray-500 mb-6">
            Try adjusting your search or filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedType("all");
            }}
            className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors"
          >
            Reset everything
          </button>
        </div>
      )}
    </SectionWithGrid>
  );
};

export default ResourcesList;
