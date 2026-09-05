import LiveAgentConnect from '@/components/LiveAgentConnect';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Live Agent | JKcompareinternet',
  description:
    'Speak with a live agent or send us a message to compare internet and TV plans available at your address.',
};

export default function LiveAgentPage() {
  return <LiveAgentConnect disclosure={SITE.connectPageDisclosure} showAddress />;
}
