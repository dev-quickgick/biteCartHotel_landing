'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/contact-form'
import { useState } from 'react'
import { ArrowRight, Utensils, Clock, Star } from 'lucide-react'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 to-white/20" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-[radial-gradient(circle_500px_at_50%_-30%,rgba(251,146,60,0.1),transparent)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-left relative z-10">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200">
              <p className="text-orange-700 text-sm font-medium">Smart Restaurant Solutions</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-orange-900 leading-tight">
              Turn Every Table Into a{' '}
              <span className="relative">
                <span className="relative z-10 text-orange-500">Smart Counter</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-200/50 -z-10 skew-x-3" />
              </span>
            </h1>
            <p className="text-xl mb-8 text-orange-700 max-w-xl">
              Revolutionize your restaurant experience with BiteCart's seamless ordering solution. Boost efficiency, reduce wait times, and delight your customers.
            </p>

            <ContactForm 
              isOpen={isModalOpen} 
              onOpenChange={setIsModalOpen} 
              trigger={
                <Button 
                  size="lg" 
                  className="bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40"
                >
                  Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              }
            />
          </div>

          {/* Image Section */}
          <div className="relative lg:translate-x-12">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl" />
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-orange-900/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-orange-500/5" />
              <Image 
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=2000" 
                alt="Restaurant interior" 
                width={1200} 
                height={600} 
                className="rounded-2xl hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-xl border border-orange-100 hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-orange-900 font-semibold text-lg">98% Satisfaction</p>
                  <p className="text-orange-600 text-sm">From restaurant owners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

