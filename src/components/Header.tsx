"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="BiteCart Logo"
            className="w-28"
            width={100}
            height={100}
          />
        </div>{" "}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#how-it-works"
            className="text-orange-800 hover:text-orange-600 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#features"
            className="text-orange-800 hover:text-orange-600 transition-colors"
          >
            Features
          </a>

          <a
            href="#testimonials"
            className="text-orange-800 hover:text-orange-600 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            className="text-orange-800 hover:text-orange-600 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-orange-800 hover:text-orange-600 transition-colors"
          >
            FAQ
          </a>
        </nav>
        <ContactForm
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          trigger={
            <Button className="bg-orange-500 text-white hover:bg-orange-600">
              Get Started
            </Button>
          }
        />
      </div>
    </header>
  );
}
