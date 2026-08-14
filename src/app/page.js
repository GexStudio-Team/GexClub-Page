import Hero from '@/components/home/Hero';
import PillarsGrid from '@/components/home/PillarsGrid';
import MissionSection from '@/components/home/MissionSection';
import EventsPreview from '@/components/home/EventsPreview';
import CtaBand from '@/components/home/CtaBand';
import Reveal from '@/components/layout/Reveal';

export const metadata = {
  title: 'Global Ecosystem for eXcellence',
  description:
    'Comunidad juvenil de desarrollo de software, videojuegos y hackathons para jóvenes de 14 a 18 años.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal><PillarsGrid /></Reveal>
      <Reveal><MissionSection /></Reveal>
      <Reveal><EventsPreview /></Reveal>
      <Reveal><CtaBand /></Reveal>
    </>
  );
}
