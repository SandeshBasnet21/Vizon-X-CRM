import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-[#0B1220] to-[#0A1020] text-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-16 ">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                K
              </div>
              <span className="text-xl font-semibold text-white">
                Karyavaar
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              The All-in-One CRM designed specifically for Education & Visa
              Consultancies. Manage leads, clients, and team tasks from one
              powerful dashboard.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-5">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                support@karyavaar.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} />
                +1 (555) 000-0000
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5" />
                <span>
                  123 Business Ave, Suite 100
                  <br />
                  San Francisco, CA 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2024 Karyavaar. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
