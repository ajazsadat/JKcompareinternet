import Image from 'next/image';
import TawkChatButton from '@/components/TawkChatButton';

export const metadata = {
  title: 'Live Agent | JKcompareinternet',
  description:
    'How would you like to connect for internet services and assistance? Speak with a live agent by phone or chat.',
};

const PHONE_DISPLAY = '888-879-9161';
const PHONE_HREF = 'tel:8888799161';

function CallIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 92 92" fill="none" aria-hidden="true">
      <rect width="92" height="92" rx="46" fill="url(#liveAgentCallGrad)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.9828 53.9592L57.1856 53.2973C55.7933 53.1375 54.4239 53.6168 53.4425 54.5983L49.2429 58.7979C42.7838 55.5112 37.4887 50.2389 34.2021 43.7569L38.4245 39.5345C39.4059 38.5531 39.8852 37.1837 39.7254 35.7914L39.0635 30.0398C38.7897 27.7346 36.8496 26 34.5216 26H30.5731C27.994 26 25.8486 28.1454 26.0084 30.7245C27.218 50.2161 42.8066 65.782 62.2753 66.9916C64.8543 67.1514 66.9998 65.0059 66.9998 62.4268V58.4783C67.0226 56.1731 65.288 54.2331 62.9828 53.9592Z"
        fill="white"
      />
      <defs>
        <linearGradient id="liveAgentCallGrad" x1="65" y1="8.5" x2="25" y2="92" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB17C" />
          <stop offset="1" stopColor="#FC6427" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function LiveAgentPage() {
  return (
    <div
      className="min-h-screen w-full bg-[#FEF3ED] bg-cover bg-center bg-no-repeat px-3 py-6 sm:px-4 sm:py-8"
      style={{
        backgroundImage: "url('/images/live-agent/page-bg.jpg')",
        fontFamily: 'var(--font-live-lato), Lato, sans-serif',
      }}
    >
      <div className="mx-auto flex w-full max-w-[1340px] flex-col items-center">
        <h1
          className="mb-6 max-w-4xl text-center text-[28px] font-extrabold capitalize leading-[34px] text-black sm:mb-8 sm:text-[36px] sm:leading-[44px] md:text-[44px] md:leading-[53px]"
          style={{ fontFamily: 'var(--font-live-playfair), "Playfair Display", serif' }}
        >
          How would you like to connect for Internet{' '}
          <span className="text-[#FE6B2F]">Services and Assistance?</span>
        </h1>

        <div className="flex w-full flex-col items-stretch justify-center gap-4 md:flex-row md:gap-[22px]">
          {/* Phone Call card */}
          <div
            className="flex min-h-[46vh] w-full flex-col items-center justify-center overflow-hidden rounded-[14px] px-4 py-6 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.18)] md:min-h-[60vh] md:w-[40%] md:px-5"
            style={{
              backgroundColor: '#FEF3ED',
              backgroundImage: "url('/images/live-agent/phone-card-bg.jpg')",
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <Image
              src="/images/live-agent/phone-icon.png"
              alt=""
              width={138}
              height={138}
              className="mb-2 w-[40%] max-w-[110px] md:w-[48%]"
            />
            <h2 className="mb-1 text-center text-[28px] font-extrabold capitalize leading-[34px] text-black md:text-[34px] md:leading-[38px]">
              Phone Call
            </h2>
            <h4 className="mb-3 text-center text-[18px] font-extrabold capitalize leading-[24px] text-[#FE6B2F] md:text-[20px] md:leading-[26px]">
              to speak with a live agent
            </h4>
            <div className="mx-auto mb-4 h-[2.5px] w-[14%] bg-[#FE6B2F]" />
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-start gap-3 rounded-md border border-[#FE6B2F] bg-white px-3 py-2 no-underline transition hover:brightness-95"
            >
              <CallIcon />
              <span className="text-left" style={{ fontFamily: 'var(--font-live-montserrat), Montserrat, sans-serif' }}>
                <span className="block text-[16px] font-semibold leading-6 text-black sm:text-[17px]">Call Now</span>
                <span className="block text-[16px] font-semibold text-[#FE6B2F] sm:text-[21px]">{PHONE_DISPLAY}</span>
              </span>
            </a>
          </div>

          {/* Chat card */}
          <div className="flex min-h-[46vh] w-full flex-col items-center justify-center rounded-[14px] bg-white px-4 py-6 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.18)] md:min-h-[60vh] md:w-[40%] md:px-5">
            <Image
              src="/images/live-agent/chat-icon.png"
              alt=""
              width={138}
              height={138}
              className="mb-2 w-[40%] max-w-[110px] md:w-[48%]"
            />
            <h2 className="mb-1 text-center text-[28px] font-extrabold capitalize leading-[34px] text-black md:text-[34px] md:leading-[38px]">
              Chat
            </h2>
            <h4 className="mb-3 text-center text-[18px] font-extrabold capitalize leading-[24px] text-[#FE6B2F] md:text-[20px] md:leading-[26px]">
              with a live agent
            </h4>
            <div className="mx-auto mb-4 h-[2.5px] w-[14%] bg-[#FE6B2F]" />
            <TawkChatButton
              className="rounded-none border-0 bg-[#FE6B2F] px-9 py-3.5 text-[17px] font-medium text-white transition hover:bg-black md:text-[20px]"
              style={{ fontFamily: 'var(--font-live-montserrat), Montserrat, sans-serif' }}
            >
              Chat Now
            </TawkChatButton>
          </div>
        </div>
      </div>
    </div>
  );
}
