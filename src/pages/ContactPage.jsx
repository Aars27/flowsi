import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../sections/Navbar'
import PageHeader from '../components/PageHeader'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function ContactPage({ onOpenQuote }) {
  return (
    <>
      <Helmet>
        <title>Contact Us — Flowsi AI Automation | Bristol</title>
        <meta name="description" content="Get in touch with Flowsi in Bristol. Let's discuss how AI can automate your workflows and grow your business." />
      </Helmet>
      <Navbar onOpenQuote={onOpenQuote} />
      <main id="main-content">
        <PageHeader 
          title="Get In Touch"
          description="Ready to automate and scale? Reach out to our Bristol team today."
          breadcrumbs="Home / Contact"
        />
        <Contact onOpenQuote={onOpenQuote} />
      </main>
      <Footer onOpenQuote={onOpenQuote} />
    </>
  )
}
