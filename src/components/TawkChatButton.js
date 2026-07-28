'use client';

export default function TawkChatButton({ className, style, children = 'Chat Now' }) {
  const openChat = () => {
    if (typeof window !== 'undefined' && window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
      return;
    }

    // Widget may still be loading — retry briefly
    const started = Date.now();
    const timer = setInterval(() => {
      if (window.Tawk_API?.maximize) {
        window.Tawk_API.maximize();
        clearInterval(timer);
      } else if (Date.now() - started > 5000) {
        clearInterval(timer);
      }
    }, 200);
  };

  return (
    <button type="button" onClick={openChat} className={className} style={style}>
      {children}
    </button>
  );
}
