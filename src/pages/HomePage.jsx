import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import LogoMarquee from '../sections/LogoMarquee'
import About from '../sections/About'
import Services from '../sections/Services'
import HowItWorks from '../sections/HowItWorks'
import Testimonials from '../sections/Testimonials'
import CTABanner from '../sections/CTABanner'
import Footer from '../sections/Footer'

export default function HomePage({ onOpenQuote }) {
  return (
    <>
      <Helmet>
        <title>Flowsi — AI Automation Agency | Bristol, UK</title>
        <meta name="description" content="Flowsi — AI Automation & Digital Services Agency in Bristol, UK. We help local businesses simplify, automate and scale with smart AI solutions." />
      </Helmet>
      <Navbar onOpenQuote={onOpenQuote} />
      <main id="main-content">
        <Hero onOpenQuote={onOpenQuote} />
        <LogoMarquee />
        <About />
        <Services onOpenQuote={onOpenQuote} preview={true} />
        <HowItWorks />
        <Testimonials />
        <CTABanner onOpenQuote={onOpenQuote} />
      </main>
      <Footer onOpenQuote={onOpenQuote} />
    </>
  )
}
