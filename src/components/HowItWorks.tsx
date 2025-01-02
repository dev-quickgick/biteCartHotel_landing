"use client";

import { Button } from "@/components/ui/button";
import { ThreadStep } from "@/components/thread-steps";
import { Scan, UtensilsCrossed, Bell, Clock, ArrowRight } from 'lucide-react';
import { ContactForm } from "./contact-form";
import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Scan QR",
    description:
      "Simply scan the QR code placed at your table to instantly access our digital service menu.",
    icon: <Scan className="h-6 w-6" />,
    // Modern smartphone scanning QR code in restaurant setting
    image: "https://images.unsplash.com/photo-1622151834677-70f982c9adef?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Select Service",
    description:
      "Browse through our comprehensive service menu and choose your desired items or assistance with ease.",
    icon: <UtensilsCrossed className="h-6 w-6" />,
    // Modern digital menu on tablet in restaurant
    image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Staff Notified Instantly",
    description:
      "Our staff receives your request immediately through our real-time notification system for prompt attention.",
    icon: <Bell className="h-6 w-6" />,
    // Professional restaurant staff with tablet
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Service Delivered Seamlessly",
    description:
      "Experience swift and professional service delivery, perfectly tailored to your requirements and preferences.",
    icon: <Clock className="h-6 w-6" />,
    // Professional service delivery in upscale restaurant
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&auto=format&fit=crop&q=80",
  },
];

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-orange-50 to-orange-100/50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />
        <div className="absolute left-10 top-1/2 w-20 h-20 border-8 border-orange-200/50 rounded-full -translate-y-1/2" />
        <div className="absolute right-10 top-1/3 w-16 h-16 border-8 border-orange-200/50 transform rotate-45" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-900 leading-tight">
            Experience Seamless Services in 4 Simple Steps
          </h2>
          <p className="max-w-lg m-auto text-lg text-orange-800/80">
            Discover how BiteCart transforms your experience with our intuitive digital service system
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Steps Timeline */}
          <div className="lg:col-span-5">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="cursor-pointer group"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <ThreadStep
                    number={index + 1}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    isLast={index === steps.length - 1}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Preview */}
          <div className="lg:col-span-7 relative">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6 aspect-[16/9] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-500/10" />
                {steps.map((step, index) => (
                  <div 
                    key={index} 
                    className={`absolute inset-0 transition-all duration-700 transform ${
                      activeStep === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover rounded-lg"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-white/90">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <ContactForm
                  isOpen={isModalOpen}
                  onOpenChange={setIsModalOpen}
                  trigger={
                    <Button
                      size="lg"
                      className="bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all duration-200 text-lg px-8"
                    >
                      See BiteCart in Action <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

