import { useContext, useState } from "react";
import {
    Phone,
    Mail,
    User,
    ArrowRight,
    User2,
    User2Icon,
    Book,
} from "lucide-react";
import { languageData } from "../../../../Hooks/language";
import { LanguageContext } from "../../../../Context/Context";

export default function CourseForm() {

    const {language} = useContext(LanguageContext)

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        age: "",
        gender: "male",
        additionalMessage: "",
        course: "basic course"
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
                *Age:* ${formData.age || "Not provided"}
                *Gender:* ${formData.gender || "Not provided"}
                *Course:* ${formData.course || "Not provided"}
                *Additional Message:* ${formData.additionalMessage || "No message provided"}
                `.trim();
        
        const encodedText = encodeURIComponent(message)
        const Mobilenumber = '+9779769774665'

        const whatsappUrl = `https://wa.me/${Mobilenumber}?text=${encodedText}`;
        window.open(whatsappUrl, "_blank");
        setFormData({
            fullName: "",
            email: "",
            phoneNumber: "",
            age: "",
            gender: "male",
            additionalMessage: "",
            course: "basic course"
        })
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8 mx-6 rounded-4xl my-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-extrabold text-center text-slate-800 mb-8">
                    {
                        language === 'en' ? languageData.en.computerTrainingForm : languageData.jp.computerTrainingForm
                    }
                </h2>

                <div className="bg-white rounded-lg p-8 shadow-sm">
                    {/* Basic Info */}
                    {/* 1 row */}
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
                                    placeholder={language === 'en' ? languageData.en.enterYourEmail: languageData.jp.emailAddress}
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                                />
                            </div>
                        </div>
                    </div>
                    {/* 2 row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Phone */}
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
                        {/* Age */}
                        <div>
                            <label className="block text-slate-700 font-medium mb-2">
                               {
                                language === 'en' ? languageData.en.age : languageData.jp.age
                               }
                            </label>
                            <div className="relative">
                                <User2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    placeholder={language === 'en' ? languageData.en.enterYourAge : languageData.jp.enterYourAge}
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700"
                                />
                            </div>
                        </div>
                    </div>
                    {/* 3 row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Gender */}
                        <div>
                            <label className="block text-slate-700 font-medium mb-2">
                                {
                                    language === 'en' ? languageData.en.gender : languageData.jp.gender
                                }
                            </label>
                            <div className="relative">
                                <User2Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <select defaultValue={formData.gender} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700">
                                    <option value="male">
                                        {
                                            language === 'en' ? languageData.en.male : languageData.jp.male
                                        }
                                    </option>
                                    <option value="female">
                                        {
                                            language === 'en' ? languageData.en.female : languageData.jp.female
                                        }
                                    </option>
                                    <option value="others">
                                        {
                                            language === 'en' ? languageData.en.other : languageData.jp.other
                                        }
                                    </option>
                                </select>
                            </div>
                        </div>
                        {/* select course */}
                        <div>
                            <label className="block text-slate-700 font-medium mb-2">
                                {
                                    language === 'en' ? languageData.en.courses : languageData.jp.courses
                                }
                            </label>
                            <div className="relative">
                                <Book className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <select onChange={handleInputChange} defaultValue={formData.course} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700">
                                    <option value="basic course">
                                        {
                                            language === 'en' ? languageData.en.basicCourse : languageData.jp.basicCourse
                                        }
                                    </option>
                                    <option value="advance office package">
                                        {
                                            language === 'en' ? languageData.en.advanceOfficePackage : languageData.jp.advanceOfficePackage
                                        }
                                    </option>
                                    <option value="accounting training">
                                        {
                                            language === 'en' ? languageData.en.accountingTraining : languageData.jp.advanceOfficePackage
                                        }
                                    </option>
                                    <option value="graphic gesign">
                                        {
                                            language === 'en' ? languageData.en.graphicDesign : languageData.jp.graphicDesign
                                        }
                                    </option>
                                    <option value="advance diploma">
                                        {
                                            language === 'en' ? languageData.en.advanceDiploma : languageData.jp.advanceDiploma
                                        }
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Additional Message / Description */}
                    <div className="mb-6">
                        <label className="block text-slate-700 font-medium mb-2">
                            {
                                language === 'en' ? languageData.en.additionalMessage : languageData.jp.additionalMessage
                            }
                        </label>
                        <textarea
                            name="additionalMessage"
                            value={formData.additionalMessage || ""}
                            onChange={handleInputChange}
                            placeholder={language === 'en' ? languageData.en.additionalQue : languageData.jp.additionalQue}
                            rows="5"
                            className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700 resize-none"
                        ></textarea>
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
