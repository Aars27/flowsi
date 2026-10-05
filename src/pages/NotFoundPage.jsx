import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import Button from '../components/Button'

export default function NotFoundPage({ onOpenQuote }) {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Flowsi</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar onOpenQuote={onOpenQuote} />
      <main className="min-h-[80vh] bg-dark flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
        
        <h1 className="text-8xl font-extrabold text-white mb-4 relative z-10">404</h1>
        <p className="text-xl text-violet-300 mb-8 max-w-md relative z-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="relative z-10">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
        </div>
      </main>
      <Footer onOpenQuote={onOpenQuote} />
    </>
  )
}
