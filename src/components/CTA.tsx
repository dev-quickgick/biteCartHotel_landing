'use client'

import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/contact-form'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="bg-orange-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Revolutionize Your Hotel?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Join the growing number of businesses that are streamlining their operations and delighting customers with BiteCart.</p>
        <ContactForm 
          isOpen={isModalOpen} 
          onOpenChange={setIsModalOpen} 
          trigger={
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600">
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          }
        />
      </div>
    </section>
  )
}

