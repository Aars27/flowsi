import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../sections/Navbar'
import PageHeader from '../components/PageHeader'
import Pricing from '../sections/Pricing'
import FAQ from '../sections/FAQ'
import CTABanner from '../sections/CTABanner'
import Footer from '../sections/Footer'

export default function PricingPage({ onOpenQuote }) {
  return (
    <>
      <Helmet>
        <title>Pricing & Plans — Flowsi AI Automation</title>
        <meta name="description" content="Transparent, ROI-focused pricing plans for AI automation and digital services." />
      </Helmet>
      <Navbar onOpenQuote={onOpenQuote} />
      <main id="main-content">
        <PageHeader 
          title="Simple, Transparent Pricing"
          description="Invest in systems that pay for themselves. No hidden fees, just pure ROI."
          breadcrumbs="Home / Pricing"
        />
        <Pricing />
        <FAQ />
        <CTABanner onOpenQuote={onOpenQuote} />
      </main>
      <Footer onOpenQuote={onOpenQuote} />
    </>
  )
}
