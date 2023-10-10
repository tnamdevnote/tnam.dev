import React from "react";

type ChipProps = {
  title?: string;
  label: string;
};

function Chip({ title, label }: ChipProps) {
  return (
    <span
      className="bg-primary-cyan-25 inline-block max-w-sm overflow-hidden text-ellipsis rounded-full px-3 py-1 text-pretitle font-normal text-primary-cyan-100"
      title={title}
    >
      {label}
    </span>
  );
}

export default Chip;
