'use client'

import Link from "next/link";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-orange-900 to-orange-950 text-orange-100 py-16 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20stroke%3D%22%23f97316%22%20stroke-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%2016h32M16%200v32%22%2F%3E%3C%2Fsvg%3E')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-orange-300">About BiteCart</h3>
            <p className="text-sm leading-relaxed">  
BiteCart simplifies hotel services with a smart QR-based platform for dining, laundry, cabs, spa, and more. Streamline operations and enhance guest experiences effortlessly.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-orange-300">Quick Links</h3>
            <ul className="space-y-2">
              {['features', 'how-it-works', 'pricing', 'faq'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-sm hover:text-orange-300 transition-colors duration-300 ease-in-out"
                  >
                    {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-orange-300">Contact Us</h3>
            <Link
              href="mailto:founders@bitecart.in"
              className="text-sm hover:text-orange-300 transition-colors duration-300 ease-in-out block"
            >
              founders@bitecart.in
            </Link>
            <p className="text-sm leading-relaxed">
              Binit Gupta (CEO) : +91 89207 96562
              <br />
              Devansh Kumar Padhi (CMO) : +91 88607 01320
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-orange-300">Follow Us</h3>
            <div className="flex gap-6 items-center">
              {[
                { href: "https://www.youtube.com/@Quickgick", Icon: FiYoutube, label: "YouTube" },
                { href: "https://www.instagram.com/quickgick", Icon: FaInstagram, label: "Instagram" },
                { href: "https://www.linkedin.com/company/quick-gick/", Icon: FaLinkedin, label: "LinkedIn" }
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${label} page`}
                  className="p-2 bg-orange-800 rounded-full hover:bg-orange-700 transition-all duration-300 ease-in-out transform hover:scale-110"
                >
                  <Icon size={24} className="text-orange-100" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-orange-800/50 text-center">
          <p className="text-sm text-orange-200">&copy; 2024 BiteCart. All rights reserved. | Powered by Brevity Technologies Private Limited</p>
        </div>
      </div>
    </footer>
  );
}

