"use client";
import React from "react";
import { navbarData } from "@/data/navbarData";
import Image from "next/image";
import { Triangle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 bg-linear-to-r from-brand to-brand-secondary shadow-sm z-50 p-2 text-brand-text">
      <div className="navbar section-wrapper">
        <div className="flex-1 flex gap-4 items-center">
          {navbarData?.logo ? (
            <Image src={navbarData?.logo} alt="logo" width={50} height={50} />
          ) : (
            <Triangle />
          )}

          <a href="/">
            <p className="font-semibold text-xl">{navbarData?.title}</p>
            {navbarData?.subtitle && (
              <p className="text-sm font-semibold text-brand-subtext">
                {navbarData?.subtitle}
              </p>
            )}
          </a>
        </div>
        <div className="flex-none">
          {navbarData?.sections.map((section) => {
            // Check if the current path matches the section path
            const isActive = pathname === section.path;

            return (
              <Link
                key={section.title}
                href={section.path}
                className={`btn btn-ghost btn-sm rounded-btn text-base custom-link ${
                  isActive ? "active" : ""
                }`}
              >
                <li className="hover-underline-animation">{section.title}</li>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
