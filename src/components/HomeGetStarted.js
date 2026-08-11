'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { submitLead } from '@/lib/submitLead';

const PACKAGE_OPTIONS = ['Fiber', 'Cable', 'Wireless', 'Landline', '5G', 'TV'];

const inputClass =
  'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5A23B9] focus:border-transparent';
const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';
const selectClass =
  'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#5A23B9] focus:border-transparent';

export default function HomeGetStarted() {
  const [provider, setProvider] = useState('');
  const [packages, setPackages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const showProviderOther = provider === 'Other';
  const selected = useMemo(() => new Set(packages), [packages]);

  const togglePackage = (value) => {
    setPackages((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setError('');

    const formData = new FormData(event.currentTarget);
    const payload = {
      formType: 'homepage',
      name: formData.get('name'),
      address: formData.get('address'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      provider: formData.get('provider'),
      providerOther: formData.get('providerOther'),
      usage: formData.get('usage'),
      packages,
      fiber: formData.get('fiber'),
      wireless: formData.get('wireless'),
      landline: formData.get('landline'),
      tv: formData.get('tv'),
    };

    try {
      await submitLead(payload);
      setStatus('success');
      event.currentTarget.reset();
      setProvider('');
      setPackages([]);
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Unable to send right now.');
    }
  }

  return (
    <section className="w-full border-t border-white/10 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left copy + contact */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Get Started</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Call{' '}
              <a href="tel:(888) 879-9161" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                (888) 879-9161
              </a>{' '}
              or request a free, no-obligation quote to see available options in your area.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              We'll walk you through plans, pricing, and promotions — so you can upgrade
              with confidence.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <svg className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48C0 290.89 221.11 512 464 512a24 24 0 0 0 23.39-16.6l24-104a24.29 24.29 0 0 0-1.3-22.39z"></path>
                </svg>
                <a href="tel:(888) 879-9161" className="hover:text-cyan-300 transition-colors">
                  (888) 879-9161
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <svg className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.8 35.5 0 71.1-32.4 92.2-47.8C448.1 230.3 477.8 208.2 502.3 190.8zM256 320c23.2 0 56.6-29.375 73.1-41.064c16.3-11.19 40.8-34.88 59.7-52.368V400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V226.568c18.9 17.488 43.4 41.178 59.7 52.368C199.4 290.625 232.8 320 256 320z"></path>
                </svg>
                <a
                  href="mailto:info@jkcompareinternet.online"
                  className="hover:text-cyan-300 transition-colors break-all"
                >
                  info@jkcompareinternet.online
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <svg className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 384 512" aria-hidden="true">
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                </svg>
                <span>19823 Younglake Blvd, Houston, TX 77084</span>
              </li>
            </ul>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-[10px] p-7 md:p-8 shadow-xl">
            <h3 className="text-[26px] font-bold capitalize text-black mb-5">Get Started</h3>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="home-name" className={labelClass}>
                    Name
                  </label>
                  <input id="home-name" name="name" type="text" placeholder="Name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="home-address" className={labelClass}>
                    Address
                  </label>
                  <input
                    id="home-address"
                    name="address"
                    type="text"
                    placeholder="Address"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="home-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="home-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="home-phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="home-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="home-provider" className={labelClass}>
                  Current Provider
                </label>
                <select
                  id="home-provider"
                  name="provider"
                  required
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  className={selectClass}
                >
                  <option value="">Select Provider</option>
                  <option value="Spectrum">Spectrum</option>
                  <option value="Xfinity">Xfinity</option>
                  <option value="AT&T">At&amp;t</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {showProviderOther && (
                <div>
                  <label htmlFor="home-provider-other" className={labelClass}>
                    Provider Name
                  </label>
                  <input
                    id="home-provider-other"
                    name="providerOther"
                    type="text"
                    placeholder="Provider Name"
                    className={inputClass}
                  />
                </div>
              )}

              <div>
                <label htmlFor="home-usage" className={labelClass}>
                  Usage
                </label>
                <select id="home-usage" name="usage" required className={selectClass} defaultValue="">
                  <option value="" disabled>
                    Usage Devices
                  </option>
                  <option value="1 to 4">1 to 4</option>
                  <option value="5 to 8">5 to 8</option>
                  <option value="8 to 12">8 to 12</option>
                  <option value="12+">12+</option>
                </select>
              </div>

              <div>
                <p className={labelClass}>Packages</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {PACKAGE_OPTIONS.map((option) => (
                    <label
                      key={option}
                      className="inline-flex items-center gap-2 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-md px-3 py-2"
                    >
                      <input
                        type="checkbox"
                        name="packages"
                        value={option}
                        checked={selected.has(option)}
                        onChange={() => togglePackage(option)}
                        className="h-4 w-4 rounded border-gray-300 text-[#5A23B9] focus:ring-[#5A23B9]"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {selected.has('Fiber') && (
                <div>
                  <label htmlFor="home-fiber" className={labelClass}>
                    Fiber
                  </label>
                  <select id="home-fiber" name="fiber" className={selectClass} defaultValue="">
                    <option value="" disabled>
                      Fiber Options
                    </option>
                    <option value="GIG">GIG</option>
                    <option value="500">500</option>
                    <option value="300">300</option>
                    <option value="100">100</option>
                  </select>
                </div>
              )}

              {selected.has('Wireless') && (
                <div>
                  <label htmlFor="home-wireless" className={labelClass}>
                    Wireless
                  </label>
                  <select id="home-wireless" name="wireless" className={selectClass} defaultValue="">
                    <option value="" disabled>
                      Wireless Options
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6+">6+</option>
                  </select>
                </div>
              )}

              {selected.has('Landline') && (
                <div>
                  <p className={labelClass}>Landline</p>
                  <div className="flex gap-4 text-sm text-gray-700">
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="radio"
                        name="landline"
                        value="Yes"
                        className="h-4 w-4 border-gray-300 text-[#5A23B9] focus:ring-[#5A23B9]"
                      />
                      Yes
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="radio"
                        name="landline"
                        value="No"
                        className="h-4 w-4 border-gray-300 text-[#5A23B9] focus:ring-[#5A23B9]"
                      />
                      No
                    </label>
                  </div>
                </div>
              )}

              {selected.has('TV') && (
                <div>
                  <label htmlFor="home-tv" className={labelClass}>
                    TV Options
                  </label>
                  <select id="home-tv" name="tv" className={selectClass} defaultValue="">
                    <option value="" disabled>
                      TV Options
                    </option>
                    <option value="Basic">Basic</option>
                    <option value="Premium">Premium</option>
                    <option value="Advance">Advance</option>
                  </select>
                </div>
              )}

              <div className="flex items-start gap-2 pt-1 pb-2">
                <input
                  id="home-consent"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#5A23B9] focus:ring-[#5A23B9]"
                />
                <label htmlFor="home-consent" className="text-xs text-gray-600 leading-relaxed">
                  I agree to the{' '}
                  <Link href="/terms-conditions" className="text-[#5A23B9] underline">
                    terms &amp; conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy-policy" className="text-[#5A23B9] underline">
                    privacy policy
                  </Link>{' '}
                  provided by JKcompareinternet. By providing my phone number, I agree to receive
                  text messages and calls from JKcompareinternet. Consent is not a condition of
                  purchase.
                </label>
              </div>

              {status === 'success' && (
                <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
                  Thanks! Your request was sent successfully.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rounded-md bg-[#5A23B9] hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[17px] py-3.5 px-5 transition-colors"
              >
                {status === 'loading' ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
