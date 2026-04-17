import React from "react";

type Props = {
  title: string;
  description: string;
};

const PageHeader = (props: Props) => {
  return (
    <header className="flex flex-col items-start gap-1 max-w-3xl">
      <h3 className="text-3xl lg:text-4xl font-bold">{props.title}</h3>
      <p className="text-base lg:text-lg text-body-subtext leading-tight">
        {props.description}
      </p>
    </header>
  );
};

export default PageHeader;
