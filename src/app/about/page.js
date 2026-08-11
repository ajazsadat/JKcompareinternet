import Link from 'next/link';

export const metadata = {
  title: 'About Us | JKcompareinternet',
  description: 'Learn more about JKcompareinternet, your independent comparison service for TV and Internet deals.',
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
            Compare plans and pricing at your address to find the best TV and internet services, easily and transparently.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[#0b0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed">
                  At JKcompareinternet, we understand how overwhelming it can be to choose the right TV and internet provider. With so many options, confusing pricing structures, and hidden fees, we provide clear, side-by-side comparisons of plans, pricing, and features so you can make an informed decision.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
                <p className="text-gray-400 leading-relaxed">
                  We act as an independent comparison service, gathering the latest deals and packages from providers such as Xfinity, Frontier, Windstream, and Spectrum. We present this information in a straightforward format so you can compare plans and pricing available at your address.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Unbiased Comparisons:</strong> We are not a direct provider, which means our comparisons are objective and focused on finding the best options for your address.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Compare Plans & Pricing:</strong> Use our comparison tools to review plans, speeds, and pricing at your address so you can select the plan that meets your needs.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Time & Money Saved:</strong> We surface the latest deals and fees so you can connect quickly and start saving without hours of manual research.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Partnership</h2>
                <p className="text-gray-400 leading-relaxed">
                  JKcompareinternet is an authorized reseller through Sandler Partners, LLC, and connects customers with select providers, including Xfinity, via that reseller relationship. Other providers referenced on this site do not have an official partnership with JKcompareinternet unless explicitly stated.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-blue-500/20 rounded-3xl blur-2xl transform rotate-3"></div>
              <div className="bg-[#1f2833] border border-white/10 rounded-3xl p-10 relative z-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Compare Plans For Your Area</h3>
                <p className="text-gray-300 mb-8">
                  Compare plans and pricing at your address to see available providers, speeds, and current offers in your area.
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
