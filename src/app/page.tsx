import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import HeroSection from '@/components/Hero';
import StatsSection from '@/components/Stats';
import Contact from '@/components/Contact'
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <Features />
      <FAQ />
      <Contact/>
      <Footer/>
    </>
  );
}
