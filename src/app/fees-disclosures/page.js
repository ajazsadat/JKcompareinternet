export const metadata = {
  title: 'Fees & Disclosures | JKcompareinternet',
  description:
    'Fees and disclosures for jkcompareinternet.online, operated by Jari & Kinza Corporation.',
};

export default function FeesDisclosures() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c10] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-gray-300">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Fees &amp; Disclosures
        </h1>
        <p className="text-sm text-gray-500 mb-2">Effective Date: August 12, 2026</p>
        <p className="text-sm text-gray-500 mb-10">
          Website: https://jkcompareinternet.online/
        </p>

        <section className="mb-8 space-y-4">
          <p className="leading-relaxed font-light">
            jkcompareinternet.online is operated by Jari &amp; Kinza Corporation and
            does not charge customers any additional fees for consulting,
            comparison, or connection assistance. Any applicable installation,
            activation, or equipment fees are determined and charged directly by the
            service provider, not by Jari &amp; Kinza Corporation.
          </p>
          <p className="leading-relaxed font-light">
            We may receive a one-time or recurring commission from our partner
            providers for successful activations or continued customer
            relationships. These payments are part of standard industry partnerships
            and do not influence our recommendations — our goal is to match
            customers with the most suitable service for their needs and location.
          </p>
          <p className="leading-relaxed font-light">
            All offers, pricing, and promotions are subject to provider terms and
            availability. Taxes, surcharges, early termination fees, and equipment
            charges may apply and are the responsibility of the customer under their
            agreement with the provider.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Offer &amp; Pricing Details
          </h2>
          <p className="leading-relaxed font-light">
            Promotional pricing may apply for a limited time and is subject to
            change. After the promotional period, standard rates may apply.
            Discounts may begin within the first few billing cycles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Eligibility</h2>
          <p className="leading-relaxed font-light">
            Offers may be available to new residential customers only and may not be
            available in all areas. Certain multi-dwelling units may not qualify.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            AutoPay &amp; Paperless Billing
          </h2>
          <p className="leading-relaxed font-light">
            Monthly discounts may apply when enrolled in AutoPay and paperless
            billing. Discount amounts may vary depending on payment method.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Fees &amp; Taxes</h2>
          <p className="leading-relaxed font-light">
            Installation fees, equipment charges, and applicable taxes may apply.
            Pricing excludes taxes and surcharges unless otherwise stated.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Speeds &amp; Performance
          </h2>
          <p className="leading-relaxed font-light">
            Internet speeds are based on wired connections. Actual speeds may vary
            depending on network conditions, equipment, and other factors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">General Terms</h2>
          <p className="leading-relaxed font-light">
            Offers are subject to change or discontinuation without notice.
            Additional terms and conditions may apply.
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
