import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../sections/Navbar'
import PageHeader from '../components/PageHeader'
import InteractiveDemo from '../sections/InteractiveDemo'
import CTABanner from '../sections/CTABanner'
import Footer from '../sections/Footer'

export default function DemoPage({ onOpenQuote }) {
  return (
    <>
      <Helmet>
        <title>Live Demo — Flowsi AI Booking Agent</title>
        <meta name="description" content="Experience our conversational AI booking bot in action. See how it handles enquiries and bookings 24/7." />
      </Helmet>
      <Navbar onOpenQuote={onOpenQuote} />
      <main id="main-content">
        <PageHeader 
          title="See Flowsi In Action"
          description="Try out our conversational booking agent and see how it handles customer enquiries."
          breadcrumbs="Home / Live Demo"
        />
        <InteractiveDemo />
        <CTABanner onOpenQuote={onOpenQuote} />
      </main>
      <Footer onOpenQuote={onOpenQuote} />
    </>
  )
}
