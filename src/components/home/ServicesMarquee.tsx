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
    <section className="bg-secondary text-secondary-foreground py-6 overflow-hidden">
      <div className="marquee whitespace-nowrap">
        <div className="inline-flex items-center gap-8">
          {[...services, ...services].map((service, index) => (
            <span
              key={index}
              className="font-display text-lg md:text-xl uppercase tracking-wider flex items-center gap-8"
            >
              {service}
              <span className="w-2 h-2 bg-magenta rounded-full" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
