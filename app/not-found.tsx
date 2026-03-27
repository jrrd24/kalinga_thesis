import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    // Added 'section-wrapper' to match your Navbar and center the whole thing on the screen
    // Changed 'justify-between' to 'justify-center' or 'items-center' for better vertical flow
    <div className="section-wrapper flex flex-col lg:flex-row items-center justify-between min-h-[80vh] px-4 gap-10">
      {/* LEFT CONTENT */}
      <div className="flex flex-col text-center lg:text-left items-center  min-h-[80vh] lg:items-start justify-center">
        <h2 className="text-8xl font-bold text-brand mb-4">404</h2>
        <h1 className="text-3xl font-semibold text-body-text mb-2">
          Oops! Page Not Found
        </h1>
        <p className="text-body-text-light max-w-md mb-8 text-lg">
          We can't seem to find the page you're looking for.
        </p>
        <Link
          href="/"
          // Added 'hover:opacity-90' and transition for a smoother feel
          className="btn bg-brand hover:bg-brand-accent text-brand-text border-none px-8 transition-all"
        >
          Return to Home
        </Link>
      </div>

      {/* RIGHT CONTENT */}
      {/* 'hidden' hides it on small/mobile. 'lg:flex' brings it back on large screens. */}
      <div className="hidden lg:flex flex-1 justify-end select-none">
        <Image
          src="/assets/404.svg"
          alt="404 Illustration"
          width={500}
          height={500}
          className="h-auto w-full max-w-[500px]"
          priority
        />
      </div>
    </div>
  );
};

export default NotFound;
