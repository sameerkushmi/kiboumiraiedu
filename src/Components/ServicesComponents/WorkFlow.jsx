import React from "react";
import { Link } from "react-router-dom";
import {
  UserCheck,
  BookOpen,
  GraduationCap,
  Globe2,
  FileCheck,
  MessageSquare,
  PlaneTakeoff,
  Languages,
  HelpingHand,
  Trophy,
  ClipboardCheck,
} from "lucide-react";

export default function WorkFlow() {
  const steps = [
    {
      title: "1-on-1 Personalized Consultation",
      description:
        "We start with a private consultation to understand your study goals, preferred country (Japan, Australia, UK, US, Canada), financial situation, and visa requirements. This helps us design the most suitable plan for your application.",
      icon: UserCheck,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Course & Country Guidance",
      description:
        "Based on your academic background and interests, we help you choose the right course and country that aligns with your career goals and visa eligibility.",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Test & Exam Preparation Support",
      description:
        "We provide guidance for language and eligibility tests such as IELTS, TOEFL, JLPT, or country-specific exams, to ensure you meet visa and admission requirements.",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "University & Program Selection",
      description:
        "We shortlist the best universities and programs across Japan, Australia, UK, US, and Canada based on your budget, preferences, and scholarship opportunities.",
      icon: Globe2,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Visa Documentation Assistance",
      description:
        "Our experts guide you in preparing, verifying, and submitting all documents required for your visa applications across different countries.",
      icon: FileCheck,
      color: "from-cyan-500 to-teal-500",
    },
    {
      title: "Visa Interview & Embassy Prep",
      description:
        "We conduct mock interviews and provide guidance for embassy questions to help you confidently present your case for Japan, Australia, UK, US, or Canada.",
      icon: MessageSquare,
      color: "from-rose-500 to-pink-500",
    },
    {
      title: "Pre-departure Orientation",
      description:
        "We brief you on travel arrangements, accommodation, local culture, and essential tips for a smooth transition to your chosen country.",
      icon: PlaneTakeoff,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Cultural & Language Training",
      description:
        "Prepare for life abroad with cultural insights, basic language skills, and etiquette tips for your destination country.",
      icon: Languages,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Post-arrival Support",
      description:
        "We assist with initial settlement, accommodation setup, part-time job guidance, and emergency support in your destination country.",
      icon: HelpingHand,
      color: "from-teal-500 to-green-500",
    },
    {
      title: "Scholarship & Financial Guidance",
      description:
        "We help identify scholarships and funding opportunities in Japan, Australia, UK, US, and Canada to reduce financial burden.",
      icon: Trophy,
      color: "from-fuchsia-500 to-purple-500",
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
            Our End-to-End Student Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From your first consultation to post-arrival support, we guide you
            at every step of your study abroad journey.
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 mx-20"></div>
          <div className="absolute top-[550px] left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 mx-12"></div>

          <div className="grid grid-cols-5 gap-8 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 group hover:-translate-y-2">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center mb-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-bold text-sm">
                        {idx + 1}
                      </span>
                    </div>
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
                {idx < steps.length - 1 && (
                  <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                )}
                <div
                  className={`absolute left-0 top-0 w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Connect with our experts to plan your study abroad journey
                step-by-step, from consultation to post-arrival support.
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
