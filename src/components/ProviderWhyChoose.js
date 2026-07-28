'use client';

import { useState } from 'react';
import Link from 'next/link';
import { submitLead } from '@/lib/submitLead';

export default function ProviderWhyChoose({ providerName }) {
  const availabilityLabel = `Check ${providerName} Availability In Your Area`;
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setError('');

    const formData = new FormData(event.currentTarget);
    const payload = {
      formType: 'provider',
      providerName,
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      await submitLead(payload);
      setStatus('success');
      event.currentTarget.reset();
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Unable to send right now.');
    }
  }

  return (
    <section className="w-full border-t border-white/10 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white capitalize mb-4">
              Why Choose JKcompareinternet?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Getting {providerName} services is easier with JKcompareinternet. We help you compare
              plans, understand features and pricing, and select the option that works best for
              your home or business. Our team guides you every step of the way; clear, reliable,
              and hassle-free.
            </p>

            <a
              href="tel:8888799161"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-md font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition mb-8"
            >
              {availabilityLabel}
            </a>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-gray-300">
                <svg className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                </svg>
                <a href="tel:8888799161" className="hover:text-cyan-300 transition-colors">
                  888-879-9161
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <svg className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
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
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg>
                <span>19823 Younglake Blvd, Houston, TX 77084</span>
              </li>
            </ul>

            <p className="text-sm text-gray-500 leading-relaxed">
              Pricing, availability, and included services vary by location and plan. Promotions may
              require AutoPay. Equipment and streaming services subject to terms and change.
            </p>
          </div>

          <div className="bg-white rounded-[10px] p-7 md:p-8 shadow-xl">
            <h4 className="text-[26px] font-bold capitalize text-black mb-5">Get Started</h4>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor={`${providerName}-name`} className="sr-only">
                    Name
                  </label>
                  <input
                    id={`${providerName}-name`}
                    type="text"
                    name="name"
                    required
                    placeholder="Please Enter Your Name"
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5A23B9] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor={`${providerName}-email`} className="sr-only">
                    Email
                  </label>
                  <input
                    id={`${providerName}-email`}
                    type="email"
                    name="email"
                    required
                    placeholder="Please Enter Your Email"
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5A23B9] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor={`${providerName}-phone`} className="sr-only">
                  Phone
                </label>
                <input
                  id={`${providerName}-phone`}
                  type="tel"
                  name="phone"
                  required
                  placeholder="Please Enter Your Number"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5A23B9] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor={`${providerName}-message`} className="sr-only">
                  Message
                </label>
                <textarea
                  id={`${providerName}-message`}
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5A23B9] focus:border-transparent resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-1 pb-2">
                <input
                  id={`${providerName}-consent`}
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#5A23B9] focus:ring-[#5A23B9]"
                />
                <label
                  htmlFor={`${providerName}-consent`}
                  className="text-xs text-gray-600 leading-relaxed"
                >
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
