import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../sections/Navbar'
import PageHeader from '../components/PageHeader'
import Industries from '../sections/Industries'
import CTABanner from '../sections/CTABanner'
import Footer from '../sections/Footer'

export default function IndustriesPage({ onOpenQuote }) {
  return (
    <>
      <Helmet>
        <title>Industries We Serve — Flowsi AI Automation</title>
        <meta name="description" content="Tailored AI automation solutions for salons, restaurants, dentists, clinics, and local shops in the UK." />
      </Helmet>
      <Navbar onOpenQuote={onOpenQuote} />
      <main id="main-content">
        <PageHeader 
          title="Industries We Serve"
          description="Whether you run a salon, restaurant, dental practice, or travel agency — Flowsi's solutions are tailored to your industry."
          breadcrumbs="Home / Industries"
        />
        <Industries />
        <CTABanner onOpenQuote={onOpenQuote} />
      </main>
      <Footer onOpenQuote={onOpenQuote} />
    </>
  )
}
