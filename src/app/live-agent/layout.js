import { Playfair_Display, Lato, Montserrat } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-live-playfair',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-live-lato',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-live-montserrat',
});

export default function LiveAgentLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${lato.variable} ${montserrat.variable}`}>
      {children}
    </div>
  );
}
