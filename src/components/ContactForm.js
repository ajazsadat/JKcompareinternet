'use client';

import { useState } from 'react';
import { submitLead } from '@/lib/submitLead';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setError('');

    const formData = new FormData(event.currentTarget);
    const payload = {
      formType: 'contact',
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
    <div className="bg-[#1f2833] rounded-3xl p-8 border border-white/10 shadow-2xl relative">
      <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 rounded-full bg-blue-500/10 blur-xl"></div>

      <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send us a message</h3>
      <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-[#0b0c10] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-[#0b0c10] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full bg-[#0b0c10] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full bg-[#0b0c10] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <div className="flex items-start mt-4 mb-6">
          <div className="flex items-center h-5">
            <input
              id="consent"
              type="checkbox"
              className="w-4 h-4 bg-[#0b0c10] border border-white/10 rounded focus:ring-blue-500 focus:ring-2"
              required
            />
          </div>
          <label htmlFor="consent" className="ml-3 text-xs text-gray-400 font-light leading-relaxed">
            I agree to the{' '}
            <a href="/terms-conditions" className="text-blue-400 hover:underline">
              terms & conditions
            </a>{' '}
            and{' '}
            <a href="/privacy-policy" className="text-blue-400 hover:underline">
              privacy policy
            </a>{' '}
            provided by JKcompareinternet. By providing my phone number, I agree to receive text
            messages and calls from JKcompareinternet. Consent is not a condition of purchase.
          </label>
        </div>

        {status === 'success' && (
          <p className="text-sm text-green-400 bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-2">
            Thanks! Your message was sent successfully.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 px-6 text-lg text-center font-bold rounded-lg text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all transform hover:-translate-y-1"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
