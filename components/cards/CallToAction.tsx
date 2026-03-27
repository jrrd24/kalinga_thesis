import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="section-wrapper py-12">
      {/* Container with the brand color and rounded corners */}
      <div className="relative overflow-hidden rounded-[2rem] bg-brand px-6 py-10 text-center text-white shadow-xl">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
                45deg,
                #000,
                #000 4px,
                transparent 4px,
                transparent 12px
                )`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-xl md:text-4xl font-bold mb-4">
            Explore Kalinga Heritage Today
          </h2>
          <p className="text-brand-subtext text-base md:text-xl mb-8">
            Access comprehensive teaching materials, multimedia presentations,
            and historical archives to learn about the rich cultural heritage of
            Rizal, Kalinga.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/resources"
              className="w-full sm:w-auto rounded-xl bg-white px-8 py-2 text-lg font-bold text-brand transition-all hover:bg-gray-100 active:scale-95"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
