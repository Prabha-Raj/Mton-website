import React, { useState } from 'react';
import Layout from './components/layout/Layout';

// Sections
import HeroSection from './components/sections/HeroSection'; // Section 1
import DeliverySearchBar from './components/sections/DeliverySearchBar'; // Address & Search Bar right after Hero Section
import BrandIntroSection from './components/sections/BrandIntroSection'; // Section 2
import SignatureSpecialties from './components/sections/SignatureSpecialties'; // Section 3
import FreshCutsSection from './components/sections/FreshCutsSection'; // Original Fresh Butchery Cuts with Weight Selectors
import WhyMtonSection from './components/sections/WhyMtonSection'; // Section 4
import PhilosophySection from './components/sections/PhilosophySection'; // Section 5
import MenuSection from './components/sections/MenuSection'; // Section 6
import KitchenToTableSection from './components/sections/KitchenToTableSection'; // Section 7
import MuttonMomentSection from './components/sections/MuttonMomentSection'; // Section 8
import OccasionsSection from './components/sections/OccasionsSection'; // Section 9
import BrandStatementSection from './components/sections/BrandStatementSection'; // Section 10
import FoodGallerySection from './components/sections/FoodGallerySection'; // Section 11
// import ExperiencePillarsSection from './components/sections/ExperiencePillarsSection'; // Section 12
// import ReviewsSection from './components/sections/ReviewsSection'; // Section 13
// import FaqSection from './components/sections/FaqSection'; // Section 14
// import FindMtonSection from './components/sections/FindMtonSection'; // Section 15
// import SocialSection from './components/sections/SocialSection'; // Section 16
// import ConversionSection from './components/sections/ConversionSection'; // Section 17

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Layout>
      {/* Section 1 — Hero Section */}
      <HeroSection />

      {/* Address & Search Bar Section — Positioned directly after Hero Section */}
      <DeliverySearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Fresh Artisanal MTON Cuts (Original Products with 500g/1kg Portion Selector) */}
      <FreshCutsSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Section 2 — Brand Introduction: Where Mutton Takes Centre Stage */}
      <BrandIntroSection />

      {/* Section 3 — Our Signature Specialities: Handi Mutton, Biryani, Soup, Specials */}
      <SignatureSpecialties />


      {/* Section 4 — Why MTON? Made for People Who Know Their Mutton */}
      <WhyMtonSection />

      {/* Section 5 — The MTON Philosophy: Less Ordinary. More Mutton */}
      <PhilosophySection />

      {/* Section 6 — A Closer Look at the Menu: Handi, Biryani, Soups, Curries */}
      <MenuSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Section 7 — From Kitchen to Table: Good Food Deserves Attention to Detail */}
      <KitchenToTableSection />

      {/* Section 8 — The Mutton Lover's Moment: That First Bite Says It All */}
      <MuttonMomentSection />

      {/* Section 9 — Made for Every Occasion: Friends, Family, Solo, Home */}
      <OccasionsSection />

      {/* Section 10 — The Signature Brand Statement: Not For Every Craving */}
      <BrandStatementSection />

      {/* Section 11 — Explore the Food Gallery: A Feast for the Eyes */}
      <FoodGallerySection />

      {/* Section 12 — What Makes a Great Mutton Meal? Four Pillars */}
      {/* <ExperiencePillarsSection /> */}

      {/* Section 13 — Customer Love & Reviews */}
      {/* <ReviewsSection /> */}

      {/* Section 14 — Frequently Asked Questions */}
      {/* <FaqSection /> */}

      {/* Section 15 — Find MTON: Location, Timings, Orders */}
      {/* <FindMtonSection /> */}

      {/* Section 16 — Connect With MTON: Follow the Flavour */}
      {/* <SocialSection /> */}

      {/* Section 17 — The Conversion Section: Your Mutton Craving Has a Name */}
      {/* <ConversionSection /> */}

      {/* Section 18: Grand Footer is rendered inside Layout.jsx */}
    </Layout>
  );
}
