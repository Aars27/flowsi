import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../sections/Navbar'
import PageHeader from '../components/PageHeader'
import Services from '../sections/Services'
import CTABanner from '../sections/CTABanner'
import Footer from '../sections/Footer'

export default function ServicesPage({ onOpenQuote }) {
  return (
    <>
      <Helmet>
        <title>Our Services — Flowsi AI Automation | Bristol</title>
        <meta name="description" content="Explore our full ecosystem of AI automation, conversational booking agents, custom web engineering, video production, and search supremacy." />
      </Helmet>
      <Navbar onOpenQuote={onOpenQuote} />
      <main id="main-content">
        <PageHeader 
          title="Intelligent Services"
          description="Engineered to Scale. We provide everything you need to automate workflows and grow your revenue."
          breadcrumbs="Home / Services"
        />
        {/* We reuse the Services component but disable preview to show all 9 cards + Video Showcase */}
        <Services onOpenQuote={onOpenQuote} preview={false} />
        <CTABanner onOpenQuote={onOpenQuote} />
      </main>
      <Footer onOpenQuote={onOpenQuote} />
    </>
  )
}
