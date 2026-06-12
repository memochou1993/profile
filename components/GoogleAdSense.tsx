import React from 'react';

interface GoogleAdSenseProps {
  enabled: boolean;
  client: string;
}

export default function GoogleAdSense({
  enabled,
  client,
}: GoogleAdSenseProps) {
  return enabled ? (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  ) : <template />;
}
