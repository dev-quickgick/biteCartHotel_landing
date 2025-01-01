import { ArrowRight, BarChart, Check, Users } from 'lucide-react';
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hotels = () => {
  return (
    <section id="hotels" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-900 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="BiteCart Logo"
            className="mr-2 w-36 relative top-[-12px]"
            width={100}
            height={100}
            
          />
          <span>for Hotels</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-orange-800">
              Elevate Your Hotel's Dining Experience
            </h3>
            <p className="text-lg text-orange-700">
              Transform your hotel's food service with BiteCart's innovative
              room service and restaurant ordering solution. From in-room dining
              to poolside service, we've got you covered.
            </p>
            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-orange-800">
                    24/7 Room Service Made Easy
                  </h4>
                  <p className="text-orange-700">
                    Enable guests to order from their rooms anytime with our
                    digital menu system
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-orange-800">
                    Multi-Venue Management
                  </h4>
                  <p className="text-orange-700">
                    Seamlessly manage orders from multiple restaurants and bars
                    within your property
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-orange-800">
                    Integration with PMS
                  </h4>
                  <p className="text-orange-700">
                    Direct integration with your Property Management System for
                    seamless billing
                  </p>
                </div>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-600"
            >
              Learn More About Hotel Solutions{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
              alt="Luxurious hotel room service"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <BarChart className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <div className="font-bold text-orange-900">35%</div>
                  <div className="text-sm text-orange-700">
                    Average increase in room service orders
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <div className="font-bold text-orange-900">92%</div>
                  <div className="text-sm text-orange-700">
                    Guest satisfaction rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotels;

