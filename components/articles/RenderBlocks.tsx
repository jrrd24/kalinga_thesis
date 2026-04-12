import { ArticleContent } from "./ArticlePage";
import Markdown from "react-markdown";
import ArticleImage from "./ArticleImage";

const renderBlocks = (blocks: ArticleContent[]) => {
  return blocks.map((block, index) => {
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

      case "sub-section-title":
        return (
          <h3 key={index} className="text-xl font-bold text-brand">
            {block.text}
          </h3>
        );

      case "paragraph":
        return (
          <div key={index} className="space-y-4 max-w-3xl">
            {Array.isArray(block.text) ? (
              block.text.map((p, pIndex) => (
                <div
                  key={pIndex}
                  className="text-base leading-relaxed text-body-subtext"
                >
                  <Markdown>{p}</Markdown>
                </div>
              ))
            ) : (
              <div className="text-base leading-relaxed text-body-subtext">
                <Markdown>{block.text}</Markdown>
              </div>
            )}
          </div>
        );

      case "list":
        const renderList = (listItems: any[], level = 0) => {
          const listStyle =
            level === 0
              ? "list-disc"
              : level === 1
                ? "list-[circle]"
                : "list-[square]";

          return (
            <ul
              className={`space-y-2 list-outside ml-6 ${listStyle} ${block.addIndent ? "pl-6" : ""} `}
            >
              {listItems.map((item, iIndex) => (
                <li
                  key={iIndex}
                  className="text-base leading-relaxed text-body-subtext"
                >
                  <div className="flex flex-col gap-2">
                    <Markdown>{item.text}</Markdown>
                    {item.items &&
                      item.items.length > 0 &&
                      renderList(item.items, level + 1)}
                  </div>
                </li>
              ))}
            </ul>
          );
        };
        return (
          <div key={index} className="max-w-3xl">
            {block.items && renderList(block.items)}
          </div>
        );

      case "image":
        return (
          <div key={index}>
            {block.title && (
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
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
                  variant={block.imageVariant || "gallery"}
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
            {/* The Content Side */}
            <div className="flex-1 space-y-6">
              {/* Render standard text if provided */}
              {Array.isArray(block.text) ? (
                block.text.map((p, pIndex) => (
                  <div
                    key={pIndex}
                    className="text-base leading-relaxed text-body-subtext"
                  >
                    <Markdown>{p}</Markdown>
                  </div>
                ))
              ) : block.text ? (
                <div className="text-base leading-relaxed text-body-subtext">
                  <Markdown>{block.text}</Markdown>
                </div>
              ) : null}

              {/* NEW: Render nested content (Lists, Dividers, etc.) on this side */}
              {block.content && renderBlocks(block.content)}
            </div>

            {/* The Image Side */}
            {block.imageUrl?.[0] && (
              <div className="w-full md:w-[35%] shrink-0">
                <ArticleImage
                  src={block.imageUrl[0].src}
                  caption={block.imageUrl[0].caption}
                  source={block.imageUrl[0].source}
                  variant={block.imageVariant || "square"}
                />
              </div>
            )}
          </div>
        );

      case "sources":
        return (
          <div key={index} className="max-w-3xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              References & External Links
            </h3>
            <ul className="grid grid-cols-1 gap-1">
              {Array.isArray(block.text) &&
                block.text.map((item, lIndex) => {
                  let isPureUrl = false;
                  let domain = "";

                  try {
                    const url = new URL(item);
                    isPureUrl = true;
                    domain = url.hostname.replace("www.", "");
                  } catch (e) {
                    isPureUrl = false;
                  }

                  return (
                    <li key={lIndex} className="group list-none">
                      {isPureUrl ? (
                        <a
                          href={item}
                          target="_blank"
                          rel="noopener noreferrer"
                          // Changed to block to remove flex-shink issues
                          className="block px-4 py-3 rounded-xl border border-transparent hover:bg-brand/5 transition-colors overflow-hidden"
                        >
                          <div className="w-full">
                            <span className="text-sm font-medium text-brand break-all whitespace-normal block leading-normal">
                              {item}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-body-subtext/60 font-semibold mt-1 block">
                              {domain}
                            </span>
                          </div>
                        </a>
                      ) : (
                        <div className="text-sm leading-relaxed text-body-subtext px-4 py-1 break-words">
                          <Markdown>{item}</Markdown>
                        </div>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        );
      case "divider":
        return <hr key={index} className="border-t border-body-subtext/30" />;

      case "group":
        return (
          <div key={index} className="flex flex-col gap-4">
            {block.content && renderBlocks(block.content)}
          </div>
        );

      default:
        return null;
    }
  });
};

export default renderBlocks;
