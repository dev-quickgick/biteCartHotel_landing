'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PhoneOff, AlertTriangle, XCircle, BarChart } from 'lucide-react';
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const problems = [
  {
    icon: PhoneOff,
    title: "Inefficient Communication",
    description:
      "Traditional phone-based room service leads to miscommunication, long wait times, and order errors.",
    stats: "60% of hotels report order accuracy issues",
    impact: "Decreased guest satisfaction and revenue loss",
  },
  {
    icon: AlertTriangle,
    title: "Operational Bottlenecks",
    description:
      "Manual order processing creates staff overwhelm, delayed service, and poor resource allocation.",
    stats: "40% of staff time spent on administrative tasks",
    impact: "Reduced efficiency and higher operational costs",
  },
  {
    icon: XCircle,
    title: "Limited Guest Engagement",
    description:
      "Paper menus and traditional systems fail to capture guest preferences and limit upselling opportunities.",
    stats: "30% lower average order value",
    impact: "Missed revenue opportunities and lower guest satisfaction",
  },
];

export default function Problems() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#FFF5F2]/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4 bg-white text-[#FF5C35] font-medium border-[#FF5C35]">
            Pain Points
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-[#783610]">
            The Problems We Solve
          </h2>
          <p className="text-[#783610]/80 text-lg">
            Traditional room service faces significant challenges that impact
            both guest satisfaction and hotel operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="relative overflow-hidden bg-white border-none shadow-lg h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-6 flex-grow">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#FFF5F2] mb-4">
                      <problem.icon className="w-6 h-6 text-[#FF5C35]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#783610]">
                      {problem.title}
                    </h3>
                    <p className="text-[#783610]/80 mb-4">
                      {problem.description}
                    </p>
                  </div>
                  <div className="space-y-3 pt-4 border-t border-[#FFF5F2]">
                    <div className="flex items-center gap-2 text-sm">
                      <BarChart className="w-4 h-4 text-[#FF5C35]" />
                      <span className="font-medium text-[#783610]">{problem.stats}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-[#FF5C35]/70" />
                      <span className="text-[#783610]/80">{problem.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

