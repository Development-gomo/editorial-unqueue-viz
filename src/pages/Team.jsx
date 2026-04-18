import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { TeamCard } from "@/components/cards/TeamCard";
import teamData from "@/data/team.json";

const Team = () => {
  const teamMembers = teamData.all;

  return (
    <main className="min-w-[320px]">
      <Navigation />

      <PageHeader
        title="Meet the"
        accent="Team"
        description="A diverse collective of creative minds, strategic thinkers, and technical wizards. Together, we make bold happen."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.name}
                member={member}
                showBio
                socials={["Instagram", "Linkedin", "Twitter"]}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to join the team?"
        description="We're always looking for talented, passionate people to join our creative family."
        ctaText="View Open Positions"
        ctaHref="/contact"
        ctaVariant="hero"
        variant="accent"
      />

      <Footer />
    </main>
  );
};

export default Team;
