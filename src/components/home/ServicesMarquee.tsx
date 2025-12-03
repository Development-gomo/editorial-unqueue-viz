const services = [
  "Brand Strategy",
  "Digital Design",
  "Web Development",
  "Motion Graphics",
  "UX/UI Design",
  "Art Direction",
  "Creative Campaigns",
  "Social Media",
];

export function ServicesMarquee() {
  return (
    <section className="bg-secondary text-secondary-foreground py-5 overflow-hidden">
      <div className="marquee whitespace-nowrap">
        <div className="inline-flex items-center gap-12">
          {[...services, ...services].map((service, index) => (
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
