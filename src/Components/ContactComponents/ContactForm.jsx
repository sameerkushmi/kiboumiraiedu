import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
  ChevronDown,
  ArrowRight,
  Globe,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    inquiryPurpose: "",
    description: "",
    fullName: "",
    email: "",
    preferredCountry: "",
    customCountry: "",
    phoneNumber: "",
    message: "",
  });
  const [copiedPhone, setCopiedPhone] = useState("");

  const handleCopyPhone = (phone) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(""), 2000);
  };

  const handleEmailClick = (email) => {
    window.open(`mailto:${email}`, "_blank");
  };

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/TBM11zCkhzZoptjHA", "_blank");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const country =
      formData.preferredCountry === "Other"
        ? formData.customCountry || "Not specified"
        : formData.preferredCountry || "Not specified";

    const message = `
*New Inquiry Submission*

*Inquiry Purpose:* ${formData.inquiryPurpose || "Not specified"}
*Description:* ${formData.description || "Not specified"}
*Full Name:* ${formData.fullName || "Not provided"}
*Email:* ${formData.email || "Not provided"}
*Preferred Country:* ${country}
*Phone Number:* ${formData.phoneNumber || "Not provided"}

*Message:*
${formData.message || "No message provided"}
    `.trim();

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8 mx-6 rounded-4xl my-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl text-center font-bold text-slate-800 mb-12">
          Let's Get In Touch
        </h1>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-slate-600" />
            </div>
            <button
              onClick={() => handleCopyPhone("+977 9860904663")}
              className="text-slate-600 hover:text-slate-800 transition-colors text-left block mb-2 w-full"
            >
              +977 9860904663
            </button>
            {copiedPhone && (
              <p className="text-xs text-green-600 mt-2">
                Copied to clipboard!
              </p>
            )}
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-slate-600" />
            </div>
            <button
              onClick={() => handleEmailClick("kbmedu.com@gmail.com")}
              className="text-slate-600 hover:text-slate-800 transition-colors text-left block mb-2 w-full"
            >
              kbmedu.com@gmail.com
            </button>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-slate-600" />
            </div>
            <button
              onClick={handleLocationClick}
              className="text-slate-600 hover:text-slate-800 transition-colors text-left block"
            >
              Balaju Ring Rd, Nabil Bank Building (4th Floor)
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-4 text-3xl text-gray-500 font-semibold">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
          <br /> Fill out the form below
        </h2>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Full Name */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Preferred Country */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Preferred Country
              </label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                  name="preferredCountry"
                  value={formData.preferredCountry}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                >
                  <option value="">Select your preferred country...</option>
                  <option value="Japan">Japan</option>
                  <option value="Australia">Australia</option>
                  <option value="UK">UK</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
              </div>

              {formData.preferredCountry === "Other" && (
                <input
                  type="text"
                  name="customCountry"
                  value={formData.customCountry}
                  onChange={handleInputChange}
                  placeholder="Enter your preferred country..."
                  className="mt-3 w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                />
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Inquiry Purpose Dropdown */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Inquiry Purpose<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="inquiryPurpose"
                  value={formData.inquiryPurpose}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                >
                  <option value="">Choose one option...</option>
                  <option value="Counselling">One-on-One Conunselling</option>
                  <option value="Course Inquiry">Course Inquiry</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Tests & Interview Preperation">
                    Tests & Interview Preperation
                  </option>
                  <option value="Visa Preperation">Visa Preperation</option>
                  <option value="Others">Others</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Description Dropdown */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Your further Degree<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                >
                  <option value="">Choose one option...</option>
                  <option value="Bachleros">Bachleros</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Masters">Masters</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-slate-700 font-medium mb-2">
              Message<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message here..."
                rows="6"
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="bg-slate-700 hover:bg-slate-800 text-white font-medium px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              Submit Form
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
