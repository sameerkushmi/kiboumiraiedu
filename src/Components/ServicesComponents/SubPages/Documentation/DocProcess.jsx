import React from "react";
import {
  FileCheck,
  Search,
  Languages,
  Send,
  CheckSquare,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DocProcess() {
  const steps = [
    {
      title: "Document Checklist Creation",
      description:
        "We create a personalized checklist based on your target country, university, and visa type so you know exactly which documents are required.",
      icon: FileCheck,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Verification & Formatting",
      description:
        "Our team verifies transcripts, certificates and financial proofs, then formats them according to embassy and university standards.",
      icon: Search,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Translation & Notarization (If Needed)",
      description:
        "We arrange certified translations and notarizations where required, and advise on attestation or apostille processes for specific countries.",
      icon: Languages,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Submission Preparation",
      description:
        "We prepare files for online submission or physical courier—naming, scanning, and packaging documents to avoid rejection due to format errors.",
      icon: Send,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Final Cross-check",
      description:
        "Before submission we perform a final cross-check (signatures, dates, seals) and provide a pre-submission summary so nothing is missed.",
      icon: CheckSquare,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="relative px-6 py-20 my-16 mx-6 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 rounded-3xl overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-10 blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 rounded-full opacity-10 blur-3xl translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-200 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our Documentation Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A clear, step-by-step workflow designed to make your documentation
            accurate, compliant, and submission-ready with zero hassle.
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Horizontal connecting line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 mx-20"></div>

          <div className="grid grid-cols-5 gap-8 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 group hover:-translate-y-2">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Step number */}
                    <div className="text-center mb-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-bold text-sm">
                        {idx + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-center leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline - Tablet */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 group">
                    {/* Icon and number */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-bold text-sm flex-shrink-0">
                        {idx + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="md:hidden space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative pl-16">
                {/* Vertical line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                )}

                {/* Icon circle */}
                <div
                  className={`absolute left-0 top-0 w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-700 font-bold text-sm">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 leading-snug flex-1">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Want us to prepare a personalized checklist for your specific
                application? Get expert guidance on your documentation journey
                today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Connect With Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
