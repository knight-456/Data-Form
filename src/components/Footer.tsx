"use client";

import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">LMS</h3>
          <p className="text-gray-400">
            Your partner in online learning. We provide high-quality courses to
            help you achieve your goals.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-400">
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Courses
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400 transition-colors">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Facebook />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        <p>&copy; 2024 LMS. All rights reserved.</p>
      </div>
    </footer>
  );
}
