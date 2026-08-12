const COLUMNS = ['Feature', 'AT&T (Fiber)', 'Xfinity (Comcast)', 'Spectrum (Charter)'];

const ROWS = [
  {
    feature: 'Speed (Max)',
    values: [
      'Up to 5 Gbps (symmetrical)',
      'Up to 2 Gbps download (select areas)',
      'Up to 1 Gbps (select areas)',
    ],
  },
  {
    feature: 'Upload Speeds',
    values: [
      'Symmetrical (same as download) on many fiber plans',
      'Typically lower upload vs download on cable',
      'Typically lower upload on cable',
    ],
  },
  {
    feature: 'Starting Price',
    values: [
      'From about $35/mo (where available)',
      'From about $30/mo (where available)',
      'From about $30/mo (where available)',
    ],
  },
  {
    feature: 'Price Guarantee',
    values: [
      'Often fewer price hikes on fiber; no annual contract on many fiber plans',
      'Some plans offer multi-year price locks',
      'Fewer long-term price-lock guarantees',
    ],
  },
  {
    feature: 'Customer Service',
    values: [
      'Generally strong ratings in fiber markets',
      'Mixed to improving satisfaction by market',
      'Mixed reviews by market',
    ],
  },
  {
    feature: 'Fiber Availability',
    values: [
      'Fiber footprint still limited nationally',
      'Limited true fiber; mostly cable network',
      'Limited fiber; mostly cable',
    ],
  },
  {
    feature: 'Coverage',
    values: [
      'Broad mix of fiber, DSL, and fixed wireless in many markets',
      'Strong coverage in many cable markets',
      'Good coverage in many cable markets',
    ],
  },
  {
    feature: 'Reliability',
    values: [
      'Fiber tends to be more consistent where available',
      'Generally strong, can vary with network congestion',
      'Good overall; consistency can vary',
    ],
  },
  {
    feature: 'Security Features',
    values: [
      'Built-in security features on some plans',
      'Basic security; add-ons often available',
      'Basic security features',
    ],
  },
  {
    feature: 'Contracts',
    values: [
      'No contracts on many fiber plans',
      'No annual contracts on many newer offers',
      'No contracts on many plans',
    ],
  },
  {
    feature: 'Data Caps',
    values: [
      'No data caps on many fiber plans',
      'Data caps on many plans unless unlimited add-on',
      'No data caps on many plans',
    ],
  },
  {
    feature: 'Bundles / Discounts',
    values: [
      'Wireless bundle discounts available in some offers',
      'Strong internet + mobile/TV bundling',
      'Fewer bundle advantages than some peers',
    ],
  },
  {
    feature: 'Best For',
    values: [
      'Performance, business use, work-from-home',
      'Coverage + bundling deals',
      'Budget + simple plans',
    ],
  },
];

export default function ProviderComparisonTable() {
  return (
    <section className="w-full border-t border-white/10 bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          Provider Comparison: How the Top Internet Services Stack Up by JKcompareinternet
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed max-w-4xl mx-auto mb-8 text-center">
          Jari &amp; Kinza Corporation operates as an independent comparison platform that helps
          users explore and evaluate Internet and TV plans from multiple trusted providers. We do
          not directly sell, install, or manage any Internet or TV services. This content is for
          informational and guidance purposes only and is not affiliated with or endorsed by any of
          the providers listed. Pricing, speeds, and features vary by address and change over time —
          confirm details with the provider before you enroll.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#111827] shadow-xl">
          <table className="min-w-[720px] w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#1f2833]">
                {COLUMNS.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="px-4 py-3.5 font-semibold text-white border-b border-white/10 whitespace-nowrap"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index % 2 === 0 ? 'bg-[#0b0c10]/40' : 'bg-[#111827]'}
                >
                  <th
                    scope="row"
                    className="px-4 py-3.5 font-semibold text-cyan-300 border-b border-white/5 align-top whitespace-nowrap"
                  >
                    {row.feature}
                  </th>
                  {row.values.map((value) => (
                    <td
                      key={`${row.feature}-${value}`}
                      className="px-4 py-3.5 text-gray-300 border-b border-white/5 align-top"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
