import Image from 'next/image';
import Link from 'next/link';
import ProviderComparisonTable from '@/components/ProviderComparisonTable';
import ProviderWhyChoose from '@/components/ProviderWhyChoose';
import SpectrumTabs from '@/components/SpectrumTabs';

export const metadata = {
  title: 'Spectrum Internet & Cable Deals | JKcompareinternet',
  description:
    'Compare Spectrum internet, cable TV, phone, and mobile options. Reliable high-speed plans with no data caps in many areas.',
};

export default function SpectrumPage() {
  const highlights = [
    'Wide Nationwide Coverage – Available in many states for residential internet and TV',
    'Reliable High-Speed Internet – Fiber-powered infrastructure for streaming, remote work, and smart homes',
    'Provider Information Access – We help you find contact details and information about Spectrum\'s official support channels',
    'No Data Caps or Long-Term Contracts – Many plans offer flexibility with no annual contracts',
  ];

  const plans = [
    {
      speed: 'Up To 100 Mbps',
      price: '30',
      features: [
        'Suitable for everyday browsing and streaming',
        'Supports common household devices',
        'No data caps on many Spectrum internet plans',
        'No long-term contracts on many offers',
      ],
    },
    {
      speed: 'Up To 500 Mbps',
      price: '50',
      features: [
        'Great for multi-device households',
        'Stream, game, and work from home',
        'Speeds may be available in select locations',
        'Flexible plans without long-term contracts',
      ],
    },
    {
      speed: 'Up To 1 Gig',
      price: '70',
      features: [
        'High-speed option for heavy usage',
        'Ideal for 4K streaming and large downloads',
        'Supports smart homes and remote work',
        'Availability varies by service area',
      ],
    },
  ];

  const services = [
    {
      title: 'High-Speed Internet',
      icon: '/images/spectrum/high-speed-internet.png',
      description:
        'Reliable internet with speeds starting around 100 Mbps, capable of supporting streaming, gaming, smart home devices, and remote work. Higher-speed tiers are available in select areas for households with heavy usage.',
    },
    {
      title: 'Cable TV',
      icon: '/images/spectrum/cable-tv.png',
      description:
        'A wide selection of channels, on-demand shows, and entertainment packages for every taste. Flexible bundles allow viewers to pick content that matches their lifestyle.',
    },
    {
      title: 'Home Phone',
      icon: '/images/spectrum/home-phone.png',
      description:
        "Nationwide calling, voicemail, and dependable connections make Spectrum's phone service a practical option for families and individuals who prefer a traditional home line.",
    },
    {
      title: 'Mobile Services',
      icon: '/images/spectrum/mobile-services.png',
      description:
        'Spectrum Mobile leverages advanced wireless technology to provide fast and reliable 5G connectivity. Introductory promotions may offer added savings for new customers in select areas.',
    },
  ];

  const faqs = [
    {
      q: 'Is JKcompareinternet part of Spectrum or Charter?',
      a: "No. JKcompareinternet operates independently of Spectrum, Charter, and every other provider listed on this site. We're a comparison resource, not a branch of any carrier.",
    },
    {
      q: 'Where do I go for questions about my existing Spectrum service?',
      a: "That has to go through Spectrum directly, since we don't have access to customer accounts. What we can do is point you to the right Spectrum contact number and, if you're open to it, show you what else is available in your area.",
    },
    {
      q: "What's the point of using JKcompareinternet instead of going straight to a provider?",
      a: "Providers naturally lead with their own plans. We lay out pricing, speed tiers, and terms from several providers side by side so you're not relying on a single sales pitch to decide.",
    },
    {
      q: "Can you tell me what's actually available at my address?",
      a: "Yes — give us a call or fill out the short form on this page with your address, and we'll walk you through the plans that serve your specific location.",
    },
    {
      q: "Do your prices reflect what I'll actually be charged?",
      a: 'The pricing shown here is a starting-point estimate pulled from publicly available rates. Final pricing depends on your address, current promotions, and any equipment fees, so we always confirm exact numbers with you on the call.',
    },
    {
      q: 'Is there a cost to talk to someone or get a comparison?',
      a: "No — calling or submitting the form doesn't cost anything, and there's no obligation to switch providers afterward.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c10]">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[400px] flex items-center justify-center border-b border-white/10 overflow-hidden">
        <Image
          src="/images/spectrum.png"
          alt="Spectrum Internet and Cable Services"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <p className="text-lg md:text-xl font-semibold text-cyan-300 mb-3 drop-shadow-md">
            Compare Spectrum Internet &amp; Cable Services
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Compare <span className="text-blue-400">Spectrum</span> internet and cable services With JKcompareinternet
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
            Call to compare providers and find the right Spectrum plan for your area.
          </p>
        </div>
      </section>

      {/* Button + disclaimer */}
      <section className="border-b border-white/5 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center text-center gap-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-center w-full">
            <Link
              href="/compare-internet-options"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Speak With A Comparison Specialist
            </Link>
            <a
              href="tel:8888799161"
              className="cta-button inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-white border border-white/25 bg-white/5 hover:bg-white/10 transition"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (888) 879-9161
            </a>
          </div>
          <p className="cta-disclaimer text-sm text-gray-400 max-w-2xl leading-relaxed">
            JKcompareinternet operates as an independent comparison resource — we don&apos;t manage
            or sell Spectrum accounts. Everything on this page is for general guidance only.
          </p>
        </div>
      </section>

      <SpectrumTabs />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Our Take on Spectrum Services</h2>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Spectrum is one of the most widely available providers in the United States, delivering
            reliable TV cable deals, phone services, and fiber-powered internet plans across many
            states. Internet plans generally start around $30/mo in many areas, depending on
            availability.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {highlights.map((item) => (
              <div
                key={item}
                className="bg-[#1f2833] p-4 rounded-xl border border-white/5 flex items-start"
              >
                <span className="text-blue-500 mr-3 text-xl">✅</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            SPECTRUM INTERNET PLANS – SPEED OPTIONS FOR EVERY TYPE OF HOME
          </h2>
          <p className="text-gray-400 max-w-4xl mx-auto text-sm">
            &quot;We are not Spectrum or any other service provider. These plans are shown for
            comparison purposes. Prices, features, and hardware are subject to Spectrum&apos;s terms
            and availability.&quot;
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.speed}
              className="bg-[#1f2833] rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 flex flex-col relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>

              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Speeds {plan.speed}</h3>

              <ul className="mt-6 space-y-4 flex-grow relative z-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-300 text-sm">
                    <svg
                      className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
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
                <p className="text-xs text-gray-500 mt-2">Taxes, fees &amp; equipment extra</p>

                <a
                  href="tel:(888) 879-9161"
                  className="mt-6 w-full flex items-center justify-center text-center px-6 py-4 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-1"
                >
                  Compare &amp; Call (888) 879-9161
                </a>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Offers, availability, speeds, and pricing vary by ZIP. We are an independent
                  comparison and referral service and do not provide service directly.
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      <ProviderComparisonTable />

      {/* Spectrum Services at a Glance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Spectrum Services at a Glance
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base text-center mb-10">
          Spectrum offers a variety of services to meet everyday household needs. Here are four key
          areas we highlight.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#1f2833] rounded-2xl p-6 md:p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-lg"
            >
              <Image
                src={service.icon}
                alt=""
                width={90}
                height={90}
                className="mb-4 w-[72px] h-[72px] object-contain"
              />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
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

      <ProviderWhyChoose
        providerName="Spectrum"
        introLead="Call to compare providers and plans."
        servicesLead="Comparing Internet & Cable Options"
        ctaLabel="See Local Provider Options"
      />
    </div>
  );
}
