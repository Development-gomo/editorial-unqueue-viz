import servicesData from "@/data/services.json"; // kept for type reference only
import { useWpData } from "@/hooks/useWpData";

export function ServicesMarquee() {
  const { items = [] } = useWpData("services") || {};

  return (
    <section className="bg-secondary text-secondary-foreground py-5 overflow-hidden">
      <div className="marquee whitespace-nowrap">
        <div className="inline-flex items-center gap-12">
          {[...items, ...items].map((service, index) => (
            <span
              key={index}
              className="font-sans text-sm md:text-base tracking-wide flex items-center gap-12 text-secondary-foreground/70"
            >
              {service}
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
