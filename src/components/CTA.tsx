"use client";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-orange-600 text-white py-20 relative overflow-hidden">
      {/* Left side decorative pattern - Desktop only */}
      <div className="hidden lg:block absolute left-0 top-0 h-full w-[30%] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-transparent to-transparent z-10" />
        <div className="absolute top-1/2 -translate-y-1/2 -left-24 w-[400px] opacity-15">
          <svg
            viewBox="0 0 200 200"
            className="w-full rotate-[30deg]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M47.5,-51.2C59.9,-35.3,67.3,-17.6,66.5,-0.8C65.7,16.1,56.7,32.2,44.2,45.8C31.7,59.5,15.9,70.7,-1.9,72.6C-19.7,74.5,-39.4,67,-54.8,53.5C-70.2,40,-81.4,20,-80.8,0.6C-80.2,-18.8,-67.8,-37.7,-52.3,-53.6C-36.8,-69.5,-18.4,-82.4,-0.2,-82.2C18,-82,35.9,-68.6,47.5,-51.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <div className="w-40 h-40 border-8 border-white rounded-full" />
        </div>
      </div>

      {/* Right side decorative pattern - Desktop only */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-[30%] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-orange-600 via-transparent to-transparent z-10" />
        <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-[400px] opacity-15">
          <svg
            viewBox="0 0 200 200"
            className="w-full -rotate-[30deg]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M42.7,-62.9C50.9,-52.8,50.1,-35.7,51.7,-21.1C53.4,-6.4,57.5,5.8,56.2,18.4C54.8,31,48,44,37.4,53.5C26.8,63,13.4,69,-1.9,71.6C-17.2,74.2,-34.4,73.4,-45.7,64.5C-57,55.6,-62.4,38.5,-65.1,21.8C-67.8,5.2,-67.8,-11,-61.9,-24.8C-56,-38.5,-44.2,-49.8,-31.4,-57.8C-18.6,-65.8,-4.7,-70.5,7.7,-81.1C20,-91.7,40,-91.2,42.7,-62.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute top-20 right-20 opacity-20">
          <div className="w-32 h-32 border-8 border-white transform rotate-45" />
        </div>
      </div>

      {/* Mobile decorative elements */}
      <div className="lg:hidden absolute -left-8 top-10 opacity-10">
        <svg
          viewBox="0 0 200 200"
          className="w-32 h-32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M39.5,-49.6C52.9,-40.9,66.8,-31.6,71.8,-18.6C76.8,-5.6,72.8,11.1,65.4,25.9C58.1,40.7,47.4,53.5,33.6,60.8C19.8,68.1,2.9,69.8,-12.7,65.9C-28.3,62,-42.6,52.4,-53.8,39.4C-65,26.4,-73.1,10,-71.8,-5.7C-70.4,-21.3,-59.6,-36.2,-46.3,-45C-33,-53.8,-17.2,-56.5,-2.1,-53.9C13,-51.3,26.1,-43.3,39.5,-49.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="lg:hidden absolute -right-8 bottom-10 opacity-10">
        <svg
          viewBox="0 0 200 200"
          className="w-32 h-32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M44.3,-76.5C58.3,-69.2,71.3,-58.4,79.1,-44.6C86.9,-30.8,89.5,-14,88.7,2.5C87.9,19,83.7,35.1,75.1,48.7C66.5,62.3,53.4,73.4,38.5,78.3C23.6,83.2,6.9,81.9,-8.6,77.9C-24.1,73.9,-38.4,67.2,-51.1,57.7C-63.8,48.2,-74.9,35.9,-79.4,21.3C-83.9,6.7,-81.8,-10.3,-76.3,-25.8C-70.8,-41.3,-61.9,-55.4,-49,-64.6C-36.1,-73.8,-19.2,-78.2,-1.6,-75.8C16,-73.4,30.3,-64.2,44.3,-76.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Revolutionize
            <span className="block">Your Hotel Experience?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the growing number of businesses that are streamlining their
            operations and delighting customers with BiteCart.
          </p>
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-white/20 rounded-lg blur-md" />
            <ContactForm
              isOpen={isModalOpen}
              onOpenChange={setIsModalOpen}
              trigger={
                <Button
                  size="lg"
                  variant="outline"
                  className="relative bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6"
                >
                  Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
