import NotFound from "@/app/not-found";
import { articlesData } from "@/data/articles/articlesData";
import React from "react";
import Hero from "./Hero";
import ArticleImage from "./ArticleImage";
import CallToAction from "../cards/CallToAction";
import SectionWithGrid from "../sections/SectionWithGrid";
import ArticleCard from "../cards/ArticleCard";

type Props = {
  id: number;
  content: ArticleContent[];
};

export type ArticleContent = {
  type:
    | "section-title"
    | "paragraph"
    | "image"
    | "paragraph-image"
    | "sources"
    | "divider";
  text?: string[] | string;
  title?: string;
  imageUrl?: { src: string; caption: string | null; source: string | null }[];
  imageLocation?: "left" | "right";
};

const ArticlePage = ({ id, content }: Props) => {
  const currentArticle = articlesData.find((article) => article.id === id);

  if (!currentArticle) {
    return <NotFound />;
  }

  return (
    <div>
      <Hero
        title={currentArticle?.title}
        description={currentArticle?.description}
        imageUrl={currentArticle?.imageUrl}
      />

      {/* Article Content */}
      <article className="section-wrapper py-16 max-w-4xl mx-auto">
        <div className="flex flex-col gap-16">
          {content &&
            content.length === 0 &&
            "Article content is not available"}
          {content.map((block, index) => {
            switch (block.type) {
              case "section-title":
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold text-brand-secondary underline mt-4"
                  >
                    {block.text}
                  </h2>
                );

              case "paragraph":
                return (
                  <div key={index} className="space-y-4 max-w-3xl">
                    {Array.isArray(block.text) ? (
                      block.text.map((p, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-base leading-relaxed text-body-subtext"
                        >
                          {p}
                        </p>
                      ))
                    ) : (
                      <p className="text-base leading-relaxed text-body-subtext">
                        {block.text}
                      </p>
                    )}
                  </div>
                );

              case "image":
                return (
                  <div key={index}>
                    {block.title && (
                      <h3 className="text-2xl font-bold  mb-6 flex items-center gap-2">
                        {block.title}
                      </h3>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {block.imageUrl?.map((img, imgIndex) => (
                        <ArticleImage
                          key={imgIndex}
                          src={img.src}
                          caption={img.caption}
                          source={img.source}
                          variant="gallery"
                        />
                      ))}
                    </div>
                  </div>
                );

              case "paragraph-image":
                return (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row gap-10 items-start ${
                      block.imageLocation === "right"
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1 space-y-6">
                      {Array.isArray(block.text) ? (
                        block.text.map((p, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-base leading-relaxed text-body-subtext"
                          >
                            {p}
                          </p>
                        ))
                      ) : (
                        <p className="text-base leading-relaxed text-body-subtext">
                          {block.text}
                        </p>
                      )}
                    </div>

                    {block.imageUrl?.[0] && (
                      <div className="w-full md:w-[35%] shrink-0">
                        <ArticleImage
                          src={block.imageUrl[0].src}
                          caption={block.imageUrl[0].caption}
                          source={block.imageUrl[0].source}
                          variant="side" // Uses the 3/4 aspect ratio
                        />
                      </div>
                    )}
                  </div>
                );

              case "sources":
                return (
                  <div key={index}>
                    <h3 className="text-2xl font-bold  mb-6 flex items-center gap-2">
                      References & External Links
                    </h3>
                    <ul className="grid grid-cols-1 gap-1">
                      {Array.isArray(block.text) &&
                        block.text.map((link, lIndex) => {
                          // Extract a readable name from the URL
                          const url = new URL(link);
                          const domain = url.hostname.replace("www.", "");

                          return (
                            <li key={lIndex} className="group">
                              <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 px-4 rounded-xl border border-transparent"
                              >
                                <div className="flex flex-col overflow-hidden">
                                  <span className="text-sm font-medium text-brand truncate max-w-full">
                                    {link}
                                  </span>
                                  <span className="text-[10px] uppercase tracking-wider text-body-subtext/60 font-semibold">
                                    {domain}
                                  </span>
                                </div>
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                );

              case "divider":
                return (
                  <hr key={index} className="border-t border-body-subtext/30" />
                );

              default:
                return null;
            }
          })}
        </div>
      </article>

      <SectionWithGrid
        title="Other Articles"
        sectionWrapperClass="bg-body-bg-alt"
      >
        {articlesData
          .sort((a, b) => {
            // Convert string dates to timestamps (milliseconds)
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            return dateB - dateA;
          })
          .filter((article) => article.id !== id)
          .map((item, index) => (
            <ArticleCard key={index} {...item} />
          ))}
      </SectionWithGrid>

      <CallToAction />
    </div>
  );
};

export default ArticlePage;
