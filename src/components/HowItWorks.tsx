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
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Select Service",
    description:
      "Browse through our comprehensive service menu and choose your desired items or assistance with ease.",
    icon: <UtensilsCrossed className="h-6 w-6" />,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Staff Notified Instantly",
    description:
      "Our staff receives your request immediately through our real-time notification system for prompt attention.",
    icon: <Bell className="h-6 w-6" />,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Service Delivered Seamlessly",
    description:
      "Experience swift and professional service delivery, perfectly tailored to your requirements and preferences.",
    icon: <Clock className="h-6 w-6" />,
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="how-it-works" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-orange-900">
        Experience Seamless Services in 4 Simple Steps
        </h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <ThreadStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
            >
              <div className="mt-4 rounded-lg overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
            </ThreadStep>
          ))}
        </div>
        <div className="mt-16 text-center">
          <ContactForm
            isOpen={isModalOpen}
            onOpenChange={setIsModalOpen}
            trigger={
              <Button
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                See BiteCart in Action <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}

