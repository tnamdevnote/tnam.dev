"use client";

import React from "react";

type CardProps = {
  children: React.ReactNode;
};
type CardHeaderProps = {
  title: string | React.ReactNode;
  subheader?: string;
};
type CardContentProps = { children: React.ReactNode };

function Card({ children }: CardProps) {
  return <div>{children}</div>;
}

function Header({ title, subheader }: CardHeaderProps) {
  return (
    <div className="mb-2 flex items-center justify-between text-body">
      <h3 className="dark:text-dark-accent-8 text-body text-accent-8">
        {title}
      </h3>
      <h5 className="dark:text-dark-accent-4 text-xs text-accent-4">
        {subheader}
      </h5>
    </div>
  );
}
function Content({ children }: CardContentProps) {
  return <div className="mt-2">{children}</div>;
}

Card.Header = Header;
Card.Content = Content;

export default Card;
