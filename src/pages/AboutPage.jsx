import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../sections/Navbar'
import PageHeader from '../components/PageHeader'
import About from '../sections/About'
import HowItWorks from '../sections/HowItWorks'
import Stats from '../sections/Stats'
import CTABanner from '../sections/CTABanner'
import Footer from '../sections/Footer'

export default function AboutPage({ onOpenQuote }) {
  return (
    <>
      <Helmet>
        <title>About Us — Flowsi AI Automation | Bristol</title>
        <meta name="description" content="Learn about Flowsi, our process, and why Bristol businesses choose us for AI automation." />
      </Helmet>
      <Navbar onOpenQuote={onOpenQuote} />
      <main id="main-content">
        <PageHeader 
          title="About Flowsi"
          description="We are a Bristol-based agency dedicated to helping local businesses simplify, automate and scale with smart AI solutions."
          breadcrumbs="Home / About"
        />
        <About />
        <Stats />
        <HowItWorks />
        <CTABanner onOpenQuote={onOpenQuote} />
      </main>
      <Footer onOpenQuote={onOpenQuote} />
    </>
  )
}
