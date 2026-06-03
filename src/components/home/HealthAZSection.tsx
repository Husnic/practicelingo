import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";
import { BookOpen } from "lucide-react";

const topics = [
  "Diabetes",
  "Asthma",
  "Blood Pressure",
  "Vaccinations",
  "Women's Health",
  "Mental Health",
  "Healthy Living",
  "Cancer Screening",
];

export default function HealthAZSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <SectionHeader
              eyebrow="Health A–Z"
              title="Learn About Your Health In Your Preferred Language"
              subtitle="PracticeLingo helps patients access healthcare information beyond appointments and administration."
            />
            <p className="mt-6 text-text-secondary text-sm leading-relaxed">
              Helping patients become more informed, engaged and proactive about their health.
            </p>
            <div className="mt-8">
              <Button href="/patient/learn-about-your-health">Explore Health A–Z</Button>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#98D37F]/20 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#007F3B]" />
              </div>
              <p className="text-dark font-semibold text-sm">Health topics include:</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {topics.map((topic) => (
                <div
                  key={topic}
                  className="bg-surface rounded-2xl px-4 py-3 border border-border flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#98D37F] shrink-0" />
                  <span className="text-dark text-sm font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
