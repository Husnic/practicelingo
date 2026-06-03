import SectionHeader from "@/components/shared/SectionHeader";

const stats = [
  {
    value: "1 in 10",
    label: "GP patients in diverse communities face language barriers",
    source: "NHS England",
  },
  {
    value: "16M+",
    label: "NHS appointments were missed in 2025",
    source: "NHS England",
  },
  {
    value: "1.2M",
    label: "GP hours lost due to missed appointments",
    source: "NHS England",
  },
  {
    value: "£216M",
    label: "annual cost of missed appointments to the NHS",
    source: "NHS England",
  },
];

export default function NHSStatsSection() {
  return (
    <section className="py-16 bg-[#005EB8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white/60 text-xs font-semibold uppercase tracking-widest mb-8">
          According to NHS England
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/15 text-center"
            >
              <p className="text-3xl lg:text-4xl font-bold text-white mb-2">{value}</p>
              <p className="text-blue-100 text-xs leading-relaxed">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-white/40 text-xs mt-6">
          Source: NHS England statistics
        </p>
      </div>
    </section>
  );
}
