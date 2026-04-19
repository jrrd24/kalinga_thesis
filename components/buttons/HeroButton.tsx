import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  href: string;
  type?: string;
  showArrow?: boolean | undefined;
  textClass?: string;
};

const HeroButton = ({
  text,
  href,
  type = "solid",
  showArrow = false,
  textClass = "",
}: Props) => {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center gap-2 transition-all duration-300 ease-in-out rounded-full w-fit
    ${
      type === "solid"
        ? "btn btn-primary bg-white text-body-text hover:bg-brand-subtext border-2 border-white"
        : "btn border-1-solid border-brand-text bg-transparent hover:bg-black/60"
    }`}
    >
      <span className={`${text-Class} font-base`}>{text}</span>

      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </Link>
  );
};

export default HeroButton;
