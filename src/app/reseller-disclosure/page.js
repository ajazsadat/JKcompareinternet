export const metadata = {
  title: 'Reseller Disclosure | JKcompareinternet',
  description:
    'Reseller disclosure for jkcompareinternet.online, operated by Jari & Kinza Corporation.',
};

export default function ResellerDisclosure() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c10] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-gray-300">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Reseller Disclosure
        </h1>
        <p className="text-sm text-gray-500 mb-2">Effective Date: August 12, 2026</p>
        <p className="text-sm text-gray-500 mb-10">
          Website: https://jkcompareinternet.online/
        </p>

        <section className="mb-8 space-y-4">
          <p className="leading-relaxed font-light">
            jkcompareinternet.online is operated by Jari &amp; Kinza Corporation, an independent
            authorized sales partner and reseller that helps customers compare, select, and activate
            broadband, wireless, and digital services across the United States.
          </p>
          <p className="leading-relaxed font-light">
            We are not owned, operated, or controlled by any internet service provider (ISP) or
            carrier. All broadband and wireless services are delivered, billed, and supported
            directly by the respective licensed providers.
          </p>
          <p className="leading-relaxed font-light">
            jkcompareinternet.online, operated by Jari &amp; Kinza Corporation, may receive a
            commission or referral incentive from these providers when a customer activates or
            purchases a qualifying service through our platform or sales team. These commissions do
            not affect pricing — the customer pays the same rates offered directly by the provider.
          </p>
          <p className="leading-relaxed font-light">
            All service information, including pricing, availability, and terms, is based on data
            provided by each carrier. We do not guarantee availability or pricing accuracy in all
            areas, and customers are encouraged to confirm final details with their chosen provider
            prior to activation.
          </p>
        </section>

        <section className="mb-8 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
          <ul className="space-y-2 font-light text-gray-400">
            <li>(888) 879-9161</li>
            <li>info@jkcompareinternet.online</li>
            <li>19823 Younglake Blvd, Houston, TX 77084</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
