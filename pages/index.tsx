import React, {
  useState,
} from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import {
  Divider,
  Heading,
  Profile,
  About,
  ProjectList,
  Footer,
} from '@/components';
import colors from 'tailwindcss/colors';

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className={isDark ? 'dark' : ''}>
      <Head>
        <title>Memo Chou</title>
        <meta name="description" content="Memo's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-slate-300 dark:bg-slate-900">
        <div className="container px-16 py-12 mx-auto sm:px-24 md:px-32">
          <nav className="flex justify-between text-slate-800 dark:text-slate-200">
            <div className="flex flex-row items-center">
              <div className="mr-4 text-xl underline decoration-1 underline-offset-2">
                <a href="#about">
                  About
                </a>
              </div>
              <div className="mr-4 text-xl underline decoration-1 underline-offset-2">
                <a href="#projects">
                  Projects
                </a>
              </div>
              <div className="mr-4 text-xl underline decoration-1 underline-offset-2">
                <a href="#articles">
                  Articles
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center w-8 h-8">
              <button
                type="button"
                onClick={() => {
                  document.documentElement.style.setProperty('background-color', colors.slate[isDark ? 300 : 900]);
                  setIsDark(!isDark);
                }}
              >
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100" />
              </button>
            </div>
          </nav>
          <main className="my-12">
            <Profile />
            <Divider id="about" />
            <Heading text="About" />
            <About />
            <Divider id="projects" />
            <Heading text="Projects" />
            <ProjectList />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
