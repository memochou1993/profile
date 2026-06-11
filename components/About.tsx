import React from 'react';
import Divider from './Divider';
import Heading from './Heading';

interface AboutProps {
  enabled: boolean;
  title: string;
}

export default function About({
  enabled,
  title,
}: AboutProps) {
  return enabled ? (
    <>
      <Divider anchor={title} />
      <Heading text={title} />
      <div className="text-center dark:text-slate-300">
        <p className="my-4">
          I&apos;m Memo Chou. I build web apps and experiments.
        </p>
        <p className="my-4">
          Feel free to reach out anytime.
        </p>
      </div>
    </>
  ) : <template />;
}
