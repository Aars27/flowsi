import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Navigate } from 'react-router-dom'
import Navbar from '../sections/Navbar'
import PageHeader from '../components/PageHeader'
import CTABanner from '../sections/CTABanner'
import Footer from '../sections/Footer'
import { servicesData } from '../data/servicesData'
import { CheckCircle } from 'lucide-react'
import Button from '../components/Button'

export default function ServiceDetailPage({ onOpenQuote }) {
  const { slug } = useParams()
  const service = servicesData.find(s => s.slug === slug)

  if (!service) {
    return <Navigate to="/404" replace />
  }

  const Icon = service.icon

  return (
    <>
      <Helmet>
        <title>{service.title} — Flowsi AI Automation | Bristol</title>
        <meta name="description" content={service.description} />
      </Helmet>
      <Navbar onOpenQuote={onOpenQuote} />
      <main id="main-content">
        <PageHeader 
          title={service.title}
          description={service.description}
          breadcrumbs={`Home / Services / ${service.title}`}
        />

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-violet-50 rounded-3xl p-8 lg:p-12 mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-dark">What's Included</h2>
              </div>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-violet-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-4">Who Is It For?</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.whoIsItFor}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark mb-4">How It Works</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.howItWorks}</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-dark mb-6">Ready to get started?</h3>
              <Button onClick={onOpenQuote} size="lg" variant="violet" glowing>
                Get a Custom Quote
              </Button>
            </div>
          </div>
        </section>

        <CTABanner onOpenQuote={onOpenQuote} />
      </main>
      <Footer onOpenQuote={onOpenQuote} />
    </>
  )
}
