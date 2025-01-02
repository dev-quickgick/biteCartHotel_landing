"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { ContactForm } from "./contact-form";

const subscriptionPlans = [
  {
    title: "Small Hotels",
    monthlyPrice: 4500,
    orignalPrice: 54000,
    yearlyPrice: 43200,
    description: "Perfect for small hotels",
    features: [
      "Up to 500 orders/month",
      "Basic analytics",
      "Email support",
    ],
    ctaText: "Choose Plan",
    value: "small"
  },
  {
    title: "Mid Sized Hotels",
    monthlyPrice: 9500,
    orignalPrice: 114000,
    yearlyPrice: 91200,
    description: "Ideal for growing businesses",
    features: [
      "Up to 1500 orders/month",
      "Advanced analytics",
      "Priority support",
    ],
    ctaText: "Choose Plan",
    highlighted: true,
    value: "medium"
  },
  {
    title: "Large Hotels",
    monthlyPrice: 15500,
    orignalPrice: 186000,
    yearlyPrice: 148800,
    description: "For established hotels",
    features: [
      "Up to 3000 orders/month",
      "Advanced analytics",
      "Dedicated support",
    ],
    ctaText: "Choose Plan",
    value: "large"
  },
  {
    title: "Enterprise Hotels",
    monthlyPrice: null,
    yearlyPrice: null,
    orignalPrice: null,
    description: "For large-scale operations",
    features: [
      "No limit (>3000 orders)",
      "Custom pricing",
      "Custom integrations",
    ],
    ctaText: "Contact Us",
    value: "enterprise"
  },
];

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-orange-900">
            Flexible Pricing for Every Business
          </h2>
          <p className="text-center text-orange-700 mb-12 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include our core features to help you grow your business.
          </p>
        </motion.div>
        <div className="flex justify-center items-center gap-2 mb-8">
          <span className="text-base font-medium text-orange-900">Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-orange-600"
          />
          <span className="text-base font-medium text-orange-900">Yearly</span>
          <span className="text-sm font-medium text-green-600 ml-1">(Save 20%)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PricingCard {...plan} isYearly={isYearly} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  title: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  orignalPrice: number | null;
  description: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
  isYearly?: boolean;
  value: string;
}

function PricingCard({
  title,
  monthlyPrice,
  yearlyPrice,
  orignalPrice,
  description,
  features,
  ctaText,
  highlighted,
  isYearly,
  value
}: PricingCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const displayPrice = isYearly ? yearlyPrice : monthlyPrice;
  const monthlyEquivalent = yearlyPrice ? Math.round(yearlyPrice / 12) : null;

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 h-full bg-white ${
        highlighted ? "border-orange-600 border-2" : "border-orange-100 hover:border-orange-200"
      }`}
    >
      <CardContent className="p-8">
        {highlighted && (
          <div className="absolute top-0 right-0">
            <div className="bg-orange-600 text-white text-sm font-semibold py-1 px-4 rounded-bl-lg flex items-center">
              <Zap className="w-4 h-4 mr-1" />
              Most Popular
            </div>
          </div>
        )}
        <h3 className="text-2xl font-bold mb-2 text-[#8B4513]">{title}</h3>
        {displayPrice ? (
          <div className="mb-6">
            <div className="text-4xl font-bold text-orange-700">
              ₹{formatNumber(isYearly ? monthlyEquivalent! : monthlyPrice!)}
              <span className="text-lg text-orange-500 font-normal ml-1">
                /{'month'}
              </span>
            </div>
            {isYearly && monthlyPrice && (
              <>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-base line-through text-gray-500">
                    ₹{formatNumber(orignalPrice!)}/year
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    20% off
                  </span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  ₹{formatNumber(yearlyPrice!)} billed annually
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="text-4xl font-bold mb-6 text-orange-700">Custom</div>
        )}
        <p className="text-orange-600 mb-6">{description}</p>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-orange-700">{feature}</span>
            </li>
          ))}
        </ul>
        <ContactForm
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          defaultProduct={value as "small" | "medium" | "large" | "enterprise"}
          defaultDuration={isYearly ? 'yearly' : 'monthly'}
          trigger={
            <Button
              className={`w-full transition-colors duration-300 ${
                highlighted
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "bg-orange-50 text-orange-900 hover:bg-orange-100 border border-orange-200"
              }`}
            >
              {ctaText}
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
}

