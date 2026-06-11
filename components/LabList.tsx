import React from 'react';
import Divider from './Divider';
import Heading from './Heading';
import LabItem from './LabItem';

interface LabListProps {
  enabled: boolean;
  title: string;
  items: Array<{
    name: string;
    link: string;
  }>;
}

export default function LabList({
  enabled,
  title,
  items,
}: LabListProps) {
  return enabled ? (
    <>
      <Divider anchor={title} />
      <Heading text={title} />
      <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {items.map(({
          name,
          link,
        }) => (
          <LabItem
            key={link}
            name={name}
            link={link}
          />
        ))}
      </div>
    </>
  ) : <template />;
}
