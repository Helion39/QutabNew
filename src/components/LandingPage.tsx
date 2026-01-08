import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import Hero from './Hero';
import MissionSection from './MissionSection';
import WhatIsQutab from './WhatIsQutab';
import Benefits from './Benefits';
import ProductsPreview from './ProductsPreview';
import HowToOrder from './HowToOrder';
import DistributionSection from './DistributionSection';
import SocialMediaSection from './SocialMediaSection';
import GallerySection from './GallerySection';
import TestimonySection from './TestimonySection';
import FAQ from './FAQ';
import AffiliateSection from './AffiliateSection';
import Footer from './Footer';

interface LandingPageProps {
  isLoggedIn: boolean;
}

export default function LandingPage({ isLoggedIn }: LandingPageProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#fffbef] font-['Space_Grotesk']">
      <Navbar isLoggedIn={isLoggedIn} />
      <Hero />
      <div data-aos="fade-up">
        <MissionSection />
      </div>
      {/* Section 1-2: Trust + Hook */}
      <div data-aos="fade-up" data-aos-delay="100">
        <WhatIsQutab />
      </div>
      {/* Section 3: Kenapa Memilih */}
      <div data-aos="fade-up" data-aos-delay="200">
        <Benefits />
      </div>
      {/* Section 4: Cara Pemesanan */}
      <div data-aos="fade-up">
        <HowToOrder />
      </div>
      {/* Section 5: Pilih Qurbanmu */}
      <div data-aos="fade-up" data-aos-delay="200">
        <ProductsPreview />
      </div>
      {/* Section 6: Testimoni */}
      <div data-aos="fade-up">
        <TestimonySection />
      </div>
      {/* Section 7: Cakupan Lokasi */}
      <div data-aos="fade-right">
        <DistributionSection />
      </div>
      {/* Extra sections */}
      <div data-aos="fade-up">
        <SocialMediaSection />
      </div>
      <div data-aos="fade-up">
        <GallerySection />
      </div>
      <div data-aos="fade-up">
        <FAQ />
      </div>
      {/* Affiliate Invitation */}
      <AffiliateSection />
      <Footer />
    </div>
  );
}
