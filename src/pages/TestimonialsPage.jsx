import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../sections/Navbar'
import PageHeader from '../components/PageHeader'
import Testimonials from '../sections/Testimonials'
import CTABanner from '../sections/CTABanner'
import Footer from '../sections/Footer'

export default function TestimonialsPage({ onOpenQuote }) {
  return (
    <>
      <Helmet>
        <title>Client Testimonials — Flowsi AI Automation</title>
        <meta name="description" content="See what our clients say about the impact of Flowsi's AI automation on their business." />
      </Helmet>
      <Navbar onOpenQuote={onOpenQuote} />
      <main id="main-content">
        <PageHeader 
          title="Client Success Stories"
          description="Don't just take our word for it. Here's what Bristol businesses have to say."
          breadcrumbs="Home / Testimonials"
        />
        <Testimonials />
        <CTABanner onOpenQuote={onOpenQuote} />
      </main>
      <Footer onOpenQuote={onOpenQuote} />
    </>
  )
}
