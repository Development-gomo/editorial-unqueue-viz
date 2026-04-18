import { useState } from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = { Instagram, Linkedin, Twitter };

/**
 * Reusable team member card with hover overlay.
 */
export function TeamCard({
  member,
  showBio = false,
  socials = ["Instagram", "Linkedin"],
  roleColor = "text-muted-foreground",
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
        <img
          src={member.image}
          alt={member.name}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            hovered ? "scale-110 grayscale-0" : "scale-100 grayscale"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent transition-opacity duration-500",
            hovered ? "opacity-90" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500",
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {showBio && member.bio && (
            <p className="text-cloud-white/80 text-sm mb-4 leading-relaxed">{member.bio}</p>
          )}
          <div className="flex gap-3">
            {socials.map((name) => {
              const Icon = iconMap[name];
              if (!Icon) return null;
              return (
                <a
                  key={name}
                  href="#"
                  className="w-10 h-10 bg-cloud-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-cloud-white hover:bg-cloud-white hover:text-secondary transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="font-display text-xl font-bold">{member.name}</h3>
        <p className={cn("text-sm", roleColor)}>{member.role}</p>
      </div>
    </div>
  );
}
