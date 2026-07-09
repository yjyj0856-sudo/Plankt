/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Manifesto from "./components/Manifesto.tsx";
import WhyPlankit from "./components/WhyPlankit.tsx";
import WhatWeDo from "./components/WhatWeDo.tsx";
import SelectedWorks from "./components/SelectedWorks.tsx";
import WorkProcess from "./components/WorkProcess.tsx";
import Team from "./components/Team.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Fine Noise Grain Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Fixed top navigation bar */}
      <Navbar />

      <main>
        {/* Section 1: Hero (Deep Violet, 100vh) */}
        <Hero />

        {/* Section 2: Manifesto (White) */}
        <Manifesto />

        {/* Section 3: Why Plankit (White) */}
        <WhyPlankit />

        {/* Section 4: What We Do (Deep Violet) */}
        <WhatWeDo />

        {/* Section 5: Selected Works (White) */}
        <SelectedWorks />

        {/* Section 6: Work Process (Deep Violet) */}
        <WorkProcess />

        {/* Section 7: Team (White) */}
        <Team />

        {/* Section 8: Contact (Deep Violet) */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

