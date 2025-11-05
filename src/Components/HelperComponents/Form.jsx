import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Form() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="relative z-50">
        {/* Desktop Button - Minimal */}
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.95 }}
          className="bg-text text-white font-extrabold fixed left-0 top-1/3 hidden md:flex items-center gap-1 rounded-r-full shadow-lg transition-all cursor-pointer group"
        >
          <div className="px-4 py-3 text-sm font-medium tracking-wide">
            Reach Us Out
          </div>
          <ChevronRight
            className="mr-2  group-hover:scale-105 transition-transform"
            size={18}
          />
        </motion.button>

        {/* Mobile Button */}
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="bg-text fixed left-0 top-1/3 flex md:hidden items-center justify-center rounded-r-xl text-white shadow-2xl transition-all cursor-pointer border-r-4 border-red-700 hover:shadow-red-500/50"
        >
          <div className="px-3 py-4">
            <ChevronRight size={24} />
          </div>
        </motion.button>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col"
            >
              <div className="flex flex-col md:flex-row overflow-hidden h-full">
                {/* Left Side - QR Code Section */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="relative md:w-2/5 flex flex-col items-center justify-center flex-shrink-0 overflow-hidden"
                >
                  {/* Background Image with Dark Overlay */}
                  <div className="absolute inset-0">
                    <img
                      src="Uploads/home/one.jpeg"
                      alt="Background"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-red-900/50"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center h-full">
                    <motion.h3
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center drop-shadow-lg"
                    >
                      Connect With Us
                    </motion.h3>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="bg-white p-4 sm:p-5 rounded-xl shadow-2xl mb-4 md:mb-6 backdrop-blur-sm"
                    >
                      <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                        {/* QR Code Placeholder */}
                        <img
                          src="Uploads/home/qr.png"
                          alt="QR Code"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      className="text-xs sm:text-sm text-white/90 text-center drop-shadow-md px-4"
                    >
                      Scan to connect with us instantly
                    </motion.p>
                  </div>
                </motion.div>

                {/* Right Side - Form Section */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="p-4 sm:p-6 md:p-8 md:w-3/5 overflow-y-auto flex-1"
                >
                  <div className="flex justify-between items-center mb-4 md:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                      Get In Touch
                    </h2>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl font-bold leading-none"
                    >
                      ×
                    </motion.button>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                        placeholder="Your full name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35, duration: 0.3 }}
                    >
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                    >
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                        placeholder="Your phone number"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45, duration: 0.3 }}
                    >
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </motion.div>

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 40px rgba(239, 68, 68, 0.4)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSubmit}
                      className="w-full bg-text text-white py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-bold hover:from-red-700 hover:to-red-600 transition-all shadow-lg hover:shadow-red-500/50"
                    >
                      Send Message
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
