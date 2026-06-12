import React from 'react';
import Script from 'next/script';

interface GoogleAdSenseProps {
  enabled: boolean;
  client: string;
}

export default function GoogleAdSense({
  enabled,
  client,
}: GoogleAdSenseProps) {
  return enabled ? (
    <Script
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  ) : <template />;
}
