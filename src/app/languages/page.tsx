import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/home/CTASection";
import MockPhone from "@/components/shared/MockPhone";
import { RefreshCw, Volume2, Type } from "lucide-react";

const launchLanguages = [
  { flag: "🇬🇧", name: "English", native: "English", sample: "Welcome to your GP Practice", code: "en" },
  { flag: "🇸🇦", name: "Arabic", native: "العربية", sample: "مرحبًا بكم في عيادة الطبيب", code: "ar" },
  { flag: "🇨🇳", name: "Mandarin", native: "普通话", sample: "欢迎来到您的全科诊所", code: "zh" },
  { flag: "🇵🇹", name: "Portuguese", native: "Português", sample: "Bem-vindo à sua clínica médica", code: "pt" },
  { flag: "🇮🇳", name: "Hindi", native: "हिन्दी", sample: "आपके जीपी क्लिनिक में आपका स्वागत है", code: "hi" },
  { flag: "🇫🇷", name: "French", native: "Français", sample: "Bienvenue dans votre cabinet médical", code: "fr" },
];

const comingSoon = [
  { flag: "🇪🇸", name: "Spanish", native: "Español" },
  { flag: "🇳🇬", name: "Yoruba", native: "Yorùbá" },
  { flag: "🌍", name: "Pidgin", native: "Naijá" },
  { flag: "🇩🇪", name: "German", native: "Deutsch" },
  { flag: "🇮🇹", name: "Italian", native: "Italiano" },
  { flag: "🇬🇭", name: "Twi", native: "Twi" },
];

export default function LanguagesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-secondary py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-4">Languages</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Healthcare Guidance In Multiple Languages
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              PracticeLingo helps patients access healthcare information in their preferred language — supporting diverse communities across the UK.
            </p>
          </div>
        </section>

        {/* Launch languages */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Available Now"
              title="Launch Languages"
              subtitle="Six languages available from day one, covering the most common language needs across UK GP practice communities."
              centered
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {launchLanguages.map((lang) => (
                <div
                  key={lang.code}
                  className="bg-surface rounded-3xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{lang.flag}</span>
                    <div>
                      <h3 className="font-bold text-dark text-lg">{lang.name}</h3>
                      <p className="text-text-secondary text-sm">{lang.native}</p>
                    </div>
                  </div>

                  {/* Sample phrase */}
                  <div className="bg-white rounded-2xl p-4 border border-border mb-4">
                    <p className="text-xs text-text-secondary mb-1">Sample phrase</p>
                    <p className="text-dark font-medium text-sm leading-relaxed">{lang.sample}</p>
                    {lang.code !== "en" && (
                      <p className="text-text-secondary text-xs mt-1 italic">Welcome to your GP Practice</p>
                    )}
                  </div>

                  {/* Audio button */}
                  <button className="w-full flex items-center justify-center gap-2 bg-primary/10 text-primary rounded-xl py-2.5 text-sm font-medium hover:bg-primary/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                    </svg>
                    Listen in {lang.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming soon */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Expanding Soon"
              title="Coming Soon"
              subtitle="PracticeLingo is continuously expanding its language library to serve more communities."
              centered
            />

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {comingSoon.map((lang) => (
                <div
                  key={lang.name}
                  className="bg-white rounded-2xl p-4 border border-border text-center opacity-75"
                >
                  <span className="text-4xl block mb-2">{lang.flag}</span>
                  <p className="font-semibold text-dark text-sm">{lang.name}</p>
                  <p className="text-text-secondary text-xs mb-2">{lang.native}</p>
                  <span className="inline-block bg-border text-text-secondary text-xs px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phone demo */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <SectionHeader
                  eyebrow="Language Experience"
                  title="Seamless Language Switching"
                  subtitle="Patients select their language once — it persists across every page and interaction throughout their journey."
                />
                <div className="mt-8 space-y-4">
                  {[
                    { Icon: RefreshCw, bg: "bg-[#005EB8]", title: "Language Persistence", desc: "Selected language stays active across all QR pages" },
                    { Icon: Volume2, bg: "bg-[#2EB6CC]", title: "Audio Guidance", desc: "All pages include audio playback in the selected language" },
                    { Icon: Type, bg: "bg-[#0B7A82]", title: "Accessible Text", desc: "Large, clear typography designed for all reading levels" },
                  ].map(({ Icon, bg, title, desc }) => (
                    <div key={title} className="flex items-start gap-4 bg-surface rounded-2xl p-4">
                      <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark text-sm">{title}</p>
                        <p className="text-text-secondary text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <MockPhone label="Language Selector">
                <div className="bg-white min-h-[480px] flex flex-col">
                  <div className="bg-primary px-4 py-3">
                    <p className="text-white font-semibold text-sm">Choose Language</p>
                    <p className="text-blue-200 text-xs">اختر لغتك / 选择语言 / Choisir</p>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="space-y-2">
                      {launchLanguages.map((lang) => (
                        <button
                          key={lang.code}
                          className={`w-full flex items-center gap-3 rounded-2xl p-3 border text-left transition-colors ${
                            lang.code === "ar"
                              ? "border-primary bg-primary/5"
                              : "border-border bg-surface hover:border-primary/30"
                          }`}
                        >
                          <span className="text-2xl">{lang.flag}</span>
                          <div className="flex-1">
                            <p className="text-dark text-sm font-medium">{lang.name}</p>
                            <p className="text-text-secondary text-xs">{lang.native}</p>
                          </div>
                          {lang.code === "ar" && (
                            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </MockPhone>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
