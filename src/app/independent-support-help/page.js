import Link from 'next/link';

export const metadata = {
  title: 'Independent Support Help & Plan Comparison | JKcompareinternet',
  description:
    'Independent support-routing and plan comparison help. Not affiliated with any carrier. Get pointed to the right resource or compare new plan options.',
};

export default function IndependentSupportHelpPage() {
  const helpItems = [
    'Connecting you to the right support resource for billing, outages, or account questions',
    'Comparing current plans vs. new offers if you’re thinking about switching',
    'Answering general questions about service options in your area',
  ];

  return (
    <div className="bg-[#0b0c10] min-h-screen">
      <section className="border-b border-white/5 bg-[#111827]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Independent Support Help
          </h1>
          <p className="text-sm md:text-base text-cyan-300/90 leading-relaxed max-w-3xl">
            Not affiliated with, endorsed by, or connected to Xfinity, Comcast, or Comcast Cable
            Communications, LLC — or any other internet provider.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Need help with your home internet or cable service?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
            We&apos;re an independent support-routing and comparison service — real people, fast
            answers, no bots. We can help you get connected with the right resource, whether
            that&apos;s your provider&apos;s official support line or comparing new plan options.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:8888799161"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition shadow-[0_0_24px_rgba(6,182,212,0.3)]"
            >
              Call (888) 879-9161
            </a>
            <Link
              href="/live-agent"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold border border-white/15 text-gray-200 hover:bg-white/5 transition"
            >
              Chat With a Live Agent
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we help with</h2>
          <ul className="space-y-4">
            {helpItems.map((item) => (
              <li key={item} className="flex gap-3 text-gray-400 leading-relaxed">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-[#111827] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-cyan-400/25 bg-[#1f2833] p-7 md:p-9">
            <h2 className="text-xl font-bold text-white mb-3">Important disclosure</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              JKcompareinternet is an independent service. We are not Xfinity, Comcast, or any
              carrier affiliate, and we do not have access to provider accounts. For
              account-specific support, billing, or outage reporting, please contact your provider
              directly through their official channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:8888799161"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition"
              >
                Call (888) 879-9161
              </a>
              <Link
                href="/providers/xfinity"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold border border-white/15 text-gray-300 hover:bg-white/5 transition"
              >
                Compare Xfinity plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 leading-relaxed">
          <p>
            Provider names and related marks are trademarks of their respective owners and are used
            here for identification and comparison only.
          </p>
        </div>
      </section>
    </div>
  );
}
