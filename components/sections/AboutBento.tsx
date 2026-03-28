import React from "react";

const BENTO_ITEMS = [
  {
    title: "19,554",
    description: "Total Population",
    // Changed lg: to md: to start the span earlier
    className: "md:row-span-2",
    innerRounding: "max-md:rounded-t-4xl md:rounded-l-[calc(2rem+1px)]",
    bgColor: "bg-brand-accent",
    textColor: "text-brand-subtext",
    img: "/assets/bento-population.svg",
  },
  {
    title: "28,178.8435",
    description: "Land Area (in Hectares)",
    className: "",
    innerRounding: " ",
    bgColor: "bg-brand",
    textColor: "text-brand-subtext",
  },
  {
    title: "3RD CLASS",
    description: "Income Class",
    // Changed lg: to md: for positioning
    className: "max-md:row-start-3 md:col-start-2 md:row-start-2",
    innerRounding: "",
    bgColor: "bg-brand-subtext",
    textColor: "text-body-subtext",
  },
  {
    title: "14",
    description: "No. of Barangays",
    // Changed lg: to md: to start the span earlier
    className: "md:row-span-2",
    innerRounding:
      "max-md:rounded-b-4xl md:rounded-r-4xl max-md:rounded-b-[calc(2rem+1px)] md:rounded-r-[calc(2rem+1px)]",
    bgColor: "bg-brand-secondary",
    textColor: "text-brand-text",
    img: "/assets/bento-barangay.svg",
  },
];

const AboutBento = () => {
  return (
    <div className="section-wrapper py-16 flex flex-col gap-8 w-full">
      <header className="flex flex-col items-start gap-1">
        <h3 className="text-2xl lg:text-3xl font-bold">About Rizal, Kalinga</h3>
        <p className="text-sm lg:text-base text-body-subtext">
          Discover the rich heritage, indigenous culture, and enduring
          traditions that define the people of Rizal, Kalinga.
        </p>
      </header>

      {/* Changed lg:grid-cols-3 to md:grid-cols-3 and added md:grid-rows-2 */}
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
        {BENTO_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col ${item.className}`}
          >
            <div
              className={`absolute inset-px rounded-lg ${item.bgColor} ${item.innerRounding}`}
            />

            <div
              className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${item.innerRounding}`}
            >
              <div className="px-8 py-6">
                <p
                  className={`text-3xl lg:text-4xl font-medium tracking-tight ${item.bgColor === "bg-brand-subtext" ? "text-brand" : "text-brand-text"} max-md:text-center`}
                >
                  {item.title}
                </p>
                <p
                  className={`max-w-lg text-sm/6 ${item.textColor} max-md:text-center`}
                >
                  {item.description}
                </p>
              </div>

              {item.img && (
                <div className="relative mt-auto flex flex-1 items-center justify-center md:justify-end -mb-7 p-4">
                  <img
                    src={item.img}
                    alt={item.description}
                    className="max-h-48 w-auto object-contain"
                  />
                </div>
              )}
            </div>

            <div
              className={`pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 ${item.innerRounding}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutBento;
