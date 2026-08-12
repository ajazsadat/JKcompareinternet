/**
 * Prominent independent-resource disclaimer for provider plan pages.
 * Mirrors the reference site pattern (why-choose line + account disclaimer).
 */
export default function ProviderDisclaimerBanner({ providerName }) {
  return (
    <section className="border-b border-amber-500/30 bg-gradient-to-r from-amber-700 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center">
        <p className="text-sm sm:text-base text-white font-medium leading-snug">
          Why Choose JKcompareinternet? We help you compare top internet and TV
          plans from leading and trusted providers available in your area.
        </p>
        <p className="mt-1 text-xs sm:text-sm text-white/95 leading-snug">
          JKcompareinternet is an independent resource. We do not sell or manage{' '}
          {providerName} accounts; all information is for guidance only.
        </p>
      </div>
    </section>
  );
}
