export const metadata = {
  title: 'Cookie Policy | JKcompareinternet',
  description:
    'Cookie Policy for jkcompareinternet.online, operated by Jari & Kinza Corporation.',
};

export default function CookiePolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c10] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-gray-300">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Cookie Policy
        </h1>
        <p className="text-sm text-gray-500 mb-2">Effective Date: August 12, 2026</p>
        <p className="text-sm text-gray-500 mb-10">
          Website: https://jkcompareinternet.online/
        </p>

        <section className="mb-8">
          <p className="mb-4 leading-relaxed font-light">
            jkcompareinternet.online is operated by Jari &amp; Kinza Corporation. Our
            website uses cookies and similar technologies to enhance your browsing
            experience, analyze traffic, and improve our marketing efforts. Cookies
            are small text files stored on your device that help us remember your
            preferences and understand how visitors interact with our site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
          <ul className="list-disc pl-5 space-y-3 font-light text-gray-400">
            <li>
              <strong className="text-gray-300">Essential cookies:</strong> enable
              basic site functionality and security.
            </li>
            <li>
              <strong className="text-gray-300">Analytics cookies:</strong> help us
              measure website performance and visitor behavior (for example,
              Google Analytics).
            </li>
            <li>
              <strong className="text-gray-300">Marketing cookies:</strong> support
              our advertising campaigns and may be used for retargeting through
              Google Ads or other platforms.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
          <p className="mb-4 leading-relaxed font-light">
            You can accept, reject, or customize cookie preferences at any time
            using your browser settings. Most browsers allow you to block or delete
            cookies; however, some site features may not function properly without
            them.
          </p>
          <p className="mb-4 leading-relaxed font-light">
            By using our website, you consent to our use of cookies as described in
            this policy. For more details on how we handle personal data, please
            refer to our{' '}
            <a
              href="/privacy-policy"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              Privacy Policy
            </a>
            .
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
