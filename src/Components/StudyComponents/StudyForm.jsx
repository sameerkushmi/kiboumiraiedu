import { useContext, useState } from "react";
import {
  Phone,
  Mail,
  Globe,
  User,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { languageData } from "../../Hooks/language";
import { LanguageContext } from "../../Context/Context";

export default function StudyForm() {

  const {language} = useContext(LanguageContext)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    preferredCountry: "",
    preferredUniversity: "",
    preferredCourse: "",
    degree: "",
    hasTakenTest: "",
    selectedTest: "",
    testScore: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*New Study Inquiry*

*Full Name:* ${formData.fullName || "Not provided"}
*Email:* ${formData.email || "Not provided"}
*Phone Number:* ${formData.phoneNumber || "Not provided"}
*Preferred Country:* ${formData.preferredCountry || "Not specified"}
*Preferred University:* ${formData.preferredUniversity || "Not specified"}
*Preferred University:* ${formData.preferredCourse || "Not specified"}
*Degree Level:* ${formData.degree || "Not specified"}
*Test Taken Before:* ${formData.hasTakenTest || "Not specified"}
${
  formData.hasTakenTest === "yes"
    ? `*Test Taken:* ${formData.selectedTest || "Not specified"}\n*Score:* ${
        formData.testScore || "Not provided"
      }`
    : formData.hasTakenTest === "no"
    ? `*Test Planning to Take:* ${formData.selectedTest || "Not selected"}`
    : ""
}
`.trim();

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8 mx-6 rounded-4xl my-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center text-slate-800 mb-8">
          <br /> 
          {
            language === 'en' ? languageData.en.fillOurtForm : languageData.jp.fillOurtForm
          }
        </h2>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          {/* Basic Info */}
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
                  placeholder={language === 'en' ? languageData.en.enterEmail : languageData.jp.enterEmail}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                />
              </div>
            </div>
          </div>

          {/* Country & University */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Preferred Country */}
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

            <div>
              <label className="block text-slate-700 font-medium mb-2">
                {
                  language === 'en' ? languageData.en.preferredCountry : languageData.jp.preferredCountry
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
                      language === 'en' ? languageData.en.selectYourCountry : languageData.jp.selectYourCountry
                    }
                  </option>
                  <option value="Australia">
                    {
                      language === 'en' ? languageData.en.australia : languageData.jp.australia
                    }
                  </option>
                  <option value="USA">
                    {
                      language === 'en' ? languageData.en.usa : languageData.jp.usa
                    }
                  </option>
                  <option value="UK">
                    {
                      language === 'en' ? languageData.en.uk : languageData.jp.uk
                    }
                  </option>
                  <option value="Canada">
                    {
                      language === 'en' ? languageData.en.canada : languageData.jp.canada
                    }
                  </option>
                  <option value="Japan">
                    {
                      language === 'en' ? languageData.en.japan : languageData.jp.japan
                    }
                  </option>
                  <option value="Korea">
                    {
                      language === 'en' ? languageData.en.korea : languageData.jp.korea
                    }
                  </option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Preferred University */}
          </div>

          {/* Degree & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                {
                  language === 'en' ? languageData.en.preferredUniversity : languageData.jp.preferredUniversity
                }
              </label>
              <input
                type="text"
                name="preferredUniversity"
                value={formData.preferredUniversity}
                onChange={handleInputChange}
                placeholder={language === 'en' ? languageData.en.enterPreferredUniversity : languageData.jp.enterPreferredUniversity}
                className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                {
                  language === 'en' ? languageData.en.furtherDegree : languageData.jp.furtherDegree
                }
              </label>
              <select
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
              >
                <option value="">
                {
                  language === 'en' ? languageData.en.selectDegree : languageData.jp.selectDegree
                }  
                ...</option>
                <option value="Bachelors">
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
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                {
                  language === 'en' ? languageData.en.preferredCourseStream : languageData.jp.preferredCourseStream
                }
              </label>
              <input
                type="text"
                name="preferredCourse"
                value={formData.preferredCourse}
                onChange={handleInputChange}
                placeholder={language === 'en' ? languageData.en.enterpreferredCourseStream : languageData.jp.enterpreferredCourseStream}
                className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
              />
            </div>
          </div>

          {/* Test Section */}
          <div className="mb-6">
            <label className="block text-slate-700 font-medium mb-3">
             {
              language === 'en' ? languageData.en.haveYouTakenTestBefore : languageData.jp.haveYouTakenTestBefore
             }
            </label>
            <div className="flex gap-6 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="hasTakenTest"
                  value="yes"
                  checked={formData.hasTakenTest === "yes"}
                  onChange={handleInputChange}
                />
                {
                  language === 'en' ? languageData.en.yes : languageData.jp.yes
                }
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="hasTakenTest"
                  value="no"
                  checked={formData.hasTakenTest === "no"}
                  onChange={handleInputChange}
                />
                {
                  language === 'en' ? languageData.en.no : languageData.jp.no
                }
              </label>
            </div>

            {/* If taken */}
            {formData.hasTakenTest === "yes" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Tests Taken */}
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    {
                      language === 'en' ? languageData.en.testTaken : languageData.jp.testTaken
                    }
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {["IELTS", "PTE", "TOEFL", "SAT", "JLPT"].map((test) => (
                      <label key={test} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="selectedTest"
                          value={test}
                          checked={formData.selectedTest === test}
                          onChange={handleInputChange}
                        />
                        {test}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Score */}
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    {
                      language === 'en' ? languageData.en.yourScore : languageData.jp.yourScore
                    }
                  </label>
                  <input
                    type="text"
                    name="testScore"
                    value={formData.testScore}
                    onChange={handleInputChange}
                    placeholder={language === 'en' ? languageData.en.enterYourScore : languageData.jp.enterYourScore}
                    className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                  />
                </div>
              </div>
            )}

            {/* If not taken */}
            {formData.hasTakenTest === "no" && (
              <div className="mt-4">
                <label className="block text-slate-700 font-medium mb-2">
                  {
                    language === 'en' ? languageData.en.whichTestYouplanTake : languageData.jp.whichTestYouplanTake
                  }
                </label>
                <div className="flex flex-wrap gap-4">
                  {["IELTS", "PTE", "TOEFL", "SAT", "JLPT"].map((test) => (
                    <label key={test} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="selectedTest"
                        value={test}
                        checked={formData.selectedTest === test}
                        onChange={handleInputChange}
                      />
                      {test}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-8">
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
