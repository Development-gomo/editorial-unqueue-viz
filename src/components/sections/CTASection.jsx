import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Reusable CTA / call-to-action section.
 */
export function CTASection({
  title,
  description,
  ctaText = "Get in Touch",
  ctaHref = "/contact",
  ctaVariant = "hero",
  variant = "primary",
}) {
  const variants = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
    muted: "bg-muted text-foreground",
  };

  return (
    <section className={cn("py-24 md:py-32", variants[variant])}>
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-80">{description}</p>
        )}
        <Button variant={ctaVariant} size="xl" asChild>
          <Link to={ctaHref}>
            {ctaText}
            <ArrowUpRight className="w-6 h-6" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
