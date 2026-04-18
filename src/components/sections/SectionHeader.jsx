import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Reusable section header (eyebrow + headline + accent + optional link).
 */
export function SectionHeader({
  eyebrow,
  title,
  accent,
  link,
  linkText,
  variant = "light",
}) {
  const eyebrowColor =
    variant === "dark" ? "text-secondary-foreground/50" : "text-muted-foreground";
  const linkColor =
    variant === "dark"
      ? "text-secondary-foreground/60 hover:text-primary"
      : "text-muted-foreground hover:text-primary";

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
      <div>
        {eyebrow && (
          <p className={cn("font-sans text-sm tracking-widest mb-4", eyebrowColor)}>{eyebrow}</p>
        )}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {title}
          {accent && (
            <>
              <br />
              <span className="text-primary">{accent}</span>
            </>
          )}
        </h2>
      </div>
      {link && (
        <Link
          to={link}
          className={cn("group font-sans text-sm tracking-wide flex items-center gap-2 transition-colors duration-300", linkColor)}
        >
          {linkText}
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      )}
    </div>
  );
}
