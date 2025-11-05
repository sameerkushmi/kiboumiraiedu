import React, { useState } from "react";

export default function HomeContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    query: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, query, message } = formData;
    const whatsappNumber = "9779812345678";
    const text = `Hello! 👋%0AMy name is ${name}.%0AEmail: ${email}%0AQuery Type: ${query}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="m-6 py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 rounded-3xl relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Uploads/home/hero.avif')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="space-y-8 text-white">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Let's Start a<span className="block text">Conversation</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Have a question or project in mind? We'd love to hear from you.
            Reach out and let's create something amazing together.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center  transition-all">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className=" font-semibold">+977 9860904663</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center  transition-all">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-gray-200">kbmedu.com@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center transition-all">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-gray-200">
                  Balaju Ring Rd, Nabil Bank Building (4th Floor), Kathmandu
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
          <div className="space-y-5">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Number
              </label>
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="98******"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Inquiry Type
              </label>
              <select
                name="query"
                value={formData.query}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="">Select an option</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Visa Processing">Visa Processing</option>
                <option value="Class Inquiry">Class Inquiry</option>
                <option value="Tests & Interview preparation">
                  Tests & Interview Prep
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or inquiry..."
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-text text-white font-semibold py-3.5 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Send via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
