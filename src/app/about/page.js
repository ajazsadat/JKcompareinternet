export const metadata = {
  title: 'About Us | JKcompareinternet',
  description:
    'jkcompareinternet.online is operated by Jari & Kinza Corporation, an independent authorized reseller that helps you compare, choose, and activate TV and internet plans.',
};

export default function About() {
  return (
    <div className="flex flex-col min-h-[80vh]">
      {/* Header Banner */}
      <section className="relative py-24 bg-gradient-to-b from-[#111827] to-[#0b0c10] border-b border-white/5">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About <span className="text-gradient">JKcompareinternet</span></h1>
          <p className="text-xl text-gray-300">
            jkcompareinternet.online is operated by Jari &amp; Kinza Corporation. We help you
            compare plans and get connected through licensed service providers easily and
            transparently.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[#0b0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Who We Are</h2>
                <p className="text-gray-400 leading-relaxed">
                  jkcompareinternet.online is operated by Jari &amp; Kinza Corporation, an
                  independent, authorized reseller that works with multiple leading broadband,
                  cable, and wireless providers. We don&apos;t favor any carrier — our
                  recommendations are based on your location, your needs, and your budget.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  We are not an internet service provider and do not own or operate network
                  infrastructure. All services are fulfilled and billed directly by licensed
                  carriers.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
                <p className="text-gray-400 leading-relaxed">
                  As an independent authorized reseller, we help you explore and compare available
                  internet, TV, and wireless options from providers such as Xfinity, Frontier,
                  Windstream, and Spectrum. We present clear plan details so you can choose and
                  activate the option that fits your address and budget.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Independent &amp; Unbiased:</strong> We compare multiple carriers and only recommend what truly fits your needs.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Compare Plans &amp; Pricing:</strong> Review speeds, pricing, and features at your address so you can select with confidence.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Help Getting Connected:</strong> We help coordinate activation and setup with the licensed provider you choose.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Role</h2>
                <p className="text-gray-400 leading-relaxed">
                  Jari &amp; Kinza Corporation operates as an independent authorized reseller that
                  helps customers compare, select, and activate services with select providers,
                  including Xfinity. Other providers referenced on this site may be shown for
                  comparison purposes and do not necessarily have an official partnership unless
                  explicitly stated.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-blue-500/20 rounded-3xl blur-2xl transform rotate-3"></div>
              <div className="bg-[#1f2833] border border-white/10 rounded-3xl p-10 relative z-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Compare Plans For Your Area</h3>
                <p className="text-gray-300 mb-8">
                  Call to compare plans and pricing at your address and see available providers,
                  speeds, and current offers in your area.
                </p>
                <div className="bg-[#0b0c10] rounded-xl p-6 border border-white/5 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 011-1h3l3 9h7" /></svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Call</h4>
                  <a href="tel:(888) 879-9161" className="text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                    (888) 879-9161
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
