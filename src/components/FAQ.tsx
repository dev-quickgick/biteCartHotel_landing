import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does the QR system work?",
    answer:
      "Our system generates unique QR codes for each room. When scanned, it opens a web-based menu customized for your hotel. Guests can browse, order, and pay directly from their smartphones without downloading any app.",
  },
  {
    question: "Is it secure for payments?",
    answer:
      "Yes, our system uses industry-standard encryption and complies with PCI DSS standards. We partner with trusted payment gateways to ensure all transactions are secure and protected.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "The setup process typically takes 1-2 weeks, depending on the size of your hotel and any custom integrations. Our team will guide you through every step, from menu digitization to staff training.",
  },
  {
    question: "Can we customize the menu and branding?",
    answer:
      "Our system is fully customizable. You can add your hotel's branding, adjust the menu layout, and even create seasonal or special event menus. We also support multiple languages for international guests.",
  },
  {
    question: "Can we integrate with our existing PMS?",
    answer:
      "Yes, we integrate with major Property Management Systems including Opera, IDS Next, and others. Our team will work with you to ensure smooth integration with your existing systems.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-900">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
