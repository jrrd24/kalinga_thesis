"use client";
import { navbarData } from "@/data/navbarData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const FooterColumn = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-base md:text-lg text-brand-text">
        {title}
      </h3>
      {children}
    </div>
  );
};

const Footer = (props: Props) => {
  const pathname = usePathname();
  return (
    <footer className="bg-linear-to-r from-brand to-brand-accent shadow-sm py-2 text-brand-text">
      <div className="section-wrapper py-6 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <FooterColumn title="About This Project">
            <p className="text-sm md:text-base text-brand-subtext leading-snug">
              The Local History and Rich Cultural Heritage of Rizal Province of
              Kalinga - A comprehensive educational resource platform honoring
              indigenous traditions and history.
            </p>
          </FooterColumn>
          <FooterColumn title="Quick Links">
            <ul className="text-sm md:text-base text-brand-subtext leading-snug flex flex-col gap-2">
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
          </FooterColumn>
          <FooterColumn title="University">
            <p className="text-sm md:text-base text-brand-subtext leading-snug">
              University of Saint Louis Tuguegarao School of Education,
              Criminology, Arts and Psychology Bartolome Street, Leonarda,
              Tuguegarao City, Cagayan
            </p>
          </FooterColumn>
        </div>

        <hr className="opacity-25" />

        <p className="text-sm md:text-base text-brand-subtext leading-snug text-center">
          &copy; {new Date().getFullYear()} Local History of Rizal Kalinga.
          BSED-Social Studies Research Project.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
