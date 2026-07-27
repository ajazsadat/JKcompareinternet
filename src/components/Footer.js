'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname() || '';
  const hideOnMobile =
    pathname === '/live-agent' || pathname === '/independent-support-help';

  return (
    <footer
      className={`bg-[#0b0c10] border-t border-white/10 pt-12 pb-8 ${
        hideOnMobile ? 'hidden md:block' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
              JKcompareinternet
            </span>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Your trusted independent comparison service for TV and Internet deals. Find the best plans from top providers in your area.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">About Us</Link>
              </li>

              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/live-agent" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Live Agent</Link>
              </li>
              <li>
                <Link href="/independent-support-help" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Independent Support Help</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="ml-3 text-sm text-gray-400">
                  19823 Younglake Blvd<br />
                  Houston, TX 77084
                </span>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="ml-3 text-sm text-gray-400">
                  <a href="tel:8888799161" className="hover:text-cyan-400 transition-colors">(888) 879-9161</a>
                </span>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="ml-3 text-sm text-gray-400">
                  <a href="mailto:info@jkcompareinternet.online" className="hover:text-blue-400 transition-colors">info@jkcompareinternet.online</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} JKcompareinternet. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-4 md:mt-0 max-w-2xl text-right md:text-left">
            JKcompareinternet is an independent comparison platform — not Verizon, Frontier, Windstream, Brightspeed, or any other carrier. We do not provide customer service for these carriers. For existing customer support, please contact your provider directly.
          </p>
        </div>
      </div>
    </footer>
  );
}
