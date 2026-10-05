import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../sections/Navbar'
import PageHeader from '../components/PageHeader'
import FAQ from '../sections/FAQ'
import CTABanner from '../sections/CTABanner'
import Footer from '../sections/Footer'

export default function FAQPage({ onOpenQuote }) {
  return (
    <>
      <Helmet>
        <title>FAQ — Flowsi AI Automation</title>
        <meta name="description" content="Got questions? Here are the most common questions we get from businesses about our AI automation services." />
      </Helmet>
      <Navbar onOpenQuote={onOpenQuote} />
      <main id="main-content">
        <PageHeader 
          title="Frequently Asked Questions"
          description="Everything you need to know about working with Flowsi."
          breadcrumbs="Home / FAQ"
        />
        <FAQ />
        <CTABanner onOpenQuote={onOpenQuote} />
      </main>
      <Footer onOpenQuote={onOpenQuote} />
    </>
  )
}
