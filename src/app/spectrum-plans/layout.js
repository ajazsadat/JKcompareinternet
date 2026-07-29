import { Poppins, Montserrat } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-support-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-support-montserrat',
});

export default function SpectrumPlansLayout({ children }) {
  return (
    <div className={`${poppins.variable} ${montserrat.variable}`}>
      {children}
    </div>
  );
}
