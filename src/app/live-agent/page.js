import Link from 'next/link';
import TawkChatButton from '@/components/TawkChatButton';

export const metadata = {
  title: 'Live Agent Help | JKcompareinternet',
  description:
    'Connect with JKcompareinternet by phone or live chat for independent internet plan comparison and assistance. Not affiliated with any carrier.',
};

export default function LiveAgentPage() {
  return (
    <div className="bg-[#0b0c10] min-h-screen">
      <section className="border-b border-white/5 bg-[#111827]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <p className="text-cyan-400 text-sm font-medium mb-2">JKcompareinternet</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            How would you like to connect for internet services and assistance?
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
            Independent comparison and support-routing service — not a carrier. We help you compare
            plans or get pointed to the right resource.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-[#1f2833] rounded-2xl border border-white/10 p-7 md:p-9 flex flex-col">
            <p className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-3">
              Phone call
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Speak with a live agent
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
              Call our team for plan comparison help, availability questions, or guidance on next
              steps.
            </p>
            <a
              href="tel:8888799161"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition shadow-[0_0_20px_rgba(6,182,212,0.25)]"
            >
              Call Now (888) 879-9161
            </a>
          </div>

          <div className="bg-[#1f2833] rounded-2xl border border-white/10 p-7 md:p-9 flex flex-col">
            <p className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-3">Chat</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Chat with a live agent
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
              Start a live chat for quick questions. We&apos;re an independent service — not
              affiliated with any carrier.
            </p>
            <TawkChatButton className="inline-flex items-center justify-center px-7 py-4 rounded-full font-bold border border-cyan-400/40 text-cyan-200 hover:bg-cyan-400/10 transition">
              Chat Now
            </TawkChatButton>
          </div>
        </div>
      </section>

      <section className="pb-16 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl border border-cyan-400/20 bg-[#111827] p-6 md:p-8 text-sm text-gray-400 leading-relaxed">
          <p className="font-semibold text-white mb-2">Important</p>
          <p>
            JKcompareinternet is an independent comparison and referral service. We do not own or
            operate any internet network and do not provide carrier account support. For billing,
            outages, or technical issues with an existing service, contact your provider through
            their official channels.
          </p>
          <p className="mt-4">
            Looking for Xfinity/Comcast support routing?{' '}
            <Link href="/independent-support-help" className="text-cyan-400 hover:text-cyan-300 underline">
              Visit Independent Support Help
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
