"use client";
import { Icon, LucideIcon } from "lucide-react";
import React, { useState, useEffect } from "react";

interface ScrollSectionProps {
  id: string;
  label: string;
  title: string;
  content: React.ReactNode;
  Icon?: LucideIcon;
}

const ScrollSection = ({ data }: { data: ScrollSectionProps[] }) => {
  const [activeSection, setActiveSection] = useState(data[0].id);

  useEffect(() => {
    const observerOptions = {
      // This creates a detection zone: 20% from the top and 70% from the bottom
      // It acts like a "strike zone" in the upper-middle of the screen.
      rootMargin: "-20% 0% -70% 0%",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    data.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    // Force 'history' active when at the very top of the page
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActiveSection(data[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-body-bg-alt">
      <div className="section-wrapper w-full flex flex-col md:flex-row gap-12">
        {/* LEFT SIDE: Sticky Navigation */}
        <aside className="md:w-1/4 h-fit md:sticky md:top-32 py-16 mt-16 mb-60 border-l border-body-subtext/15 hidden md:block">
          <nav className="flex flex-col gap-6 relative">
            {data.map((section) => (
              <button
                key={section.id}
                onClick={() =>
                  document
                    .getElementById(section.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`group relative pl-6 text-left transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-body-text font-bold"
                    : "text-body-subtext/60"
                }`}
              >
                <div
                  className={`absolute left-0 top-0 h-full w-1 bg-brand-secondary transition-all duration-300 ${
                    activeSection === section.id
                      ? "opacity-100 scale-y-100"
                      : "opacity-0 scale-y-0"
                  }`}
                />
                {section.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* RIGHT SIDE: Scrollable Content */}
        <div className="md:w-3/4 space-y-24 py-16 md:py-0 md:space-y-[10vh] md:pb-[10vh]">
          {data.map((section) => {
            const SectionIcon = section?.Icon;
            return (
              <section
                key={section.id}
                id={section.id}
                className="md:min-h-[60vh] flex flex-col md:pt-40"
              >
                <div className="flex gap-4 items-center mb-6">
                  {SectionIcon && (
                    <SectionIcon className="text-brand size-6 md:size-8" />
                  )}
                  <h2 className="text-2xl md:text-4xl font-bold  text-brand">
                    {section.title}
                  </h2>
                </div>

                {/* Change: We now render the section.content directly */}
                <div className="text-sm md:text-lg leading-loose text-gray-600 max-w-2xl">
                  {section.content}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
