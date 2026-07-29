import Image from 'next/image';
import Link from 'next/link';
import ProviderComparisonTable from '@/components/ProviderComparisonTable';
import ProviderWhyChoose from '@/components/ProviderWhyChoose';
import ProviderMobileSupportModal from '@/components/ProviderMobileSupportModal';

export const metadata = {
  title: 'Spectrum Internet & Cable Deals | JKcompareinternet',
  description:
    'Compare Spectrum internet, cable TV, phone, and mobile options. Reliable high-speed plans with no data caps in many areas.',
};

export default function SpectrumPage() {
  const highlights = [
    'Wide Nationwide Coverage – Available in many states for residential internet and TV',
    'Reliable High-Speed Internet – Fiber-powered infrastructure for streaming, remote work, and smart homes',
    'Accessible Customer Assistance – Multiple channels for Spectrum customer service and technical help',
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
      description:
        'Reliable internet with speeds starting around 100 Mbps, capable of supporting streaming, gaming, smart home devices, and remote work. Higher-speed tiers are available in select areas.',
    },
    {
      title: 'Cable TV',
      description:
        'A wide selection of channels, on-demand shows, and entertainment packages. Flexible bundles help you pick content that matches your lifestyle.',
    },
    {
      title: 'Home Phone',
      description:
        'Nationwide calling, voicemail, and dependable connections make Spectrum phone service a practical option for families who prefer a traditional home line.',
    },
    {
      title: 'Mobile Services',
      description:
        'Spectrum Mobile uses advanced wireless technology for fast, reliable 5G connectivity. Introductory promotions may offer added savings for new customers in select areas.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c10]">
      <ProviderMobileSupportModal />

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
            Spectrum Internet &amp; Cable Services
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Compare <span className="text-blue-400">Spectrum</span> Plans With JKcompareinternet
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
            Call to get assistance comparing providers and finding the right Spectrum plan for your area.
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

        {/* Services at a Glance */}
        <div className="mt-4">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Spectrum Services at a Glance</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm text-center mb-10">
            Spectrum offers a variety of services to meet everyday household needs. Here are four key
            areas we highlight.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#0b0c10] rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProviderComparisonTable />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="rounded-2xl border border-cyan-400/25 bg-[#111827] p-7 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              Need Spectrum support help?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              Get independent support routing — or compare new plan options. Not affiliated with
              Spectrum or Charter.
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

      <ProviderWhyChoose providerName="Spectrum" />
    </div>
  );
}
