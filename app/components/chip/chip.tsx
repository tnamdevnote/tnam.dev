import React from "react";

type ChipProps = {
  title?: string;
  label: string;
};

function Chip({ title, label }: ChipProps) {
  return (
    <span
      className="inline-block max-w-sm overflow-hidden text-ellipsis rounded-full bg-primary-cyan-15 px-3 py-1 text-pretitle font-normal text-primary-cyan-100"
      title={title}
    >
      {label}
    </span>
  );
}

export default Chip;
