import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import teamData from "@/data/team.json";

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const teamMembers = teamData.all;

  return (
    <main className="min-w-[320px]">
      <Navigation />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none">
            Meet the
            <br />
            <span className="text-primary">Team</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            A diverse collective of creative minds, strategic thinkers, and
            technical wizards. Together, we make bold happen.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      hoveredIndex === index ? "scale-110 grayscale-0" : "scale-100 grayscale"
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent transition-opacity duration-500",
                      hoveredIndex === index ? "opacity-90" : "opacity-0"
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500",
                      hoveredIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    )}
                  >
                    <p className="text-cloud-white/80 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 bg-cloud-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-cloud-white hover:bg-cloud-white hover:text-secondary transition-all">
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-cloud-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-cloud-white hover:bg-cloud-white hover:text-secondary transition-all">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-cloud-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-cloud-white hover:bg-cloud-white hover:text-secondary transition-all">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Want to join the team?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-accent-foreground/80">
            We're always looking for talented, passionate people to join our creative family.
          </p>
          <a
            href="/contact"
            className="inline-flex bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-display text-base hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            View Open Positions
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Team;
