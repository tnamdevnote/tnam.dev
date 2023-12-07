import React from "react";

type ChipProps = {
  title?: string;
  label: string;
};

function Chip({ title, label }: ChipProps) {
  return (
    <div
      className="inline-block max-w-sm overflow-hidden text-ellipsis rounded-full bg-teal-400/5 px-3 py-1 text-pretitle font-normal text-teal-500 dark:bg-teal-400/20"
      title={title}
    >
      {label}
    </div>
  );
}

export default Chip;
