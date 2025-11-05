import React from "react";
import {
  Globe2,
  FileCheck,
  MessageCircle,
  ShieldCheck,
  Clock,
  UserCheck,
} from "lucide-react";

export default function VisaWhyUs() {
  const reasons = [
    {
      title: "Expert Visa Consultants",
      description:
        "Our experienced visa advisors handle all the technicalities, from document preparation to interview guidance, ensuring smooth approvals.",
      icon: UserCheck,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Country-Specific Guidance",
      description:
        "We specialize in Japan, USA, UK, Canada, and Australia visa systems — tailoring our process according to each country's unique regulations.",
      icon: Globe2,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Error-Free Documentation",
      description:
        "Avoid costly rejections with our double-verification process that ensures every form, document, and signature meets embassy standards.",
      icon: FileCheck,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "End-to-End Support",
      description:
        "From filling visa applications to scheduling appointments and follow-ups, we assist you at every step until approval.",
      icon: MessageCircle,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Secure and Confidential",
      description:
        "We prioritize your privacy — all sensitive documents and personal data are stored and handled securely.",
      icon: ShieldCheck,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Timely Processing",
      description:
        "Our streamlined system ensures you meet all embassy deadlines, avoiding delays in your admission or travel plan.",
      icon: Clock,
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="px-6 py-16  mx-6 bg-gray-100 rounded-3xl relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-10 blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Why Choose Our Visa Assistance?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We simplify your visa journey with transparent processes, accurate
            documentation, and dedicated guidance from start to finish.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 group hover:-translate-y-2"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6  transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
