import { useState,useContext } from "react";
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
import { LanguageContext } from "../../../Context/Context";
import { languageData } from "../../../Hooks/language";

export default function AusForm() {

  const {language} = useContext(LanguageContext);

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
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Baneshwor,+Kathmandu",
      "_blank"
    );
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
        {/* Divider */}
        {/* <div className="flex items-center">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-4 text-3xl text-gray-500 font-semibold">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div> */}

        <h2 className="text-4xl md:text-6xl font-extrabold text-center text-slate-800 mb-8">
          <br /> 
          {
            language === 'en' ? languageData.en.fillOurtForm : languageData.jp.fillOurtForm
          }
        </h2>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Full Name */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                {
                  language === 'en' ? languageData.en.fullName : languageData.jp.fullName
                }
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder={language === 'en' ? languageData.en.enterFullName : languageData.jp.enterFullName}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                {
                  language === 'en' ? languageData.en.email : languageData.jp.email
                }
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={language === 'en' ? languageData.en.enterYourEmail : languageData.jp.enterYourEmail }
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Preferred Country */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                {
                  language === 'en' ? languageData.en.preferredUniversity : languageData.jp.preferredUniversity 
                }
              </label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                  name="preferredCountry"
                  value={formData.preferredCountry}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                >
                  <option value="">
                    {
                      language === 'en' ? languageData.en.selectYourUniversity : languageData.jp.selectYourUniversity
                    }
                  </option>
                  <option value="CIHE">
                    {language === 'en' ? languageData.en.CIHE : languageData.jp.CIHE}
                  </option>
                  <option value="Monash Univeristy">
                    {
                      language === 'en' ? languageData.en.monashUniversity : languageData.jp.monashUniversity 
                    }
                  </option>
                  <option value="University of Tasmania">
                   {
                    language === 'en' ? languageData.en.universityTasmania : languageData.jp.universityTasmania
                   }
                  </option>
                  <option value="The Univesity of Sydeny">
                    {
                      language === 'en' ? languageData.en.universitySydney : languageData.jp.universitySydney
                    }
                  </option>
                  <option value="The Univesity of Melbourne">
                    {
                      language === 'en' ? languageData.en.univesityMelbourne : languageData.jp.universityMelbourne
                    }
                  </option>
                  <option value="Other">
                    {
                      language === 'en' ? languageData.en.other : languageData.jp.other
                    }
                  </option>
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
                  placeholder="Enter your preferred university..."
                  className="mt-3 w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                />
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
               {
                language === 'en' ? languageData.en.phone : languageData.jp.phone
               }
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder={language === 'en' ? languageData.en.enterYourPhone : languageData.jp.enterYourPhone}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Description Dropdown */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                {language === 'en' ? languageData.en.furtherDegree : languageData.jp.description}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                >
                  <option value="">
                    {
                      language === 'en' ? languageData.en.chooseOption : languageData.jp.chooseOption
                    }
                  </option>
                  <option value="Bachleros">
                    {
                      language === 'en' ? languageData.en.bachelors : languageData.jp.bachelors
                    }
                  </option>
                  <option value="Diploma">
                    {
                      language === 'en' ? languageData.en.diploma : languageData.jp.diploma
                    }
                  </option>
                  <option value="Masters">
                    {
                      language === 'en' ? languageData.en.masters : languageData.jp.masters
                    }
                  </option>
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
              {
                language === 'en' ? languageData.en.message : languageData.jp.message
              }
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={language === 'en' ? languageData.en.enterYourMessage : languageData.jp.enterYourMessage}
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
              {
                language === 'en' ? languageData.en.submitForm : languageData.jp.submitForm
              }
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
