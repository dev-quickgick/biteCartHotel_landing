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
    yearlyPrice: 43200,
    description: "Perfect for small hotels",
    features: [
      "Up to 500 orders/month",
      "₹9.00 per order (monthly)",
      "₹7.20 per order (yearly)",
      "Basic analytics",
      "Email support",
    ],
    ctaText: "Choose Plan",
    value: "small"
  },
  {
    title: "Mid Sized Hotels",
    monthlyPrice: 9500,
    yearlyPrice: 91200,
    description: "Ideal for growing businesses",
    features: [
      "Up to 1500 orders/month",
      "₹6.33 per order (monthly)",
      "₹5.07 per order (yearly)",
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
    yearlyPrice: 148800,
    description: "For established hotels",
    features: [
      "Up to 3000 orders/month",
      "₹5.17 per order (monthly)",
      "₹4.13 per order (yearly)",
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
    description: "For large-scale operations",
    features: [
      "No limit (>3000 orders)",
      "Custom pricing",
      "Custom integrations",
      "Dedicated account manager",
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
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-orange-100">
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
        <div className="flex justify-center items-center mb-8">
          <span className="mr-2 text-sm font-medium">Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="mr-2 data-[state=checked]:bg-orange-600"
          />
          <span className="text-sm font-medium">Yearly</span>
          <span className="ml-2 text-sm font-medium text-green-600">(Save 20%)</span>
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
  description,
  features,
  ctaText,
  highlighted,
  isYearly,
  value
}: PricingCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const displayPrice = isYearly ? yearlyPrice : monthlyPrice;
  const yearlyDiscount = monthlyPrice ? Math.round((1 - (yearlyPrice! / 12) / monthlyPrice) * 100) : 0;
  const monthlyEquivalent = yearlyPrice ? Math.round(yearlyPrice / 12) : null;

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 h-full ${
        highlighted ? "border-orange-600 border-2 shadow-xl" : "hover:shadow-lg"
      }`}
    >
      <CardContent className="p-6 relative">
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
          <>
            <div className="text-4xl font-bold mb-2 text-orange-700">
              ₹{formatNumber(displayPrice)}
              <span className="text-lg text-orange-500 font-normal ml-1">
                {isYearly ? '/year' : '/month'}
              </span>
            </div>
            {isYearly && monthlyPrice && (
              <div className="text-sm text-gray-600 mb-2">
                <span className="line-through">₹{formatNumber(monthlyPrice)}/month</span>
                <span className="text-green-600 ml-2">20% off</span>
              </div>
            )}
            {isYearly && monthlyEquivalent && (
              <div className="text-sm text-gray-600 mb-2">
                ₹{formatNumber(monthlyEquivalent)}/month billed annually
              </div>
            )}
          </>
        ) : (
          <div className="text-4xl font-bold mb-2 text-orange-700">Custom</div>
        )}
        <p className="text-orange-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
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
                  : "bg-orange-100 text-orange-900 hover:bg-orange-200"
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

