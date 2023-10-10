import React from "react";

type ChipProps = {
  title?: string;
  label: string;
};

function Chip({ title, label }: ChipProps) {
  return (
    <span
      className="rounded-full bg-primary-cyan-15 px-3 py-2 text-small text-primary-cyan-100"
      title={title}
    >
      {label}
    </span>
  );
}

export default Chip;
