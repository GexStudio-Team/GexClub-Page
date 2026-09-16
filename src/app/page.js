import Hero from '@/components/home/Hero';
import PillarsGrid from '@/components/home/PillarsGrid';
import MissionSection from '@/components/home/MissionSection';
import CommunityInviteSection from '@/components/home/CommunityInviteSection';
import EventsPreview from '@/components/home/EventsPreview';
import CtaBand from '@/components/home/CtaBand';

export default function Home() {
  return (
    <>
      <Hero />
      <PillarsGrid />
      <MissionSection />
      <CommunityInviteSection />
      <EventsPreview />
      <CtaBand />
    </>
  );
}
