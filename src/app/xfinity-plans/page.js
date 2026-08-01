import Image from 'next/image';
import Link from 'next/link';
import ProviderComparisonTable from '@/components/ProviderComparisonTable';
import ProviderWhyChoose from '@/components/ProviderWhyChoose';

export const metadata = {
  title: 'Xfinity TV & Internet Deals | JKcompareinternet',
  description: 'Explore the best Xfinity TV and Internet plans. Fast speeds, huge channel lineups, and reliable service.',
};

export default function XfinityPage() {
  const plans = [
    {
      speed: 'Up To 50 Mbps',
      price: '35',
      features: [
        'Suitable for small households (up to 4 devices)',
        'Stream content & video conferencing',
        'Download music and photos',
      ],
    },
    {
      speed: 'Up to 300 Mbps',
      price: '50',
      features: [
        'Supports up to 5 devices',
        'Designed for everyday streaming and browsing',
        'Download music and photos',
      ],
    },
    {
      speed: 'Up to 500 Mbps',
      price: '60',
      features: [
        'Connect up to 8 devices',
        'Suitable for streaming & video conferencing',
        'Download music and photos',
      ],
    },
    {
      speed: 'Up To 1000 Mbps',
      price: '70',
      features: [
        'Supports 12+ devices at a time',
        'Designed for heavy downloads',
        'Stream with high-speed performance',
      ],
    },
    {
      speed: 'Up To 1200 Mbps',
      price: '80',
      features: [
        'Supports up to 11 devices',
        'Download shows quickly',
        'Stream in HD on multiple screens',
      ],
    },
    {
      speed: 'Up to 2000 Mbps',
      price: '100',
      features: [
        'Multiple connected devices',
        'Stream with an enhanced WiFi experience',
        'Well-suited for multiplayer gaming',
      ],
    },
  ];

  const faqs = [
    {
      q: 'Is JKcompareinternet affiliated with Xfinity or Comcast?',
      a: "No — we're an independent comparison resource, not a Comcast or Xfinity partner. We compare Xfinity alongside other providers so you can see how it stacks up.",
    },
    {
      q: 'Where do I go for help with my current Xfinity account or bill?',
      a: "That has to go through Xfinity directly — we don't have access to customer accounts. We can point you to Xfinity's official contact info if needed.",
    },
    {
      q: 'What makes JKcompareinternet different from going straight to Xfinity?',
      a: "We show you Xfinity's pricing next to other providers like AT&T and Spectrum, so you're comparing real numbers instead of just one company's pitch.",
    },
    {
      q: 'Can you tell me what Xfinity plans are available at my address?',
      a: "Yes — call or fill out the form and we'll walk you through what's offered specifically in your area.",
    },
    {
      q: 'Are the prices shown here exactly what Xfinity charges?',
      a: 'These are starting-point estimates based on publicly available rates. Final pricing depends on your address and current promotions — we confirm exact numbers on the call.',
    },
    {
      q: 'Does it cost anything to compare plans with you?',
      a: "No — there's no cost to call or request a comparison, and no obligation to switch.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c10]">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[400px] flex items-center justify-center border-b border-white/10 overflow-hidden">
        <Image
          src="/images/xfinity.png"
          alt="Xfinity Internet High Speed"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <p className="text-lg md:text-xl font-semibold text-cyan-300 mb-3 drop-shadow-md">
            Xfinity Internet &amp; Cable Services
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Compare <span className="text-blue-400">Xfinity</span> Plans With JKcompareinternet
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
            Call to get assistance comparing providers and finding the right Xfinity plan for your area.
          </p>
        </div>
      </section>

      <section className="border-b border-white/5 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-center">
          <Link
            href="/independent-support-help"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Speak With A Live Agent
          </Link>
          <a
            href="tel:(888) 879-9161"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-white border border-white/25 bg-white/5 hover:bg-white/10 transition"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (888) 879-9161
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Xfinity?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="bg-[#1f2833] p-4 rounded-xl border border-white/5 flex items-center">
              <span className="text-blue-500 mr-3 text-xl">✅</span>
              <span className="text-gray-300">High-speed options for Streaming, Gaming & Work</span>
            </div>
            <div className="bg-[#1f2833] p-4 rounded-xl border border-white/5 flex items-center">
              <span className="text-blue-500 mr-3 text-xl">✅</span>
              <span className="text-gray-300">No Data Caps – Unlimited Internet Usage</span>
            </div>
            <div className="bg-[#1f2833] p-4 rounded-xl border border-white/5 flex items-center">
              <span className="text-blue-500 mr-3 text-xl">✅</span>
              <span className="text-gray-300">Advanced WiFi for Extended Home Coverage</span>
            </div>
            <div className="bg-[#1f2833] p-4 rounded-xl border border-white/5 flex items-center">
              <span className="text-blue-500 mr-3 text-xl">✅</span>
              <span className="text-gray-300">Limited-Time Deals – Promotional Pricing Available</span>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">XFINITY INTERNET PLANS – SPEED OPTIONS FOR EVERY TYPE OF HOME</h2>
          <p className="text-gray-400 max-w-4xl mx-auto text-sm">
            "We are not Xfinity or any other service provider. These plans are shown for comparison purposes. Prices, features, and hardware are subject to Xfinity’s terms and availability."
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-[#1f2833] rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 flex flex-col relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Speeds {plan.speed}</h3>
              
              <ul className="mt-6 space-y-4 flex-grow relative z-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                <p className="text-gray-400 text-sm mb-1">Prices Starting From</p>
                <div className="flex items-baseline text-white">
                  <span className="text-2xl font-bold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="text-xl text-gray-400 ml-1">/ Month</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Taxes, fees & equipment extra</p>
                
                <a
                  href="tel:(888) 879-9161"
                  className="mt-6 w-full flex items-center justify-center text-center px-6 py-4 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/25 transition-all transform hover:-translate-y-1"
                >
                  Compare & Call (888) 879-9161
                </a>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Offers, availability, speeds, and pricing vary by ZIP. We are an independent comparison and referral service and do not provide service directly.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProviderComparisonTable />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="rounded-2xl border border-cyan-400/25 bg-[#111827] p-7 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              Need Xfinity/Comcast support help?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              Get independent support routing — or compare new plan options. Not affiliated with
              Xfinity or Comcast.
            </p>
          </div>
          <Link
            href="/independent-support-help"
            className="inline-flex shrink-0 items-center justify-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition"
          >
            Visit Independent Support Help
          </Link>
        </div>
      </section>

      <section className="pb-16 px-4 text-center">
        <a
          href="tel:(888) 879-9161"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition shadow-[0_0_24px_rgba(6,182,212,0.3)]"
        >
          Call Now: (888) 879-9161
        </a>
      </section>

      {/* FAQ section */}
      <section id="faq" className="py-20 bg-[#0b0c10] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-[#1f2833] border border-white/5 rounded-2xl overflow-hidden"
              >
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden px-6 py-5 flex justify-between items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50">
                  <h3 className="font-semibold text-lg text-white pr-2 m-0">{faq.q}</h3>
                  <span className="flex-shrink-0 text-blue-400 transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-400 font-light leading-relaxed m-0">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ProviderWhyChoose providerName="Xfinity" />
    </div>
  );
}
