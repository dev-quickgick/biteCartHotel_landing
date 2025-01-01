import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hotels from '@/components/Hotels'
import Problems from '@/components/Problems'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Problems />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
        {/* <Hotels /> */}
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

