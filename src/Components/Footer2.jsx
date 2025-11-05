import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { BsTiktok, BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Footer2() {
  return (
    <>
      <section className="m-6 md:h-[120vh] bgwhite rounded-4xl ">
        {/* Upper Section */}
        <div className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] rounded-t-4xl overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center md:bg-left"
            style={{
              backgroundImage: "url('/Uploads/home/hero3.jpg')",
              zIndex: 0,
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 sm:px-10 lg:px-20 py-16 md:py-24 space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide">
              KBM
            </h1>
            <p className="text-xl sm:text-2xl md:text-4xl font-semibold opacity-80">
              Education Consultancy
            </p>
            <p className="max-w-3xl md:max-w-4xl text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
              KBM Education Consultancy is dedicated to helping students achieve
              their global education dreams. From career counseling and
              university selection to visa guidance and pre-departure support,
              we ensure every step of your study abroad journey is smooth and
              successful.
            </p>

            {/* Button and QR Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6">
              <Link to="/contact">
                <button className="px-6 sm:px-8 py-2 sm:py-3 bg-text text-white font-semibold rounded-full hover:scale-105 transition duration-300 shadow-md">
                  Let’s Connect
                </button>
              </Link>
              |{/* QR Code Area */}
              <div className="flex flex-col items-center ">
                <img
                  src="/Uploads/home/qr.png"
                  alt="QR Code"
                  className="w-20 h-20 bg-white sm:w-24 sm:h-24 rounded-lg shadow-lg border border-white/30"
                />
                <p className="text-xs opacity-80 mt-2">Scan to Connect</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-white border-t-4 border-b-4 bg-[#F4E9DC] text-[#7A542F] rounded-b-4xl overflow-hidden ">
          {/* Column 1 */}
          <div className="flex flex-col justify-between p-8 min-h-[40vh] border-b md:border-r border-white ">
            <h2 className="text-2xl font-semibold mb-4">Index</h2>
            <ul className="space-y-2 text-md font-medium">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/services">OUR SERVICES</Link>
              </li>
              <li>
                <Link to="/gallery">GALLERY</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-between p-8 min-h-[40vh] border-b md:border-r border-white ">
            <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
            <ul className="space-y-2 text-md font-medium">
              <li>
                <Link to="#">CONTACT US</Link>
              </li>
              <li>
                <Link to="#">JOIN US</Link>
              </li>
              <div className="flex items-center gap-4">
                <li>
                  <Link to="#">
                    <Facebook />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Instagram />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Linkedin />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaTiktok />
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col justify-between p-8 min-h-[40vh]">
            <h2 className="text-2xl font-semibold mb-4">Legal</h2>
            <ul className="space-y-2 textmd font-medium">
              <li>
                <Link to="#">PRIVACY POLICY</Link>
              </li>
              <li>
                <Link to="#">TERM & SERVICES</Link>
              </li>
              <p className=" font-light opacity-80 mt-4">
                ALL RIGHTS RESERVED. KBM EDUCATION CONSULTANCY ©2025
              </p>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
