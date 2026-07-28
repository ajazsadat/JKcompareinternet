import Image from 'next/image';

export const metadata = {
  title: 'Live Agent | JKcompareinternet',
  description:
    'How would you like to connect for internet services and assistance? Speak with a live agent or use our automated support line.',
};

const PHONE_DISPLAY = '(888) 908-7350';
const PHONE_HREF = 'tel:(888) 908-7350';

function CallIcon({ gradientId = 'liveAgentCallGrad' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 92 92" fill="none" aria-hidden="true">
      <rect width="92" height="92" rx="46" fill={`url(#${gradientId})`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.9828 53.9592L57.1856 53.2973C55.7933 53.1375 54.4239 53.6168 53.4425 54.5983L49.2429 58.7979C42.7838 55.5112 37.4887 50.2389 34.2021 43.7569L38.4245 39.5345C39.4059 38.5531 39.8852 37.1837 39.7254 35.7914L39.0635 30.0398C38.7897 27.7346 36.8496 26 34.5216 26H30.5731C27.994 26 25.8486 28.1454 26.0084 30.7245C27.218 50.2161 42.8066 65.782 62.2753 66.9916C64.8543 67.1514 66.9998 65.0059 66.9998 62.4268V58.4783C67.0226 56.1731 65.288 54.2331 62.9828 53.9592Z"
        fill="white"
      />
      <defs>
        <linearGradient id={gradientId} x1="65" y1="8.5" x2="25" y2="92" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CallNowButton({ gradientId }) {
  return (
    <a
      href={PHONE_HREF}
      className="inline-flex items-center justify-start gap-3 rounded-xl border border-cyan-400/40 bg-[#0b0c10] px-4 py-3 no-underline transition hover:border-cyan-300 hover:bg-[#111827]"
    >
      <CallIcon gradientId={gradientId} />
      <span className="text-left">
        <span className="block text-sm font-semibold text-white sm:text-base">Call Now</span>
        <span className="block text-base font-semibold text-cyan-400 sm:text-xl">{PHONE_DISPLAY}</span>
      </span>
    </a>
  );
}

export default function LiveAgentPage() {
  return (
    <div className="min-h-screen w-full bg-[#0b0c10] px-4 py-10 sm:py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <h1 className="mb-8 max-w-4xl text-center text-3xl font-extrabold tracking-tight text-white sm:mb-10 sm:text-4xl md:text-5xl">
          How would you like to connect for Internet{' '}
          <span className="text-cyan-400">Services and Assistance?</span>
        </h1>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* Phone Call card */}
          <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#1f2833] px-6 py-8 shadow-xl">
            <Image
              src="/images/live-agent/phone-icon.png"
              alt=""
              width={138}
              height={138}
              className="mb-4 w-[100px] md:w-[120px]"
            />
            <h2 className="mb-1 text-center text-2xl font-extrabold text-white md:text-3xl">
              Phone Call
            </h2>
            <h4 className="mb-4 text-center text-base font-semibold text-cyan-400 md:text-lg">
              to speak with a live agent
            </h4>
            <div className="mx-auto mb-6 h-[2px] w-14 bg-cyan-400" />
            <CallNowButton gradientId="liveAgentCallGradPhone" />
          </div>

          {/* Automated Support Line card */}
          <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#1f2833] px-6 py-8 shadow-xl">
            <Image
              src="/images/live-agent/chat-icon.png"
              alt=""
              width={138}
              height={138}
              className="mb-4 w-[100px] md:w-[120px]"
            />
            <h2 className="mb-4 text-center text-2xl font-extrabold text-white md:text-3xl">
              Automated Support Line
            </h2>
            <div className="mx-auto mb-6 h-[2px] w-14 bg-cyan-400" />
            <CallNowButton gradientId="liveAgentCallGradAuto" />
          </div>
        </div>
      </div>
    </div>
  );
}
