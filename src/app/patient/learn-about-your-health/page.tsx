import PatientLayout from "@/components/patient/PatientLayout";
import { Droplets, Wind, Heart, Brain, User, Syringe, Scan, Salad, Activity, Baby, Shield } from "lucide-react";

const topics = [
  { Icon: Droplets, title: "Diabetes", tags: ["Type 2", "Prevention", "Diet"], bg: "bg-[#EF4444]" },
  { Icon: Wind, title: "Asthma", tags: ["Inhaler", "Triggers", "Management"], bg: "bg-[#2EB6CC]" },
  { Icon: Heart, title: "Blood Pressure", tags: ["Heart health", "Stroke prevention"], bg: "bg-[#EC4899]" },
  { Icon: Brain, title: "Mental Health", tags: ["Anxiety", "Depression", "Support"], bg: "bg-[#8B5CF6]" },
  { Icon: User, title: "Women's Health", tags: ["Cervical screening", "Contraception"], bg: "bg-[#EC4899]" },
  { Icon: Syringe, title: "Vaccinations", tags: ["Flu jab", "COVID", "Children"], bg: "bg-[#005EB8]" },
  { Icon: Scan, title: "Cancer Screening", tags: ["Bowel", "Breast", "Cervical"], bg: "bg-[#EF4444]" },
  { Icon: Salad, title: "Healthy Eating", tags: ["Nutrition", "5-a-day", "BMI"], bg: "bg-[#98D37F]" },
  { Icon: Activity, title: "Exercise & Lifestyle", tags: ["Physical activity", "Sleep", "Stress"], bg: "bg-[#0B7A82]" },
  { Icon: Baby, title: "Children's Health", tags: ["Development", "Vaccinations", "Nutrition"], bg: "bg-[#F59E0B]" },
  { Icon: Shield, title: "Sexual Health", tags: ["STI testing", "Contraception"], bg: "bg-[#8B5CF6]" },
];

export default function LearnAboutHealthPage() {
  return (
    <PatientLayout practiceName="Earl's Court H&W Centre">
      <div className="p-4">
        <div className="bg-[#007F3B] rounded-3xl p-5 mb-5 text-white">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-xl font-bold mb-1">Learn About Your Health</h1>
          <p className="text-green-100 text-sm">Health A-Z — easy-to-understand health guides in your language.</p>
        </div>

        {/* Search bar */}
        <div className="relative mb-5">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            placeholder="Search health topics..."
            className="w-full pl-9 pr-4 py-3 border border-border rounded-2xl text-sm text-dark placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-[#005EB8] bg-white"
          />
        </div>

        <div className="space-y-3">
          {topics.map(({ Icon, title, tags, bg }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-4 border border-border hover:border-[#005EB8]/30 hover:shadow-sm transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-dark text-sm">{title}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs text-text-secondary bg-surface px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-surface rounded-2xl p-4 text-center">
          <p className="text-text-secondary text-xs">
            Content sourced from NHS guidelines.{" "}
            <a href="https://www.nhs.uk/conditions/" target="_blank" rel="noopener noreferrer" className="text-[#005EB8] font-medium">
              See full NHS A-Z
            </a>
          </p>
        </div>
      </div>
    </PatientLayout>
  );
}
