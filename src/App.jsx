import React, { useState, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollProgress from './components/ScrollProgress'
import QuoteModal from './components/QuoteModal'
import InitialLoader from './components/InitialLoader'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage'))
const QuotePage = React.lazy(() => import('./pages/QuotePage'))

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
    <>
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
            path="*" 
            element={
              <PageTransition>
                <Suspense fallback={<PageSkeleton />}>
                  <HomePage onOpenQuote={openQuoteModal} />
                </Suspense>
              </PageTransition>
            } 
          />
        </Routes>
      </AnimatePresence>

      {/* Global Slide-In Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={closeQuoteModal} />
    </>
  )
}
