import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import Navbar from '../sections/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../sections/Footer'

export default function LegalPage({ onOpenQuote }) {
  const location = useLocation()
  
  let title = "Legal Information"
  let breadcrumbs = "Home / Legal"
  
  if (location.pathname === '/privacy') {
    title = "Privacy Policy"
    breadcrumbs = "Home / Privacy Policy"
  } else if (location.pathname === '/terms') {
    title = "Terms of Service"
    breadcrumbs = "Home / Terms of Service"
  } else if (location.pathname === '/cookies') {
    title = "Cookie Policy"
    breadcrumbs = "Home / Cookie Policy"
  }

  return (
    <>
      <Helmet>
        <title>{title} — Flowsi</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar onOpenQuote={onOpenQuote} />
      <main id="main-content">
        <PageHeader 
          title={title}
          breadcrumbs={breadcrumbs}
        />
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-violet lg:prose-lg text-gray-600">
            <p>This is a placeholder for the {title}. Please replace this content with your actual legal text.</p>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </section>
      </main>
      <Footer onOpenQuote={onOpenQuote} />
    </>
  )
}
