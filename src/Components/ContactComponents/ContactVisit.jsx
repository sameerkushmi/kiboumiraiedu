import { Mail, MapPin, Phone, Navigation, Check } from "lucide-react";
import React, { useState } from "react";

export default function ContactVisit() {
  const [isMapInteractive, setIsMapInteractive] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyPhoneToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("+977 9860904663");
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy phone number: ", err);
    }
  };

  return (
    <section className="mx-4 md:mx-6">
      {/* Mobile/Tablet Layout (Grid Stack) */}
      <div className="lg:hidden grid grid-rows-[400px_auto] gap-4 rounded-3xl overflow-hidden">
        {/* Map Section - Top */}

        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/emed?pb=!1m18!1m12!1m3!1d3531.450795213801!2d85.30511729999999!3d27.7342385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18db6f968aa1%3A0x2e4210f46b8a264b!2sNabil%20Bank%20Limited!5e0!3m2!1sen!2snp!4v1761476957542!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
            title="Office Location Map"
          ></iframe>
        </div>

        {/* Content Section - Bottom */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Visit Our Office
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            We're located in the heart of Kathmandu — feel free to visit us for
            counseling, queries, or collaboration. Our team is always happy to
            assist you.
          </p>

          {/* Contact Information */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 group">
              <div className="bg-blue-600 p-2.5 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                {phoneCopied ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <Phone className="w-5 h-5 text-white" />
                )}
              </div>
              <button
                onClick={copyPhoneToClipboard}
                className="text-base text-white hover:text-blue-300 transition-colors cursor-pointer"
              >
                {phoneCopied ? "Copied!" : "+977 9860904663"}
              </button>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="bg-blue-600 p-2.5 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <a
                href="mailto:kbmedu.com@gmail.com"
                className="text-base text-white hover:text-blue-300 transition-colors"
              >
                kbmedu.com@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="bg-blue-600 p-2.5 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-base text-white">
                Balaju Ring Rd, Nabil Bank Building (4th Floor), Kathmandu
              </span>
            </div>
          </div>

          {/* Navigate Button */}
          <a
            href="https://maps.app.goo.gl/zTpmQK9rrtn4JbJD9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>

      {/* Desktop Layout (Side by Side with Interactive Map) */}
      <div className="hidden lg:block relative rounded-3xl overflow-hidden min-h-[75vh]">
        {/* Background Map */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.450795213801!2d85.30511729999999!3d27.7342385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18db6f968aa1%3A0x2e4210f46b8a264b!2sNabil%20Bank%20Limited!5e0!3m2!1sen!2snp!4v1761477248027!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{
              border: 0,
              pointerEvents: isMapInteractive ? "auto" : "none",
            }}
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
            title="Office Location Map"
          ></iframe>
        </div>

        {/* Overlay - Click to enable map interaction */}
        {!isMapInteractive && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 backdrop-blur-sm cursor-pointer group transition-all duration-300"
            onClick={() => setIsMapInteractive(true)}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 flex items-center gap-3">
                <Navigation className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">
                  Click to interact with map
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Disable Map Interaction Button */}
        {isMapInteractive && (
          <button
            onClick={() => setIsMapInteractive(false)}
            className="absolute top-6 right-6 z-20 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <span>Exit Map</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {/* Left Side Content */}
        <div
          className={`relative z-10 max-w-xl px-12 xl:px-16 py-8 flex items-center min-h-[75vh] transition-all duration-300 ${
            isMapInteractive ? "pointer-events-none opacity-50" : ""
          }`}
        >
          {/* Content Card */}
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 text-white">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              We're located in the heart of Kathmandu — feel free to visit us
              for counseling, queries, or collaboration. Our team is always
              happy to assist you.
            </p>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 group">
                <div className="bg-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {phoneCopied ? (
                    <Check className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Phone className="w-5 h-5 text-blue-600" />
                  )}
                </div>
                <button
                  onClick={copyPhoneToClipboard}
                  className="text-lg text-white hover:text-blue-300 transition-colors cursor-pointer"
                >
                  {phoneCopied ? "Copied!" : "+977 9818739823"}
                </button>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <a
                  href="mailto:kbmedu.com@gmail.com"
                  className="text-lg text-white hover:text-blue-300 transition-colors"
                >
                  kbmedu.com@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-lg text-white">
                  Balaju Ring Rd, Nabil Bank Building (4th Floor), Kathmandu
                </span>
              </div>
            </div>

            {/* Navigate Button */}
            <div className="flex flex-col xl:flex-row gap-3">
              <a
                href="https://maps.app.goo.gl/TBM11zCkhzZoptjHA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={() => setIsMapInteractive(true)}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-xl border border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                <span>Explore Map</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
