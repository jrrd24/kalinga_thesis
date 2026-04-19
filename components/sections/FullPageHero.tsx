import Image from "next/image";
import React from "react";
import HeroButton from "../buttons/HeroButton";

interface FullPageHeroProps {
  imgSrc: string;
  title: string;
  subtitle?: string;
  buttons?: ButtonProps[];
}

interface ButtonProps {
  text: string;
  href: string;
  type: string;
  showArrow?: boolean;
  textClass?: string;
}

const FullPageHero = ({
  imgSrc,
  title,
  subtitle,
  buttons,
}: FullPageHeroProps) => {
  return (
    <section className="relative h-svh w-full md:max-h-200 [clip-path:inset(0)]">
      <div className="fixed inset-0 z-0 h-full w-full">
        <Image
          src={imgSrc}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/60 z-1" />

      {/* Content Overlay */}
      <div className="relative z-10 section-wrapper lg:max-h-165  h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-brand-text px-4">
        <h1 className="text-3xl md:text-6xl font-bold drop-shadow-2xl max-w-4xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 text-base md:text-xl text-brand-subtext max-w-2xl drop-shadow-md">
            {subtitle}
          </p>
        )}

        <div className="mt-10 flex gap-4">
          {buttons?.map((button, index) => (
            <HeroButton key={index} {...button} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FullPageHero;
