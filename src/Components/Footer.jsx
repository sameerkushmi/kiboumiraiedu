import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { BsTiktok, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section>
        <div className="h-[50vh] m-6">
          <img
            src="/Uploads/home/hero.avif"
            alt=""
            className="h-full w-full object-cover rounded-4xl shadow-xl"
          />
        </div>
        <footer className="m-6 bg-[#F3E9DC] bg-gadient-to-br from-red-50 to-red-100   rounded-4xl shadow-xl overflow-hidden">
          <div className="px-8 py-12 md:px-12 lg:px-16">
            {/* Top Section - Logo and Social Media */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-[#7B542F]">
                  KMB Education
                </h2>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <BsWhatsapp size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <BsTiktok size={20} />
                </a>
              </div>
            </div>

            {/* Horizontal Line */}
            <hr className="border-gray-300 mb-10" />

            {/* Main Footer Content - 4 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              {/* Column 1 - Description */}
              <div>
                <p className="text-[#7B542F] text-base md:text-md  leading-relaxed">
                  KMB Education is dedicated to providing quality education and
                  training programs that prepare students for successful careers
                  in their chosen fields. We believe in nurturing talent and
                  fostering growth.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-md text-[#7B542F]">
                    <Mail size={16} className="text-red-500" />
                    <span>info@kmbeducation.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#7B542F]">
                    <Phone size={16} className="text-red-500" />
                    <span>+977 1-XXXXXXX</span>
                  </div>
                </div>
              </div>

              {/* Column 2 - Quick Links */}
              <div>
                <h3 className="text-lg font-extrabold text-[#7B542F] mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-[#7B542F] text-sm  transition-colors duration-200"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#7B542F] text-sm  transition-colors duration-200"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#7B542F] text-sm  transition-colors duration-200"
                    >
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#7B542F] text-sm  transition-colors duration-200"
                    >
                      Programs
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-[#7B542F] text-sm  transition-colors duration-200"
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3 - Support */}
              <div>
                <h3 className="text-lg font-semibold text-[#7B542F] mb-4">
                  Support
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-[#7B542F] text-sm  transition-colors duration-200"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#7B542F] text-sm  transition-colors duration-200"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#7B542F] text-sm  transition-colors duration-200"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#7B542F] text-sm  transition-colors duration-200"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4 - QR Code */}
              <div>
                <div className="bg-white p-4 rounded-2xl shadow-md">
                  <div className="text-center p-4">
                    <span className="text-white text-xs font-semibold">
                      <img src="/Uploads/home/qr.png" alt="" />
                    </span>
                    <p className="text-xs text-gray-500 mt-2">
                      Scan to connect
                    </p>
                  </div>
                  <p className="text-xs text-center text-gray-700 leading-relaxed">
                    Leave us your details and our team will connect with you
                  </p>
                </div>
              </div>
            </div>

            {/* Horizontal Line */}
            <hr className="border-gray-300 mb-6" />

            {/* Bottom Section - Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 mb-4 md:mb-0">
                © {new Date().getFullYear()} KMB Education. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
