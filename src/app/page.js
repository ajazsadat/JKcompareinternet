'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeGetStarted from '@/components/HomeGetStarted';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      q: "Are you the internet service provider?",
      a: "No. JK Compare Internet operates as an independent comparison platform that helps users explore and evaluate Internet and TV plans from multiple trusted providers. We do not directly sell internet or TV services."
    },
    {
      q: "Do you charge for your services?",
      a: "Our services are free to you. We may receive compensation from providers or referral partners when you sign up through our referral system — but there is no additional cost to you."
    },
    {
      q: "How do I compare internet plans easily?",
      a: "Through our comparison tool, you can review prices, speeds, connection types, contract terms, and promotions from multiple providers easily. We make it simple to find affordable and fast internet options."
    },
    {
      q: "What types of internet service are available?",
      a: "You may have access to one or more of these internet types: Fiber Internet (High speeds, ideal for streaming and gaming), Cable Internet (Reliable and widely available), DSL Internet (Affordable option for light users), and Fixed Wireless (Available in select areas)."
    },
    {
      q: "Do internet providers offer special promotions or discounts?",
      a: "Yes! Many providers offer introductory pricing, free installation, equipment deals, gift cards, and bundle discounts. We help you review current offers available in your area so you can save money."
    },
    {
      q: "How do I get started?",
      a: "Simply call to view available internet providers, compare plans, and lock in available discounts in your area. We'll guide you through the comparison over the phone."
    },
    {
      q: "How is installation arranged once I select a plan?",
      a: "Once you confirm your selection, your chosen provider will handle scheduling and installation directly. Timelines vary by provider, location, and technician availability."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c10]">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.png"
            alt="High Speed Internet background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10]/90 via-[#0b0c10]/50 to-[#0b0c10]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
            <span className="flex w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2"></span>
            Independent Plan Comparison
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
            Compare Multiple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Internet Plans</span> In One Place.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            JKcompareinternet is a comparison and referral website. We do not provide internet service directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(888) 879-9161"
              className="inline-flex items-center justify-center text-center px-8 py-4 text-lg font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Compare & Call: (888) 879-9161
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Grid Section */}
      <section className="py-24 bg-[#0b0c10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Entertainment & Connectivity Solutions<br/><span className="text-blue-400">Compared Through JKcompareinternet</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">Explore your options and find the perfect plan for your home or business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-[#1f2833] rounded-3xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col h-full group relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">TV & Streaming</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6 flex-grow">
                Explore TV and streaming plans in one place. Compare packages from participating providers, including options for movies, shows, sports, and live channels. JKcompareinternet guides you to the best options.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-[#1f2833] rounded-3xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col h-full group relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">High-Speed Internet</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6 flex-grow">
                Compare fiber internet plans from participating providers. JKcompareinternet shows you available options for browsing, streaming, gaming, and remote work. We guide you through plans and pricing.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-[#1f2833] rounded-3xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col h-full group relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">All-in-One Mobile</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6 flex-grow">
                Compare mobile plans from participating providers. Review options with data, calling, and coverage features, including 5G availability and flexible plans. JKcompareinternet helps you find the right fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-[#0b0c10] to-[#111827] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Compare The Tv & Internet Providers <span className="text-blue-400">That Suit Your Needs</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 font-light leading-relaxed">
                Looking for TV and internet options in your area? Compare plans from participating providers and explore available offers based on your location. JKcompareinternet can help guide you every step of the way.
              </p>
              
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose JKcompareinternet?</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">One-Stop Solution</h4>
                    <p className="mt-1 text-gray-400 font-light">Compare Internet providers, explore available offers, and connect with a provider—all in one place.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">High-Speed Internet Options</h4>
                    <p className="mt-1 text-gray-400 font-light">Explore high-speed internet options from providers, with plans and promotions that may vary by location and availability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Personalized Comparison Guidance</h4>
                    <p className="mt-1 text-gray-400 font-light">Not sure which option fits your needs? We'll walk you through available plans and connect you with the right provider to get started.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-[#1f2833] rounded-3xl p-10 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                
                <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Looking for High-Speed Internet Plan?</h3>
                <p className="text-gray-300 mb-8 font-light leading-relaxed relative z-10">
                  We're Here to Guide You Through Comparing Options From Participating Providers. Compare your options with confidence.
                </p>
                
                <div className="relative z-10">
                  <p className="text-sm text-blue-400 font-semibold uppercase tracking-wider mb-2">Call to compare your options now</p>
                  <a
                    href="tel:(888) 879-9161"
                    className="flex items-center justify-center text-center w-full px-8 py-5 text-xl font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    Compare & Call (888) 879-9161
                  </a>
                  <p className="text-xs text-gray-500 mt-4 text-center">Internet comparison &amp; provider connection service.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0b0c10] border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 font-light">Find answers to common questions about our comparison and enrollment services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#1f2833] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-lg text-white pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 text-blue-400">
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-400 font-light leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeGetStarted />

      <section
        id="disclaimer"
        className="scroll-mt-32 border-t border-white/10 bg-[#111827] py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Disclaimer:</h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-4xl">
            JKcompareinternet operates as an independent comparison and referral website. We do not
            directly sell, install, or manage any Internet or TV services. All company names, logos,
            and trademarks displayed on this website are the property of their respective owners and
            are used strictly for identification and comparison purposes. JKcompareinternet is an authorized reseller through Sandler Partners, LLC, connecting customers with select providers, including Xfinity.
          </p>
        </div>
      </section>
    </div>
  );
}
