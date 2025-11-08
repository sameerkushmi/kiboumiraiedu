import { useState } from "react";
import {
    Phone,
    Mail,
    User,
    ArrowRight,
    User2,
    User2Icon,
    Book,
} from "lucide-react";

export default function CourseForm() {
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
                    Computer Training Form
                </h2>

                <div className="bg-white rounded-lg p-8 shadow-sm">
                    {/* Basic Info */}
                    {/* 1 row */}
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
                    {/* 2 row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Phone */}
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
                        {/* Age */}
                        <div>
                            <label className="block text-slate-700 font-medium mb-2">
                                Age
                            </label>
                            <div className="relative">
                                <User2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    placeholder="Enter your Age here..."
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
                                Gender
                            </label>
                            <div className="relative">
                                <User2Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <select defaultValue={formData.gender} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                        </div>
                        {/* select course */}
                        <div>
                            <label className="block text-slate-700 font-medium mb-2">
                                Gender
                            </label>
                            <div className="relative">
                                <Book className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <select onChange={handleInputChange} defaultValue={formData.course} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700">
                                    <option value="basic course">Basic Course</option>
                                    <option value="advance office package">Advance Office Package</option>
                                    <option value="accounting training">Accounting Training</option>
                                    <option value="graphic gesign">Graphic Design</option>
                                    <option value="advance diploma">Advance Diploma</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Additional Message / Description */}
                    <div className="mb-6">
                        <label className="block text-slate-700 font-medium mb-2">
                            Additional Message
                        </label>
                        <textarea
                            name="additionalMessage"
                            value={formData.additionalMessage || ""}
                            onChange={handleInputChange}
                            placeholder="Enter any additional details or questions..."
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
                            Submit Form
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
