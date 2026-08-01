'use client';

import { useEffect, useState } from 'react';

const TABS = [
  { label: 'About Spectrum', hash: 'about' },
  { label: 'Internet', hash: 'internet' },
  { label: 'TV', hash: 'tv' },
  { label: 'Customer Service', hash: 'customer-service' },
];

function getActiveHash() {
  if (typeof window === 'undefined') return 'about';
  const hash = window.location.hash.replace(/^#/, '');
  return TABS.some((tab) => tab.hash === hash) ? hash : 'about';
}

export default function SpectrumTabs() {
  const [activeHash, setActiveHash] = useState('about');

  useEffect(() => {
    const sync = () => setActiveHash(getActiveHash());
    sync();
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('popstate', sync);
    };
  }, []);

  function handleClick(event, hash) {
    event.preventDefault();
    const nextUrl = `${window.location.pathname}#${hash}`;
    window.history.pushState(null, '', nextUrl);
    setActiveHash(hash);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  return (
    <nav aria-label="Spectrum page sections" className="border-b border-white/10 bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 py-3" role="list">
          {TABS.map((tab) => {
            const isSelected = activeHash === tab.hash;
            return (
              <li key={tab.hash}>
                <a
                  href={`#${tab.hash}`}
                  aria-current={isSelected ? 'page' : undefined}
                  onClick={(event) => handleClick(event, tab.hash)}
                  className={`inline-block px-3 sm:px-4 py-2 text-sm sm:text-base font-medium select-none cursor-pointer ${
                    isSelected
                      ? 'text-cyan-300 border-b-2 border-cyan-400'
                      : 'text-gray-500 border-b-2 border-transparent hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
