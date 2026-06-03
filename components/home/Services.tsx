import { Home, LayoutPanelLeft, Wrench, DraftingCompass } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import ScrollReveal from "@/components/ScrollReveal";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-paper border border-concrete-200 rounded-lg shadow-[0_1px_2px_rgba(10,12,17,.06)] p-7 flex flex-col gap-5 transition-all duration-200 hover:border-royal-600 hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(10,12,17,.10)]">
      <div className="w-11 h-11 rounded-md bg-royal-50 flex items-center justify-center transition-colors duration-200 group-hover:bg-royal-600 flex-shrink-0">
        <Icon
          size={20}
          className="text-royal-600 transition-colors duration-200 group-hover:text-white"
          strokeWidth={1.75}
        />
      </div>
      <h3 className="font-display text-lg font-semibold text-ink-900">
        {title}
      </h3>
      <p className="font-sans text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}

const services: ServiceCardProps[] = [
  {
    icon: Home,
    title: "Home Construction",
    description:
      "From foundations to finishes, we build quality residential homes tailored to our clients' needs — on time and within budget.",
  },
  {
    icon: LayoutPanelLeft,
    title: "Office Partitioning",
    description:
      "Smart, efficient office fit-outs that maximise your workspace without compromising on aesthetics or functionality.",
  },
  {
    icon: Wrench,
    title: "Repair & Renovation",
    description:
      "Breathe new life into existing structures with precise, professional repair and renovation work you can rely on.",
  },
  {
    icon: DraftingCompass,
    title: "Architectural Design",
    description:
      "From concept to detailed drawings, we translate your vision into buildable designs that meet NCA standards.",
  },
];

export default function Services() {
  return (
    <section className="bg-concrete-50 py-14 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <ScrollReveal className="mb-12">
          <Eyebrow text="Our Services" className="mb-5" />
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-ink-900 max-w-[480px]">
            Everything You Need to Build
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 75}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
