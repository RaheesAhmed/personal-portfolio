"use client";

import React from 'react';
import Header from '@/components/portfolio/Header';
import AboutMe from '@/components/portfolio/AboutMe';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Testimonials from '@/components/portfolio/Testimonials';
import ProfessionalProfiles from '@/components/portfolio/ProfessionalProfiles';
import Contact from '@/components/portfolio/Contact';

const Portfolio = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans p-8">
      <main className="max-w-4xl mx-auto space-y-20">
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Testimonials />
        <ProfessionalProfiles />
        <Contact />
      </main>
    </div>
  );
};

export default Portfolio;