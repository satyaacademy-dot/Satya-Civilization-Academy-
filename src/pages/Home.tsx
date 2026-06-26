import Hero from '../components/Hero';
import Features from '../components/Features';
import Mission from '../components/Mission';
import { Pricing } from '../components/Pricing';
import Contact from '../components/Contact';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Mission />
      <Pricing />
      <Contact />
      <CTA />
    </main>
  );
}
