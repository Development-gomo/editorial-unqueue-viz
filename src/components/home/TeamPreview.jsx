import { SectionHeader } from "@/components/sections/SectionHeader";
import { TeamCard } from "@/components/cards/TeamCard";
import { useWpData } from "@/hooks/useWpData";

export function TeamPreview() {
  const teamData = useWpData("team");
  const teamMembers = teamData?.preview ?? [];

  return (
    <section className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Our Team"
          title="Meet the"
          accent="minds behind"
          link="/team"
          linkText="Full Team"
          variant="dark"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
              roleColor="text-secondary-foreground/50"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
