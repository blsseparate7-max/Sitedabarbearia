/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import Team from './components/Team';
import Services from './components/Services';
import Subscriptions from './components/Subscriptions';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-yellow/30 selection:text-brand-yellow">
      <Navbar />
      <main>
        <HeroSection />
        <Team />
        <Services />
        <Subscriptions />
        <About />
        <Testimonials />
        <FAQ />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
