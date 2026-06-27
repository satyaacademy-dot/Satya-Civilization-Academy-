import Hero from '../components/Hero';
import ProgramsSection from '../components/ProgramsSection';
import Mission from '../components/Mission';
import { Pricing } from '../components/Pricing';
import Contact from '../components/Contact';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProgramsSection />
      <Mission />
      <Pricing />
      <Contact />
      <CTA />
    </main>
  );
}
