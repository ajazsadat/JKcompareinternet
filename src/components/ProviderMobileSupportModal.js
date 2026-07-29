'use client';

import { useEffect } from 'react';
import IndependentSupportHelpContent from '@/components/IndependentSupportHelpContent';

export default function ProviderMobileSupportModal() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const syncBodyScroll = () => {
      document.body.style.overflow = mediaQuery.matches ? 'hidden' : '';
    };

    syncBodyScroll();
    mediaQuery.addEventListener('change', syncBodyScroll);

    return () => {
      mediaQuery.removeEventListener('change', syncBodyScroll);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto overscroll-contain md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Internet services and assistance"
    >
      <IndependentSupportHelpContent className="min-h-dvh" />
    </div>
  );
}
