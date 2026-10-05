import React from 'react'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import LogoMarquee from '../sections/LogoMarquee'
import About from '../sections/About'
import Services from '../sections/Services'
import HowItWorks from '../sections/HowItWorks'
import Industries from '../sections/Industries'
import InteractiveDemo from '../sections/InteractiveDemo'
import Stats from '../sections/Stats'
import Pricing from '../sections/Pricing'
import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'
import CTABanner from '../sections/CTABanner'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import MobileActionBar from '../components/MobileActionBar'

export default function HomePage({ onOpenQuote }) {
  return (
    <>
      <Navbar onOpenQuote={onOpenQuote} />
      <main id="main-content">
        <Hero onOpenQuote={onOpenQuote} />
        <LogoMarquee />
        <About />
        <Services onOpenQuote={onOpenQuote} />
        <HowItWorks />
        <Industries />
        <InteractiveDemo />
        <Stats />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTABanner onOpenQuote={onOpenQuote} />
        <Contact onOpenQuote={onOpenQuote} />
      </main>
      <Footer onOpenQuote={onOpenQuote} />
      <WhatsAppButton />
      <MobileActionBar onOpenQuote={onOpenQuote} />
    </>
  )
}
