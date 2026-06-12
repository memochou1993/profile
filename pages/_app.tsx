import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  GoogleAnalytics,
} from '@/components';
import config from '../nyan.config.json';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Head>
        <meta name="author" content={config.meta.author} />
        <meta name="description" content={config.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.meta.title} />
        <meta property="og:description" content={config.meta.description} />
        <meta property="og:image" content={config.meta.image} />
        <meta property="og:image:alt" content={config.meta.title} />
        <meta property="og:image:type" content="image/jpeg" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#18181b" />
      </Head>
      <GoogleAnalytics {...config.components.googleAnalytics} />
      <Component {...pageProps} />
    </>
  );
}
