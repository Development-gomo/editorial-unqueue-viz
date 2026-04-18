import { cn } from "@/lib/utils";

/**
 * Reusable page header / hero used by interior pages.
 * Variants control background + text colors via design tokens.
 */
export function PageHeader({
  eyebrow,
  title,
  accent,
  description,
  variant = "light",
  align = "left",
  children,
}) {
  const variants = {
    light: "bg-background text-foreground",
    dark: "bg-secondary text-secondary-foreground",
    primary: "bg-primary text-primary-foreground",
    muted: "bg-muted text-foreground",
  };

  const eyebrowColor = {
    light: "text-muted-foreground",
    dark: "text-secondary-foreground/50",
    primary: "text-primary-foreground/70",
    muted: "text-muted-foreground",
  };

  const descColor = {
    light: "text-muted-foreground",
    dark: "text-secondary-foreground/70",
    primary: "text-primary-foreground/70",
    muted: "text-muted-foreground",
  };

  const accentColor = variant === "primary" ? "text-accent" : "text-primary";

  return (
    <section
      className={cn(
        "pt-32 pb-16 md:pt-40 md:pb-20",
        variants[variant],
        align === "center" && "text-center"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div
          className={cn(
            "grid gap-8 items-end",
            description && align === "left" ? "grid-cols-1 lg:grid-cols-2 lg:gap-16" : "grid-cols-1"
          )}
        >
          <div>
            {eyebrow && (
              <p className={cn("font-sans text-sm tracking-widest mb-4", eyebrowColor[variant])}>
                {eyebrow}
              </p>
            )}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none">
              {title}
              {accent && (
                <>
                  <br />
                  <span className={accentColor}>{accent}</span>
                </>
              )}
            </h1>
          </div>
          {description && (
            <p className={cn("text-lg md:text-xl max-w-xl leading-relaxed", descColor[variant])}>
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
