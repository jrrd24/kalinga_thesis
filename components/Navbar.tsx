"use client";
import React from "react";
import { navbarData } from "@/data/navbarData";
import Image from "next/image";
import { Triangle, Menu } from "lucide-react"; // Added Menu icon
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = navbarData?.sections.map((section) => {
    const isActive = pathname === section.path;
    return (
      <Link
        key={section.title}
        href={section.path}
        className={`btn btn-ghost btn-sm rounded-btn text-base custom-link ${
          isActive ? "active" : ""
        }`}
      >
        <span className="hover-underline-animation">{section.title}</span>
      </Link>
    );
  });

  return (
    <nav className="sticky h-20 top-0 z-50 bg-linear-to-r from-brand to-brand-secondary shadow-sm py-2 text-brand-text">
      <div className="navbar section-wrapper">
        <div className="flex-1 flex gap-4  items-center">
          {/* MOBILE DROPDOWN */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <Menu size={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-brand rounded-box w-52 border border-brand-accent/20"
            >
              {navbarData?.sections.map((section) => (
                <li key={section.title}>
                  <Link
                    href={section.path}
                    className={
                      pathname === section.path
                        ? "text-brand-subtext font-bold"
                        : "text-brand-text font-bold"
                    }
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LOGO & TITLE */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex ">
              {navbarData?.logo ? (
                <Image
                  src={navbarData?.logo}
                  alt="logo"
                  width={50}
                  height={50}
                />
              ) : (
                <Triangle />
              )}
            </div>

            <Link href="/">
              <p className="font-semibold text-lg md:text-xl leading-tight">
                {navbarData?.title}
              </p>
              {navbarData?.subtitle && (
                <p className="text-xs md:text-sm font-medium text-brand-subtext">
                  {navbarData?.subtitle}
                </p>
              )}
            </Link>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="flex-none hidden lg:flex gap-2">{navLinks}</div>
      </div>
    </nav>
  );
};

export default Navbar;
