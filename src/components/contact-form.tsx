"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Send, Phone, Mail } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  trigger?: React.ReactNode;
  defaultProduct?: 'small' | 'medium' | 'large' | 'enterprise';
  defaultDuration?: 'monthly' | 'yearly';
}

export function ContactForm({
  isOpen,
  onOpenChange,
  trigger,
  defaultProduct = 'small',
  defaultDuration = 'monthly',
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string || "",
      email: formData.get("email") as string || "",
      phone_code: formData.get("code") as string || "",
      timestamp: new Date().toLocaleString(),
      phone: formData.get("phone") as string || "",
      company: formData.get("company") as string || "",
      product: (formData.get("product") as string || "").toUpperCase(),
      duration: (formData.get("duration") as string || "").toUpperCase(),
      message: formData.get("message") as string || "",
    };
    

    try {
      const result = await emailjs.send(
        "service_1o171qw",
        "template_ycujywy",
        data,
        "4vJxW8L8LdNUViO9U"
      );
      console.log("Email sent:", result.text);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[500px] p-6 bg-white">
        <DialogHeader className="relative mb-4">
          <DialogTitle className="text-2xl font-bold text-center text-gray-800">
            Get in Touch
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input name="name" placeholder="Name*" required />
            <Input name="email" type="email" placeholder="Email Id*" required />
          </div>

          <div className="flex gap-4">
            <Select name="code" defaultValue="+91">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Code" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+91">🇮🇳 +91</SelectItem>
                <SelectItem value="+1">🇺🇸 +1</SelectItem>
                <SelectItem value="+44">🇬🇧 +44</SelectItem>
              </SelectContent>
            </Select>
            <Input
              name="phone"
              type="tel"
              placeholder="Phone*"
              className="flex-1"
              required
            />
          </div>

          <Input name="company" placeholder="Company Name*" required />

          <div className="grid grid-cols-2 gap-4">
            <Select name="product" defaultValue={defaultProduct} required>
              <SelectTrigger>
                <SelectValue placeholder="Product Type*" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small Hotels</SelectItem>
                <SelectItem value="medium">Mid Sized Hotels</SelectItem>
                <SelectItem value="large">Large Hotels</SelectItem>
                <SelectItem value="enterprise">Enterprise Hotels</SelectItem>
              </SelectContent>
            </Select>

            <Select name="duration" defaultValue={defaultDuration} required>
              <SelectTrigger>
                <SelectValue placeholder="Billing Period*" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Textarea name="message" placeholder="Message*" className="min-h-[80px]" required />

          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>

          <div className="pt-4 border-t">
            <h3 className="text-base font-medium text-gray-900 mb-3 text-center">
              Or Contact Us Directly
            </h3>
            <div className="space-y-3">
              {[
                {
                  name: "Binit Gupta",
                  role: "CEO",
                  initials: "BG",
                  phone: "8920796562",
                  email: "ceo@quickgick.in",
                },
                {
                  name: "Devansh Kumar Padhi",
                  role: "CMO",
                  initials: "DP",
                  phone: "8860701320",
                  email: "cmo@quickgick.in",
                },
              ].map((contact) => (
                <div
                  key={contact.role}
                  className="flex items-center gap-3 p-2 rounded-lg border bg-gray-50"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <span className="text-sm text-orange-600 font-medium">
                      {contact.initials}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {contact.name}{" "}
                      <span className="text-gray-500">({contact.role})</span>
                    </p>
                    <div className="flex gap-3 text-sm text-gray-600">
                      <a
                        href={`tel:+91${contact.phone}`}
                        className="flex items-center gap-1 hover:text-orange-600"
                      >
                        <Phone className="h-3 w-3" /> +91 {contact.phone}
                      </a>
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-1 hover:text-orange-600"
                      >
                        <Mail className="h-3 w-3" /> {contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

