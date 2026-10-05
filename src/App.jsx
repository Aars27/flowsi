import React, { useState, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import ScrollProgress from './components/ScrollProgress'
import QuoteModal from './components/QuoteModal'
import InitialLoader from './components/InitialLoader'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage'))
const QuotePage = React.lazy(() => import('./pages/QuotePage'))
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'))
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))
const IndustriesPage = React.lazy(() => import('./pages/IndustriesPage'))
const DemoPage = React.lazy(() => import('./pages/DemoPage'))
const PricingPage = React.lazy(() => import('./pages/PricingPage'))
const TestimonialsPage = React.lazy(() => import('./pages/TestimonialsPage'))
const FAQPage = React.lazy(() => import('./pages/FAQPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const LegalPage = React.lazy(() => import('./pages/LegalPage'))
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))

// Fallback skeleton loader
function PageSkeleton() {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const location = useLocation()

  const openQuoteModal = () => setIsQuoteOpen(true)
  const closeQuoteModal = () => setIsQuoteOpen(false)

  return (
    <HelmetProvider>
      <InitialLoader />
      <ScrollProgress />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <HomePage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
          <Route 
            path="/services" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <ServicesPage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
          <Route 
            path="/services/:slug" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <ServiceDetailPage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
          <Route 
            path="/about" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <AboutPage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
          <Route 
            path="/industries" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <IndustriesPage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
          <Route 
            path="/demo" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <DemoPage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
          <Route 
            path="/pricing" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <PricingPage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
          <Route 
            path="/testimonials" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <TestimonialsPage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
          <Route 
            path="/faq" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <FAQPage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <ContactPage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
          <Route 
            path="/quote" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <QuotePage />
                </Suspense>
              </PageTransition>
            } 
          />
          <Route 
            path="/privacy" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <LegalPage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
          <Route 
            path="/terms" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <LegalPage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
          <Route 
            path="/cookies" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <LegalPage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
          <Route 
            path="*" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <NotFoundPage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
        </Routes>
      </AnimatePresence>

      {/* Global Slide-In Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={closeQuoteModal} />
    </HelmetProvider>
  )
}
