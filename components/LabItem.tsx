import React from 'react';

interface LabItemProps {
  name: string;
  link: string;
}

export default function LabItem({
  name,
  link,
}: LabItemProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <span className="text-slate-800 dark:text-slate-200 hover:underline hover:decoration-1 hover:underline-offset-4">
        {name}
      </span>
    </a>
  );
}
