import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | JKcompareinternet',
  description: 'Get in touch with JKcompareinternet to find the best TV and Internet deals in your area.',
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-[80vh]">
      {/* Header Banner */}
      <section className="relative py-24 bg-gradient-to-b from-[#111827] to-[#0b0c10] border-b border-white/5">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact <span className="text-gradient">Us</span></h1>
          <p className="text-xl text-gray-300">
            Have a question or need help finding the right plan? We're here for you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#0b0c10] flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-gray-400 mb-8">
                  Whether you're looking for a new internet provider, a better TV package, or just want to see what's available in your area, our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-[#1f2833] p-6 rounded-2xl border border-white/5 flex items-start group hover:border-blue-500/30 transition-colors">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Our Location</h3>
                    <p className="text-gray-400">
                      19823 Younglake Blvd<br />
                      Houston, TX 77084
                    </p>
                  </div>
                </div>

                <div className="bg-[#1f2833] p-6 rounded-2xl border border-white/5 flex items-start group hover:border-blue-500/30 transition-colors">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone Number</h3>
                    <p className="text-gray-400 mb-2">Available Mon-Fri, 9am - 6pm EST</p>
                    <a href="tel:8888799161" className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                      (888) 879-9161
                    </a>
                  </div>
                </div>

                <div className="bg-[#1f2833] p-6 rounded-2xl border border-white/5 flex items-start group hover:border-blue-500/30 transition-colors">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email Address</h3>
                    <p className="text-gray-400 mb-2">Send us an email anytime</p>
                    <a href="mailto:info@jkcompareinternet.online" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                      info@jkcompareinternet.online
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />

          </div>
        </div>
      </section>
    </div>
  );
}
