import React from 'react';

interface Props {
  text: string;
}

export default function Heading({
  text,
}: Props) {
  return (
    <div className="my-8 text-xl font-medium tracking-wider text-center uppercase dark:text-slate-200 sm:text-2xl md:text-4xl sm:my-12 md:my-16">
      {text}
    </div>
  );
}
